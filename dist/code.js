"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const culori_1 = require("culori");
figma.showUI(__html__, { width: 360, height: 320 });
function toFigmaName(name) {
    const parts = name.split('-');
    if (parts.length > 1) {
        const last = parts.pop();
        return parts.join('/') + '/' + last;
    }
    return name;
}
function parseCssVariables(css) {
    var _a;
    const result = {};
    // remove comments and surrounding selectors
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    const re = /--([a-zA-Z0-9\-_]+)\s*:\s*([^;]+);/g;
    let m;
    const toRGB = (0, culori_1.converter)('rgb');
    while ((m = re.exec(css)) !== null) {
        const name = m[1];
        const valueStr = m[2].trim();
        const aliasMatch = valueStr.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
        if (aliasMatch) {
            result[name] = { type: 'ALIAS', value: aliasMatch[1] };
            continue;
        }
        const color = (0, culori_1.parse)(valueStr);
        if (color) {
            const rgb = (0, culori_1.clampRgb)(toRGB(color));
            result[name] = {
                type: 'COLOR',
                value: { r: rgb.r, g: rgb.g, b: rgb.b, a: (_a = rgb.alpha) !== null && _a !== void 0 ? _a : 1 }
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
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (msg.type === 'import-css') {
        const vars = parseCssVariables(msg.css);
        const collectionName = 'CSS Variables';
        let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
        if (!collection) {
            collection = figma.variables.createVariableCollection(collectionName);
        }
        const modeId = collection.modes[0].modeId;
        const allVars = yield figma.variables.getLocalVariablesAsync();
        const nameMap = new Map();
        for (const v of allVars) {
            nameMap.set(v.name, v);
            const css = (_a = v.codeSyntax) === null || _a === void 0 ? void 0 : _a.WEB;
            const match = css === null || css === void 0 ? void 0 : css.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
            if (match) {
                nameMap.set(match[1], v);
            }
        }
        const created = {};
        // First, handle non-alias variables
        for (const [cssName, data] of Object.entries(vars)) {
            if (data.type === 'ALIAS')
                continue;
            const figmaName = toFigmaName(cssName);
            let variable = collection.variableIds
                .map(id => figma.variables.getVariableById(id))
                .find(v => v.name === figmaName);
            if (!variable) {
                variable = figma.variables.createVariable(figmaName, collection.id, data.type);
            }
            variable.setValueForMode(modeId, data.value);
            variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
            created[cssName] = variable;
            nameMap.set(cssName, variable);
        }
        // Resolve alias variables
        let aliasEntries = Object.entries(vars).filter(([, d]) => d.type === 'ALIAS');
        let generations = aliasEntries.length;
        while (aliasEntries.length && generations > 0) {
            const remaining = [];
            for (const [cssName, data] of aliasEntries) {
                const target = nameMap.get(data.value);
                if (target) {
                    const figmaName = toFigmaName(cssName);
                    let variable = collection.variableIds
                        .map(id => figma.variables.getVariableById(id))
                        .find(v => v.name === figmaName);
                    if (!variable) {
                        variable = figma.variables.createVariable(figmaName, collection.id, target.resolvedType);
                    }
                    const alias = figma.variables.createVariableAlias(target);
                    variable.setValueForMode(modeId, alias);
                    variable.setVariableCodeSyntax('WEB', `var(--${cssName})`);
                    created[cssName] = variable;
                    nameMap.set(cssName, variable);
                }
                else {
                    remaining.push([cssName, data]);
                }
            }
            aliasEntries = remaining;
            generations--;
        }
        figma.notify(`Imported ${Object.keys(vars).length - aliasEntries.length} variables`);
        figma.closePlugin();
    }
});
