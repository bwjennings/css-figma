import { parse, converter } from 'culori';

figma.showUI(__html__, { width: 360, height: 320 });

// Helper to parse CSS variable definitions
function parseCssVariables(css: string): Record<string, {type: 'COLOR' | 'FLOAT', value: any}> {
  const result: Record<string, {type: 'COLOR' | 'FLOAT', value: any}> = {};
  // remove comments and surrounding selectors
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const re = /--([a-zA-Z0-9\-_]+)\s*:\s*([^;]+);/g;
  let m: RegExpExecArray | null;
  const toRGB = converter('rgb');
  while ((m = re.exec(css)) !== null) {
    const name = m[1];
    const valueStr = m[2].trim();
    const color = parse(valueStr);
    if (color) {
      const rgb = toRGB(color);
      result[name] = {
        type: 'COLOR',
        value: { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.alpha ?? 1 }
      };
      continue;
    }
    const num = parseFloat(valueStr);
    if (!isNaN(num)) {
      result[name] = { type: 'FLOAT', value: num };
    }
  }
  return result;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import-css') {
    const vars = parseCssVariables(msg.css as string);
    const collectionName = 'CSS Variables';
    let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    for (const [name, data] of Object.entries(vars)) {
      let variable = collection!.variableIds
        .map(id => figma.variables.getVariableById(id)!)
        .find(v => v.name === name);
      if (!variable) {
        variable = figma.variables.createVariable(name, collection!.id, data.type);
      }
      if (data.type === 'COLOR') {
        variable.setValueForMode(modeId, data.value);
      } else {
        variable.setValueForMode(modeId, data.value);
      }
    }
    figma.notify(`Imported ${Object.keys(vars).length} variables`);
    figma.closePlugin();
  }
};
