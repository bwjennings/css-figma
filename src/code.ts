import { parse, converter, clampRgb } from 'culori';

// Helper to parse CSS variable definitions
type ParsedModeValue = { color?: { r: number; g: number; b: number; a: number }; alias?: string };
type ParsedVar = {
  type: 'COLOR' | 'FLOAT' | 'ALIAS';
  value: any;
  modes?: Record<string, ParsedModeValue>;
  description?: string;
};

const VARIABLE_SCOPES: VariableScope[] = [
  'TEXT_CONTENT',
  'CORNER_RADIUS',
  'WIDTH_HEIGHT',
  'GAP',
  'ALL_FILLS',
  'FRAME_FILL',
  'SHAPE_FILL',
  'TEXT_FILL',
  'STROKE_COLOR',
  'STROKE_FLOAT',
  'EFFECT_FLOAT',
  'EFFECT_COLOR',
  'OPACITY',
  'FONT_FAMILY',
  'FONT_STYLE',
  'FONT_WEIGHT',
  'FONT_SIZE',
  'LINE_HEIGHT',
  'LETTER_SPACING',
  'PARAGRAPH_SPACING',
  'PARAGRAPH_INDENT'
];

const SCOPE_KEYWORDS: Record<VariableScope, string[]> = {
  TEXT_CONTENT: ['CONTENT', 'STRING'],
  CORNER_RADIUS: ['RADIUS', 'BORDER_RADIUS', 'ROUNDNESS'],
  WIDTH_HEIGHT: ['WIDTH', 'HEIGHT', 'DIMENSION'],
  GAP: ['GAP', 'SPACING', 'SPACE'],
  ALL_FILLS: ['FILL', 'BACKGROUND', 'OVERLAY', 'SCRIM'],
  FRAME_FILL: ['FRAME_FILL', 'SURFACE'],
  SHAPE_FILL: ['SHAPE_FILL'],
  TEXT_FILL: ['TEXT_FILL', 'FONT_COLOR'],
  STROKE_COLOR: ['STROKE_COLOR', 'BORDER_COLOR', 'BORDER'],
  STROKE_FLOAT: ['STROKE_WIDTH', 'BORDER_WIDTH'],
  EFFECT_FLOAT: ['BLUR', 'SHADOW_SPREAD', 'EFFECT_SIZE'],
  EFFECT_COLOR: ['SHADOW_COLOR', 'GLOW_COLOR'],
  OPACITY: ['OPACITY', 'ALPHA', 'TRANSPARENCY'],
  FONT_FAMILY: ['FONT', 'TYPEFACE', 'FONT_FAMILY'],
  FONT_STYLE: ['STYLE', 'FONT_STYLE'],
  FONT_WEIGHT: ['FONT_WEIGHT', 'WEIGHT'],
  FONT_SIZE: ['FONT_SIZE', 'TEXT_SIZE'],
  LINE_HEIGHT: ['LINE_HEIGHT', 'LEADING'],
  LETTER_SPACING: ['LETTER_SPACING', 'TRACKING'],
  PARAGRAPH_SPACING: ['PARAGRAPH_SPACING', 'PARAGRAPH_GAP'],
  PARAGRAPH_INDENT: ['PARAGRAPH_INDENT', 'INDENTATION']
};

const SCOPES_BY_TYPE: Record<'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN', VariableScope[]> = {
  COLOR: ['ALL_FILLS', 'FRAME_FILL', 'SHAPE_FILL', 'TEXT_FILL', 'STROKE_COLOR', 'EFFECT_COLOR'],
  FLOAT: [
    'CORNER_RADIUS',
    'WIDTH_HEIGHT',
    'GAP',
    'STROKE_FLOAT',
    'EFFECT_FLOAT',
    'OPACITY',
    'FONT_WEIGHT',
    'FONT_SIZE',
    'LINE_HEIGHT',
    'LETTER_SPACING',
    'PARAGRAPH_SPACING',
    'PARAGRAPH_INDENT'
  ],
  STRING: ['TEXT_CONTENT', 'FONT_FAMILY', 'FONT_STYLE'],
  BOOLEAN: []
};

