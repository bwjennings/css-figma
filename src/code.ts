import { parse, converter, clampRgb } from 'culori';

// Helper to parse CSS variable definitions
type ParsedVar = { type: 'COLOR' | 'FLOAT' | 'ALIAS'; value: any };

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
  TEXT_CONTENT: ['TEXT', 'CONTENT', 'STRING'],
  CORNER_RADIUS: ['RADIUS', 'BORDER_RADIUS', 'ROUNDNESS'],
  WIDTH_HEIGHT: ['WIDTH', 'HEIGHT', 'DIMENSION'],
  GAP: ['GAP', 'SPACING', 'SPACE'],
  ALL_FILLS: ['FILL', 'BACKGROUND'],
  FRAME_FILL: ['FRAME_FILL'],
  SHAPE_FILL: ['SHAPE_FILL'],
  TEXT_FILL: ['TEXT_FILL', 'FONT_COLOR'],
  STROKE_COLOR: ['STROKE_COLOR', 'BORDER_COLOR'],
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

figma.showUI(__html__, { themeColors: true, width: 400, height: 480 });
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

function getGroup(name: string): string {
  const figmaName = toFigmaName(name);
  const idx = figmaName.lastIndexOf('/');
  return idx === -1 ? '' : figmaName.slice(0, idx);
}

function parseCssVariables(css: string): Record<string, ParsedVar> {
  const result: Record<string, ParsedVar> = {};
  // remove comments and surrounding selectors
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const re = /--([a-zA-Z0-9\-_]+)\s*:\s*([^;]+);/g;
  let m: RegExpExecArray | null;
  const toRGB = converter('rgb');
  while ((m = re.exec(css)) !== null) {
    const name = m[1];
    const valueStr = m[2].trim();
    const aliasMatch = valueStr.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
    if (aliasMatch) {
      result[name] = { type: 'ALIAS', value: aliasMatch[1] };
      continue;
    }

    const numberMatch = valueStr.match(/^[-+]?(?:\d*\.)?\d+$/);
    if (numberMatch) {
      const num = parseFloat(valueStr);
      result[name] = { type: 'FLOAT', value: num };
      continue;
    }

    const unitMatch = valueStr.match(/^(-?\d*\.?\d+)([a-zA-Z%]+)$/);
    if (unitMatch) {
      let num = parseFloat(unitMatch[1]);
      const unit = unitMatch[2].toLowerCase();
      if (unit === 'rem') {
        num *= 16;
      }
      result[name] = { type: 'FLOAT', value: num };
      continue;
    }

    const color = parse(valueStr);
    if (color) {
      const rgb = clampRgb(toRGB(color));
      result[name] = {
        type: 'COLOR',
        value: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 }
      };
      continue;
    }
  }
  return result;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'preview-css') {
    const vars = parseCssVariables(msg.css as string);
    const preview = Object.entries(vars).map(([name, data]) => ({
      name,
      type: data.type,
      value: data.value,
      scopes: detectVariableScopes(name)
    }));
    figma.ui.postMessage({ type: 'preview-data', preview });
    return;
  }
  if (msg.type === 'import-css') {
    const vars = parseCssVariables(msg.css as string);
    const collectionName = msg.collectionName as string;
    const itemScopes = msg.itemScopes as Record<string, VariableScope[] | undefined> | undefined;
    const groupScopes = msg.groupScopes as Record<string, VariableScope[] | undefined> | undefined;
    let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;

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
    const allVars = await figma.variables.getLocalVariablesAsync();
    const nameMap = new Map<string, Variable>();
    for (const v of allVars) {
      nameMap.set(v.name, v);
      const css = v.codeSyntax?.WEB;
      const match = css?.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
      if (match) {
        nameMap.set(match[1], v);
      }
    }

    const created: Record<string, Variable> = {};
    let added = 0;
    let updated = 0;

    // First, handle non-alias variables
    for (const [cssName, data] of Object.entries(vars)) {
      if (data.type === 'ALIAS') continue;
      const figmaName = toFigmaName(cssName);
      let variable = collection!.variableIds
        .map(id => figma.variables.getVariableById(id)!)
        .find(v => v.name === figmaName);
      if (!variable) {
        variable = figma.variables.createVariable(figmaName, collection!.id, data.type);
        added++;
      } else {
        updated++;
      }
      variable.setValueForMode(modeId, data.value);
      variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
      const scopes = getScopesForName(cssName);
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
            variable = figma.variables.createVariable(figmaName, collection!.id, target.resolvedType);
            added++;
          } else {
            updated++;
          }
          const alias = figma.variables.createVariableAlias(target);
          variable.setValueForMode(modeId, alias);
          variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
          const scopes = getScopesForName(cssName);
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