function filterScopesForType(
  scopes: VariableScope[],
  type: 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN' | string
): VariableScope[] {
  const allowed = SCOPES_BY_TYPE[type as 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN'];
  if (!allowed) return scopes;
  return scopes.filter(s => allowed.includes(s));
}

async function getAllLocalVariables(): Promise<Variable[]> {
  const collections = figma.variables.getLocalVariableCollections();
  const perCollection = await Promise.all(
    collections.map(c => figma.variables.getLocalVariablesForCollectionAsync(c))
  );
  return perCollection.flat();
}

figma.showUI(__html__, { themeColors: true, width: 900, height: 600 });
figma.ui.postMessage({
  type: 'init',
  collections: figma.variables.getLocalVariableCollections().map(c => c.name),
  scopes: VARIABLE_SCOPES
});

function detectVariableScopes(name: string): VariableScope[] {
  const normalized = name.replace(/[^a-zA-Z0-9]+/g, '_').toUpperCase();
  const scopes = VARIABLE_SCOPES.filter(scope => normalized.includes(scope));
  for (const [scope, keywords] of Object.entries(SCOPE_KEYWORDS)) {
    const s = scope as VariableScope;
    if (scopes.includes(s)) continue;
    for (const kw of keywords) {
      if (normalized.includes(kw.replace(/[^A-Z0-9]+/g, '_').toUpperCase())) {
        scopes.push(s);
        break;
      }
    }
  }
  return scopes;
}

function toFigmaName(name: string): string {
  const parts = name.split('-');
  if (parts.length > 1) {
    const last = parts.pop()!;
    return parts.join('/') + '/' + last;
  }
  return name;
}

function toCssName(figmaName: string): string {
  return figmaName.replace(/\//g, '-');
}

function getGroup(name: string): string {
  const figmaName = toFigmaName(name);
  const idx = figmaName.lastIndexOf('/');
  return idx === -1 ? '' : figmaName.slice(0, idx);
}

function buildExistingVarMap(vars: Variable[]): Record<string, ParsedVar> {
  const idMap = new Map<string, Variable>();
  for (const v of vars) {
    idMap.set(v.id, v);
  }

  const resolveValue = (v: Variable): any => {
    let val = Object.values(v.valuesByMode)[0];
    while (val && typeof val === 'object' && 'type' in val && val.type === 'VARIABLE_ALIAS') {
      const target = idMap.get(val.id);
      if (!target) return undefined;
      val = Object.values(target.valuesByMode)[0];
    }
    return val;
  };

  const result: Record<string, ParsedVar> = {};
  for (const v of vars) {
    const cssName = toCssName(v.name);
    const value = resolveValue(v);
    if (value === undefined) continue;
    if (v.resolvedType === 'COLOR') {
      result[cssName] = {
        type: 'COLOR',
        value: { r: value.r, g: value.g, b: value.b, a: value.a ?? 1 }
      };
    } else if (v.resolvedType === 'FLOAT' && typeof value === 'number') {
      result[cssName] = { type: 'FLOAT', value };
    }
  }
  return result;
}

function parseCssVariables(
  css: string,
  existing?: Record<string, ParsedVar>
): Record<string, ParsedVar> {
  const result: Record<string, ParsedVar> = {};
  const modeBlocks: { mode: string; content: string }[] = [];
  css = css.replace(
    /\[data-[\w-]+=(?:"([^"]+)"|'([^']+)')\]\s*\{([^]*?)\}/g,
    (_full, m1, m2, content) => {
      modeBlocks.push({ mode: m1 || m2, content });
      return '';
    }
  );
  const re = /--([a-zA-Z0-9\-_]+)\s*:\s*([^;]+);(?:[ \t]*\/\*([^]*?)\*\/)?/g;
  let m: RegExpExecArray | null;
  const toRGB = converter('rgb');
  const toOKLCH = converter('oklch');
  const parseColorPart = (str: string): ParsedModeValue => {
    const aliasMatch = str.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
    if (aliasMatch) {
      const aliasName = aliasMatch[1];
      const target = result[aliasName] || existing?.[aliasName];
      let color;
      if (target && target.type === 'COLOR') {
        color = target.value;
      }
      return { alias: aliasName, color };
    }
    const relativeMatch = str.match(
      /^oklch\(from\s+var\(--([\w-]+)\)\s+([^\s]+)\s+([^\s]+)\s+(.+)\)$/
    );
    if (relativeMatch) {
      const baseName = relativeMatch[1];
      const lStr = relativeMatch[2];
      const cStr = relativeMatch[3];
      const hStr = relativeMatch[4];
      const base = result[baseName] || existing?.[baseName];
      if (base && base.type === 'COLOR') {
        const baseOklch = toOKLCH({
          mode: 'rgb',
          ...base.value,
          alpha: base.value.a
        });
        const parseChannel = (str: string, baseVal: number, letter: string): number => {
          if (str === letter) return baseVal;
          const chromaMax = 0.4;
          const varMatch = str.match(/^var\(--([\w-]+)\)$/);
          if (varMatch) {
            const v = result[varMatch[1]] || existing?.[varMatch[1]];
            if (v && v.type === 'FLOAT') {
              return letter === 'c' ? v.value * chromaMax : v.value;
            }
          }
          if (str.endsWith('%')) {
            const p = parseFloat(str) / 100;
            return letter === 'c' ? p * chromaMax : p;
          }
          return parseFloat(str);
        };
        const parseHue = (str: string, baseHue: number): number => {
          if (str === 'h') return baseHue;
          const calc = str.match(/^calc\(h\s*([+\-])\s*var\(--([\w-]+)\)\)$/);
          if (calc) {
            const op = calc[1];
            const varName = calc[2];
            const shift = result[varName] || existing?.[varName];
            if (shift && shift.type === 'FLOAT') {
              return op === '+' ? baseHue + shift.value : baseHue - shift.value;
            }
          }
          return parseFloat(str);
        };
        const l = parseChannel(lStr, baseOklch.l, 'l');
        const c = parseChannel(cStr, baseOklch.c, 'c');
        const h = parseHue(hStr, baseOklch.h ?? 0);
        const rgb = clampRgb(toRGB({ mode: 'oklch', l, c, h, alpha: base.value.a ?? 1 }));
        return { color: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 } };
      }
    }
    const hueVarMatch = str.match(/^oklch\(([^\s]+)\s+([^\s]+)\s+var\(--([\w-]+)\)\)$/);
    if (hueVarMatch) {
      const l = hueVarMatch[1].endsWith('%')
        ? parseFloat(hueVarMatch[1]) / 100
        : parseFloat(hueVarMatch[1]);
      const cRaw = hueVarMatch[2];
      const c = cRaw.endsWith('%')
        ? (parseFloat(cRaw) / 100) * 0.4
        : parseFloat(cRaw);
      const hueVar = result[hueVarMatch[3]] || existing?.[hueVarMatch[3]];
      if (hueVar && hueVar.type === 'FLOAT') {
        const rgb = clampRgb(toRGB({ mode: 'oklch', l, c, h: hueVar.value }));
        return { color: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 } };
      }
    }
    const color = parse(str);
    if (color) {
      const rgb = clampRgb(toRGB(color));
      return { color: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 } };
    }
    return {};
  };
  while ((m = re.exec(css)) !== null) {
    const name = m[1];
    const valueStr = m[2].trim();
    let description = m[3] ? m[3].trim() : undefined;
    if (description && description.startsWith('-')) description = undefined;
    const aliasMatch = valueStr.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
    if (aliasMatch) {
      result[name] = { type: 'ALIAS', value: aliasMatch[1], description };
      continue;
    }

    const numberMatch = valueStr.match(/^[-+]?(?:\d*\.)?\d+$/);
    if (numberMatch) {
      const num = parseFloat(valueStr);
      result[name] = { type: 'FLOAT', value: num, description };
      continue;
    }

    const unitMatch = valueStr.match(/^(-?\d*\.?\d+)([a-zA-Z%]+)$/);
    if (unitMatch) {
      let num = parseFloat(unitMatch[1]);
      const unit = unitMatch[2].toLowerCase();
      if (unit === 'rem') {
        num *= 16;
      } else if (unit === '%') {
        num /= 100;
      }
      result[name] = { type: 'FLOAT', value: num, description };
      continue;
    }

    if (valueStr.startsWith('light-dark(') && valueStr.endsWith(')')) {
      const inner = valueStr.slice(11, -1);
      let depth = 0;
      let split = -1;
      for (let i = 0; i < inner.length; i++) {
        const ch = inner[i];
        if (ch === '(') depth++;
        else if (ch === ')') depth--;
        else if (ch === ',' && depth === 0) {
          split = i;
          break;
        }
      }
      if (split !== -1) {
        const lightStr = inner.slice(0, split).trim();
        const darkStr = inner.slice(split + 1).trim();
        const lightVal = parseColorPart(lightStr);
        const darkVal = parseColorPart(darkStr);
        result[name] = {
          type: 'COLOR',
          value: lightVal.color || darkVal.color,
          modes: { light: lightVal, dark: darkVal },
          description
        };
        continue;
      }
    }

    const relativeMatch = valueStr.match(
      /^oklch\(from\s+var\(--([\w-]+)\)\s+([^\s]+)\s+([^\s]+)\s+(.+)\)$/
    );
    if (relativeMatch) {
      const baseName = relativeMatch[1];
      const lStr = relativeMatch[2];
      const cStr = relativeMatch[3];
      const hStr = relativeMatch[4];
      const base = result[baseName] || existing?.[baseName];
      if (base && base.type === 'COLOR') {
        const baseOklch = toOKLCH({
          mode: 'rgb',
          ...base.value,
          alpha: base.value.a
        });
        const parseChannel = (str: string, baseVal: number, letter: string): number => {
          if (str === letter) return baseVal;
          const chromaMax = 0.4;
          const varMatch = str.match(/^var\(--([\w-]+)\)$/);
          if (varMatch) {
            const v = result[varMatch[1]] || existing?.[varMatch[1]];
            if (v && v.type === 'FLOAT') {
              return letter === 'c' ? v.value * chromaMax : v.value;
            }
          }
          if (str.endsWith('%')) {
            const p = parseFloat(str) / 100;
            return letter === 'c' ? p * chromaMax : p;
          }
          return parseFloat(str);
        };
        const parseHue = (str: string, baseHue: number): number => {
          if (str === 'h') return baseHue;
          const calc = str.match(/^calc\(h\s*([+\-])\s*var\(--([\w-]+)\)\)$/);
          if (calc) {
            const op = calc[1];
            const varName = calc[2];
            const shift = result[varName] || existing?.[varName];
            if (shift && shift.type === 'FLOAT') {
              return op === '+' ? baseHue + shift.value : baseHue - shift.value;
            }
          }
          return parseFloat(str);
        };
        const l = parseChannel(lStr, baseOklch.l, 'l');
        const c = parseChannel(cStr, baseOklch.c, 'c');
        const h = parseHue(hStr, baseOklch.h ?? 0);
        const rgb = clampRgb(
          toRGB({ mode: 'oklch', l, c, h, alpha: base.value.a ?? 1 })
        );
        result[name] = {
          type: 'COLOR',
          value: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 },
          description
        };
        continue;
      }
    }

    const hueVarMatch = valueStr.match(/^oklch\(([^\s]+)\s+([^\s]+)\s+var\(--([\w-]+)\)\)$/);
    if (hueVarMatch) {
      const l = hueVarMatch[1].endsWith('%')
        ? parseFloat(hueVarMatch[1]) / 100
        : parseFloat(hueVarMatch[1]);
      const cRaw = hueVarMatch[2];
      const c = cRaw.endsWith('%')
        ? (parseFloat(cRaw) / 100) * 0.4
        : parseFloat(cRaw);
      const hueVar = result[hueVarMatch[3]] || existing?.[hueVarMatch[3]];
      if (hueVar && hueVar.type === 'FLOAT') {
        const rgb = clampRgb(toRGB({ mode: 'oklch', l, c, h: hueVar.value }));
        result[name] = {
          type: 'COLOR',
          value: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 },
          description
        };
        continue;
      }
    }

    const color = parse(valueStr);
    if (color) {
      const rgb = clampRgb(toRGB(color));
      result[name] = {
        type: 'COLOR',
        value: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 },
        description
      };
      continue;
    }
  }

  for (const block of modeBlocks) {
    re.lastIndex = 0;
    while ((m = re.exec(block.content)) !== null) {
      const name = m[1];
      const valueStr = m[2].trim();
      const val = parseColorPart(valueStr);
      if (!val.color && !val.alias) continue;
      let entry = result[name];
      if (!entry) {
        entry = {
          type: 'COLOR',
          value: val.color || { r: 0, g: 0, b: 0, a: 1 }
        };
        result[name] = entry;
      }
      if (!entry.modes) entry.modes = {};
      entry.modes[block.mode] = val;
    }
  }
  return result;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'resize') {
    figma.ui.resize(msg.width, msg.height);
    return;
  }
  if (msg.type === 'preview-css') {
    const existingVars = buildExistingVarMap(await getAllLocalVariables());
    const vars = parseCssVariables(msg.css as string, existingVars);
    const preview = Object.entries(vars).map(([name, data]) => ({
      name,
      type: data.type,
      value: data.value,
      description: data.description,
      scopes: filterScopesForType(detectVariableScopes(name), data.type)
    }));
    figma.ui.postMessage({ type: 'preview-data', preview });
    return;
  }
  if (msg.type === 'import-css') {
    const allVars = await getAllLocalVariables();
    const existingVars = buildExistingVarMap(allVars);
    const vars = parseCssVariables(msg.css as string, existingVars);
    const collectionName = msg.collectionName as string;
    const itemScopes = msg.itemScopes as Record<string, VariableScope[] | undefined> | undefined;
    const groupScopes = msg.groupScopes as Record<string, VariableScope[] | undefined> | undefined;
    let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    let modeId = collection.modes[0].modeId;
    const defaultModeId = modeId;
    const modeIdMap: Record<string, string> = {
      [collection.modes[0].name.toLowerCase()]: collection.modes[0].modeId
    };
    if (Object.values(vars).some(v => v.modes)) {
      const modeNames = new Set<string>();
      for (const v of Object.values(vars)) {
        if (v.modes) {
          for (const name of Object.keys(v.modes)) {
            modeNames.add(name);
          }
        }
      }
      for (const name of modeNames) {
        let mode = collection.modes.find(
          m => m.name.toLowerCase() === name.toLowerCase()
        );
        if (!mode) {
          mode = collection.addMode(name);
        }
        modeIdMap[name.toLowerCase()] = mode.modeId;
      }
    }

    const getScopesForName = (name: string): VariableScope[] => {
      if (itemScopes && itemScopes[name] && itemScopes[name]!.length) {
        return itemScopes[name]!;
      }
      const group = getGroup(name);
      if (groupScopes && groupScopes[group] && groupScopes[group]!.length) {
        return groupScopes[group]!;
      }
      return detectVariableScopes(name);
    };
    const nameMap = new Map<string, Variable>();
    for (const v of allVars) {
      nameMap.set(v.name, v);
      nameMap.set(toCssName(v.name), v);
      const css = v.codeSyntax?.WEB;
      const match = css?.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
      if (match) {
        nameMap.set(match[1], v);
      }
    }

    const created: Record<string, Variable> = {};
    let added = 0;
    let updated = 0;
    const modeAliasEntries: { variable: Variable; modeId: string; target: string }[] = [];

    const applyModeValue = (variable: Variable, mId: string, val?: ParsedModeValue) => {
      if (!val) return;
      if (val.alias) {
        const target = nameMap.get(val.alias);
        if (target) {
          const alias = figma.variables.createVariableAlias(target);
          variable.setValueForMode(mId, alias);
        } else {
          modeAliasEntries.push({ variable, modeId: mId, target: val.alias });
        }
      } else if (val.color) {
        variable.setValueForMode(mId, val.color);
      }
    };

    // First, handle non-alias variables
    for (const [cssName, data] of Object.entries(vars)) {
      if (data.type === 'ALIAS') continue;
      const figmaName = toFigmaName(cssName);
      let variable = collection!.variableIds
        .map(id => figma.variables.getVariableById(id)!)
        .find(v => v.name === figmaName);
      if (!variable) {
        // createVariable previously accepted a collection ID, but now requires the
        // collection object itself. Pass the collection node instead of its ID.
        variable = figma.variables.createVariable(figmaName, collection!, data.type);
        added++;
      } else {
        updated++;
      }
      if (data.modes) {
        variable.setValueForMode(defaultModeId, data.value);
        for (const [mName, mVal] of Object.entries(data.modes)) {
          const mId = modeIdMap[mName.toLowerCase()];
          if (mId) applyModeValue(variable, mId, mVal);
        }
      } else {
        variable.setValueForMode(defaultModeId, data.value);
      }
      variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
      if (data.description) {
        variable.description = data.description;
      }
      const scopes = filterScopesForType(getScopesForName(cssName), data.type);
      if (scopes.length) {
        variable.scopes = scopes;
      }
      created[cssName] = variable;
      nameMap.set(cssName, variable);
    }

    // Resolve alias variables
    let aliasEntries = Object.entries(vars).filter(([, d]) => d.type === 'ALIAS') as [string, ParsedVar][];
    let generations = aliasEntries.length;
    while (aliasEntries.length && generations > 0) {
      const remaining: typeof aliasEntries = [];
      for (const [cssName, data] of aliasEntries) {
        const target = nameMap.get(data.value);
        if (target) {
          const figmaName = toFigmaName(cssName);
          let variable = collection!.variableIds
            .map(id => figma.variables.getVariableById(id)!)
            .find(v => v.name === figmaName);
          if (!variable) {
            // Pass the collection node directly instead of its deprecated ID
            variable = figma.variables.createVariable(figmaName, collection!, target.resolvedType);
            added++;
          } else {
            updated++;
          }
          const alias = figma.variables.createVariableAlias(target);
          variable.setValueForMode(modeId, alias);
          variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
          if (data.description) {
            variable.description = data.description;
          }
            const scopes = filterScopesForType(getScopesForName(cssName), target.resolvedType);
            if (scopes.length) {
              variable.scopes = scopes;
            }
          created[cssName] = variable;
          nameMap.set(cssName, variable);
        } else {
          remaining.push([cssName, data]);
        }
      }
      aliasEntries = remaining;
      generations--;
    }

    for (const entry of modeAliasEntries) {
      const target = nameMap.get(entry.target);
      if (target) {
        const alias = figma.variables.createVariableAlias(target);
        entry.variable.setValueForMode(entry.modeId, alias);
      }
    }

    let message = '';
    if (added && updated) {
      message = `Added ${added} and updated ${updated} variables in ${collection.name}`;
    } else if (added) {
      message = `Added ${added} variables to ${collection.name}`;
    } else {
      message = `Updated ${updated} variables in ${collection.name}`;
    }
    figma.notify(message);
    figma.closePlugin();
  }
};
