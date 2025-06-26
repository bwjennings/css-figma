"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn5, res) => function __init() {
    return fn5 && (res = (0, fn5[__getOwnPropNames(fn5)[0]])(fn5 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/culori/src/rgb/parseNumber.js
  var parseNumber, parseNumber_default;
  var init_parseNumber = __esm({
    "node_modules/culori/src/rgb/parseNumber.js"() {
      parseNumber = (color, len) => {
        if (typeof color !== "number") return;
        if (len === 3) {
          return {
            mode: "rgb",
            r: (color >> 8 & 15 | color >> 4 & 240) / 255,
            g: (color >> 4 & 15 | color & 240) / 255,
            b: (color & 15 | color << 4 & 240) / 255
          };
        }
        if (len === 4) {
          return {
            mode: "rgb",
            r: (color >> 12 & 15 | color >> 8 & 240) / 255,
            g: (color >> 8 & 15 | color >> 4 & 240) / 255,
            b: (color >> 4 & 15 | color & 240) / 255,
            alpha: (color & 15 | color << 4 & 240) / 255
          };
        }
        if (len === 6) {
          return {
            mode: "rgb",
            r: (color >> 16 & 255) / 255,
            g: (color >> 8 & 255) / 255,
            b: (color & 255) / 255
          };
        }
        if (len === 8) {
          return {
            mode: "rgb",
            r: (color >> 24 & 255) / 255,
            g: (color >> 16 & 255) / 255,
            b: (color >> 8 & 255) / 255,
            alpha: (color & 255) / 255
          };
        }
      };
      parseNumber_default = parseNumber;
    }
  });

  // node_modules/culori/src/colors/named.js
  var named, named_default;
  var init_named = __esm({
    "node_modules/culori/src/colors/named.js"() {
      named = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        // Added in CSS Colors Level 4:
        // https://drafts.csswg.org/css-color/#changes-from-3
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };
      named_default = named;
    }
  });

  // node_modules/culori/src/rgb/parseNamed.js
  var parseNamed, parseNamed_default;
  var init_parseNamed = __esm({
    "node_modules/culori/src/rgb/parseNamed.js"() {
      init_parseNumber();
      init_named();
      parseNamed = (color) => {
        return parseNumber_default(named_default[color.toLowerCase()], 6);
      };
      parseNamed_default = parseNamed;
    }
  });

  // node_modules/culori/src/rgb/parseHex.js
  var hex, parseHex, parseHex_default;
  var init_parseHex = __esm({
    "node_modules/culori/src/rgb/parseHex.js"() {
      init_parseNumber();
      hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
      parseHex = (color) => {
        let match;
        return (match = color.match(hex)) ? parseNumber_default(parseInt(match[1], 16), match[1].length) : void 0;
      };
      parseHex_default = parseHex;
    }
  });

  // node_modules/culori/src/util/regex.js
  var num, num_none, per, per_none, num_per, num_per_none, hue, hue_none, c, rx_num_per_none;
  var init_regex = __esm({
    "node_modules/culori/src/util/regex.js"() {
      num = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
      num_none = `(?:${num}|none)`;
      per = `${num}%`;
      per_none = `(?:${num}%|none)`;
      num_per = `(?:${num}%|${num})`;
      num_per_none = `(?:${num}%|${num}|none)`;
      hue = `(?:${num}(deg|grad|rad|turn)|${num})`;
      hue_none = `(?:${num}(deg|grad|rad|turn)|${num}|none)`;
      c = `\\s*,\\s*`;
      rx_num_per_none = new RegExp("^" + num_per_none + "$");
    }
  });

  // node_modules/culori/src/rgb/parseRgbLegacy.js
  var rgb_num_old, rgb_per_old, parseRgbLegacy, parseRgbLegacy_default;
  var init_parseRgbLegacy = __esm({
    "node_modules/culori/src/rgb/parseRgbLegacy.js"() {
      init_regex();
      rgb_num_old = new RegExp(
        `^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
      );
      rgb_per_old = new RegExp(
        `^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
      );
      parseRgbLegacy = (color) => {
        let res = { mode: "rgb" };
        let match;
        if (match = color.match(rgb_num_old)) {
          if (match[1] !== void 0) {
            res.r = match[1] / 255;
          }
          if (match[2] !== void 0) {
            res.g = match[2] / 255;
          }
          if (match[3] !== void 0) {
            res.b = match[3] / 255;
          }
        } else if (match = color.match(rgb_per_old)) {
          if (match[1] !== void 0) {
            res.r = match[1] / 100;
          }
          if (match[2] !== void 0) {
            res.g = match[2] / 100;
          }
          if (match[3] !== void 0) {
            res.b = match[3] / 100;
          }
        } else {
          return void 0;
        }
        if (match[4] !== void 0) {
          res.alpha = Math.max(0, Math.min(1, match[4] / 100));
        } else if (match[5] !== void 0) {
          res.alpha = Math.max(0, Math.min(1, +match[5]));
        }
        return res;
      };
      parseRgbLegacy_default = parseRgbLegacy;
    }
  });

  // node_modules/culori/src/_prepare.js
  var prepare, prepare_default;
  var init_prepare = __esm({
    "node_modules/culori/src/_prepare.js"() {
      init_parse();
      prepare = (color, mode) => color === void 0 ? void 0 : typeof color !== "object" ? parse_default(color) : color.mode !== void 0 ? color : mode ? __spreadProps(__spreadValues({}, color), { mode }) : void 0;
      prepare_default = prepare;
    }
  });

  // node_modules/culori/src/converter.js
  var converter, converter_default;
  var init_converter = __esm({
    "node_modules/culori/src/converter.js"() {
      init_modes();
      init_prepare();
      converter = (target_mode = "rgb") => (color) => (color = prepare_default(color, target_mode)) !== void 0 ? (
        // if the color's mode corresponds to our target mode
        color.mode === target_mode ? (
          // then just return the color
          color
        ) : (
          // otherwise check to see if we have a dedicated
          // converter for the target mode
          converters[color.mode][target_mode] ? (
            // and return its result...
            converters[color.mode][target_mode](color)
          ) : (
            // ...otherwise pass through RGB as an intermediary step.
            // if the target mode is RGB...
            target_mode === "rgb" ? (
              // just return the RGB
              converters[color.mode].rgb(color)
            ) : (
              // otherwise convert color.mode -> RGB -> target_mode
              converters.rgb[target_mode](converters[color.mode].rgb(color))
            )
          )
        )
      ) : void 0;
      converter_default = converter;
    }
  });

  // node_modules/culori/src/modes.js
  var converters, modes, parsers, colorProfiles, identity, useMode, getMode, useParser;
  var init_modes = __esm({
    "node_modules/culori/src/modes.js"() {
      init_converter();
      converters = {};
      modes = {};
      parsers = [];
      colorProfiles = {};
      identity = (v) => v;
      useMode = (definition29) => {
        converters[definition29.mode] = __spreadValues(__spreadValues({}, converters[definition29.mode]), definition29.toMode);
        Object.keys(definition29.fromMode || {}).forEach((k4) => {
          if (!converters[k4]) {
            converters[k4] = {};
          }
          converters[k4][definition29.mode] = definition29.fromMode[k4];
        });
        if (!definition29.ranges) {
          definition29.ranges = {};
        }
        if (!definition29.difference) {
          definition29.difference = {};
        }
        definition29.channels.forEach((channel) => {
          if (definition29.ranges[channel] === void 0) {
            definition29.ranges[channel] = [0, 1];
          }
          if (!definition29.interpolate[channel]) {
            throw new Error(`Missing interpolator for: ${channel}`);
          }
          if (typeof definition29.interpolate[channel] === "function") {
            definition29.interpolate[channel] = {
              use: definition29.interpolate[channel]
            };
          }
          if (!definition29.interpolate[channel].fixup) {
            definition29.interpolate[channel].fixup = identity;
          }
        });
        modes[definition29.mode] = definition29;
        (definition29.parse || []).forEach((parser) => {
          useParser(parser, definition29.mode);
        });
        return converter_default(definition29.mode);
      };
      getMode = (mode) => modes[mode];
      useParser = (parser, mode) => {
        if (typeof parser === "string") {
          if (!mode) {
            throw new Error(`'mode' required when 'parser' is a string`);
          }
          colorProfiles[parser] = mode;
        } else if (typeof parser === "function") {
          if (parsers.indexOf(parser) < 0) {
            parsers.push(parser);
          }
        }
      };
    }
  });

  // node_modules/culori/src/parse.js
  function is_num(chars) {
    let ch = chars[_i];
    let ch1 = chars[_i + 1];
    if (ch === "-" || ch === "+") {
      return /\d/.test(ch1) || ch1 === "." && /\d/.test(chars[_i + 2]);
    }
    if (ch === ".") {
      return /\d/.test(ch1);
    }
    return /\d/.test(ch);
  }
  function is_ident(chars) {
    if (_i >= chars.length) {
      return false;
    }
    let ch = chars[_i];
    if (IdentStartCodePoint.test(ch)) {
      return true;
    }
    if (ch === "-") {
      if (chars.length - _i < 2) {
        return false;
      }
      let ch1 = chars[_i + 1];
      if (ch1 === "-" || IdentStartCodePoint.test(ch1)) {
        return true;
      }
      return false;
    }
    return false;
  }
  function num2(chars) {
    let value = "";
    if (chars[_i] === "-" || chars[_i] === "+") {
      value += chars[_i++];
    }
    value += digits(chars);
    if (chars[_i] === "." && /\d/.test(chars[_i + 1])) {
      value += chars[_i++] + digits(chars);
    }
    if (chars[_i] === "e" || chars[_i] === "E") {
      if ((chars[_i + 1] === "-" || chars[_i + 1] === "+") && /\d/.test(chars[_i + 2])) {
        value += chars[_i++] + chars[_i++] + digits(chars);
      } else if (/\d/.test(chars[_i + 1])) {
        value += chars[_i++] + digits(chars);
      }
    }
    if (is_ident(chars)) {
      let id = ident(chars);
      if (id === "deg" || id === "rad" || id === "turn" || id === "grad") {
        return { type: Tok.Hue, value: value * huenits[id] };
      }
      return void 0;
    }
    if (chars[_i] === "%") {
      _i++;
      return { type: Tok.Percentage, value: +value };
    }
    return { type: Tok.Number, value: +value };
  }
  function digits(chars) {
    let v = "";
    while (/\d/.test(chars[_i])) {
      v += chars[_i++];
    }
    return v;
  }
  function ident(chars) {
    let v = "";
    while (_i < chars.length && IdentCodePoint.test(chars[_i])) {
      v += chars[_i++];
    }
    return v;
  }
  function identlike(chars) {
    let v = ident(chars);
    if (chars[_i] === "(") {
      _i++;
      return { type: Tok.Function, value: v };
    }
    if (v === "none") {
      return { type: Tok.None, value: void 0 };
    }
    return { type: Tok.Ident, value: v };
  }
  function tokenize(str = "") {
    let chars = str.trim();
    let tokens = [];
    let ch;
    _i = 0;
    while (_i < chars.length) {
      ch = chars[_i++];
      if (ch === "\n" || ch === "	" || ch === " ") {
        while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "	" || chars[_i] === " ")) {
          _i++;
        }
        continue;
      }
      if (ch === ",") {
        return void 0;
      }
      if (ch === ")") {
        tokens.push({ type: Tok.ParenClose });
        continue;
      }
      if (ch === "+") {
        _i--;
        if (is_num(chars)) {
          tokens.push(num2(chars));
          continue;
        }
        return void 0;
      }
      if (ch === "-") {
        _i--;
        if (is_num(chars)) {
          tokens.push(num2(chars));
          continue;
        }
        if (is_ident(chars)) {
          tokens.push({ type: Tok.Ident, value: ident(chars) });
          continue;
        }
        return void 0;
      }
      if (ch === ".") {
        _i--;
        if (is_num(chars)) {
          tokens.push(num2(chars));
          continue;
        }
        return void 0;
      }
      if (ch === "/") {
        while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "	" || chars[_i] === " ")) {
          _i++;
        }
        let alpha;
        if (is_num(chars)) {
          alpha = num2(chars);
          if (alpha.type !== Tok.Hue) {
            tokens.push({ type: Tok.Alpha, value: alpha });
            continue;
          }
        }
        if (is_ident(chars)) {
          if (ident(chars) === "none") {
            tokens.push({
              type: Tok.Alpha,
              value: { type: Tok.None, value: void 0 }
            });
            continue;
          }
        }
        return void 0;
      }
      if (/\d/.test(ch)) {
        _i--;
        tokens.push(num2(chars));
        continue;
      }
      if (IdentStartCodePoint.test(ch)) {
        _i--;
        tokens.push(identlike(chars));
        continue;
      }
      return void 0;
    }
    return tokens;
  }
  function parseColorSyntax(tokens) {
    tokens._i = 0;
    let token = tokens[tokens._i++];
    if (!token || token.type !== Tok.Function || token.value !== "color") {
      return void 0;
    }
    token = tokens[tokens._i++];
    if (token.type !== Tok.Ident) {
      return void 0;
    }
    const mode = colorProfiles[token.value];
    if (!mode) {
      return void 0;
    }
    const res = { mode };
    const coords = consumeCoords(tokens, false);
    if (!coords) {
      return void 0;
    }
    const channels = getMode(mode).channels;
    for (let ii = 0, c2, ch; ii < channels.length; ii++) {
      c2 = coords[ii];
      ch = channels[ii];
      if (c2.type !== Tok.None) {
        res[ch] = c2.type === Tok.Number ? c2.value : c2.value / 100;
        if (ch === "alpha") {
          res[ch] = Math.max(0, Math.min(1, res[ch]));
        }
      }
    }
    return res;
  }
  function consumeCoords(tokens, includeHue) {
    const coords = [];
    let token;
    while (tokens._i < tokens.length) {
      token = tokens[tokens._i++];
      if (token.type === Tok.None || token.type === Tok.Number || token.type === Tok.Alpha || token.type === Tok.Percentage || includeHue && token.type === Tok.Hue) {
        coords.push(token);
        continue;
      }
      if (token.type === Tok.ParenClose) {
        if (tokens._i < tokens.length) {
          return void 0;
        }
        continue;
      }
      return void 0;
    }
    if (coords.length < 3 || coords.length > 4) {
      return void 0;
    }
    if (coords.length === 4) {
      if (coords[3].type !== Tok.Alpha) {
        return void 0;
      }
      coords[3] = coords[3].value;
    }
    if (coords.length === 3) {
      coords.push({ type: Tok.None, value: void 0 });
    }
    return coords.every((c2) => c2.type !== Tok.Alpha) ? coords : void 0;
  }
  function parseModernSyntax(tokens, includeHue) {
    tokens._i = 0;
    let token = tokens[tokens._i++];
    if (!token || token.type !== Tok.Function) {
      return void 0;
    }
    let coords = consumeCoords(tokens, includeHue);
    if (!coords) {
      return void 0;
    }
    coords.unshift(token.value);
    return coords;
  }
  var IdentStartCodePoint, IdentCodePoint, Tok, _i, huenits, parse, parse_default;
  var init_parse = __esm({
    "node_modules/culori/src/parse.js"() {
      init_modes();
      IdentStartCodePoint = /[^\x00-\x7F]|[a-zA-Z_]/;
      IdentCodePoint = /[^\x00-\x7F]|[-\w]/;
      Tok = {
        Function: "function",
        Ident: "ident",
        Number: "number",
        Percentage: "percentage",
        ParenClose: ")",
        None: "none",
        Hue: "hue",
        Alpha: "alpha"
      };
      _i = 0;
      huenits = {
        deg: 1,
        rad: 180 / Math.PI,
        grad: 9 / 10,
        turn: 360
      };
      parse = (color) => {
        if (typeof color !== "string") {
          return void 0;
        }
        const tokens = tokenize(color);
        const parsed = tokens ? parseModernSyntax(tokens, true) : void 0;
        let result = void 0;
        let i = 0;
        let len = parsers.length;
        while (i < len) {
          if ((result = parsers[i++](color, parsed)) !== void 0) {
            return result;
          }
        }
        return tokens ? parseColorSyntax(tokens) : void 0;
      };
      parse_default = parse;
    }
  });

  // node_modules/culori/src/rgb/parseRgb.js
  function parseRgb(color, parsed) {
    if (!parsed || parsed[0] !== "rgb" && parsed[0] !== "rgba") {
      return void 0;
    }
    const res = { mode: "rgb" };
    const [, r, g, b, alpha] = parsed;
    if (r.type === Tok.Hue || g.type === Tok.Hue || b.type === Tok.Hue) {
      return void 0;
    }
    if (r.type !== Tok.None) {
      res.r = r.type === Tok.Number ? r.value / 255 : r.value / 100;
    }
    if (g.type !== Tok.None) {
      res.g = g.type === Tok.Number ? g.value / 255 : g.value / 100;
    }
    if (b.type !== Tok.None) {
      res.b = b.type === Tok.Number ? b.value / 255 : b.value / 100;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseRgb_default;
  var init_parseRgb = __esm({
    "node_modules/culori/src/rgb/parseRgb.js"() {
      init_parse();
      parseRgb_default = parseRgb;
    }
  });

  // node_modules/culori/src/rgb/parseTransparent.js
  var parseTransparent, parseTransparent_default;
  var init_parseTransparent = __esm({
    "node_modules/culori/src/rgb/parseTransparent.js"() {
      parseTransparent = (c2) => c2 === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0;
      parseTransparent_default = parseTransparent;
    }
  });

  // node_modules/culori/src/interpolate/lerp.js
  var lerp;
  var init_lerp = __esm({
    "node_modules/culori/src/interpolate/lerp.js"() {
      lerp = (a, b, t) => a + t * (b - a);
    }
  });

  // node_modules/culori/src/interpolate/piecewise.js
  var get_classes, interpolatorPiecewise;
  var init_piecewise = __esm({
    "node_modules/culori/src/interpolate/piecewise.js"() {
      get_classes = (arr) => {
        let classes = [];
        for (let i = 0; i < arr.length - 1; i++) {
          let a = arr[i];
          let b = arr[i + 1];
          if (a === void 0 && b === void 0) {
            classes.push(void 0);
          } else if (a !== void 0 && b !== void 0) {
            classes.push([a, b]);
          } else {
            classes.push(a !== void 0 ? [a, a] : [b, b]);
          }
        }
        return classes;
      };
      interpolatorPiecewise = (interpolator) => (arr) => {
        let classes = get_classes(arr);
        return (t) => {
          let cls = t * classes.length;
          let idx = t >= 1 ? classes.length - 1 : Math.max(Math.floor(cls), 0);
          let pair = classes[idx];
          return pair === void 0 ? void 0 : interpolator(pair[0], pair[1], cls - idx);
        };
      };
    }
  });

  // node_modules/culori/src/interpolate/linear.js
  var interpolatorLinear;
  var init_linear = __esm({
    "node_modules/culori/src/interpolate/linear.js"() {
      init_lerp();
      init_piecewise();
      interpolatorLinear = interpolatorPiecewise(lerp);
    }
  });

  // node_modules/culori/src/fixup/alpha.js
  var fixupAlpha;
  var init_alpha = __esm({
    "node_modules/culori/src/fixup/alpha.js"() {
      fixupAlpha = (arr) => {
        let some_defined = false;
        let res = arr.map((v) => {
          if (v !== void 0) {
            some_defined = true;
            return v;
          }
          return 1;
        });
        return some_defined ? res : arr;
      };
    }
  });

  // node_modules/culori/src/rgb/definition.js
  var definition, definition_default;
  var init_definition = __esm({
    "node_modules/culori/src/rgb/definition.js"() {
      init_parseNamed();
      init_parseHex();
      init_parseRgbLegacy();
      init_parseRgb();
      init_parseTransparent();
      init_linear();
      init_alpha();
      definition = {
        mode: "rgb",
        channels: ["r", "g", "b", "alpha"],
        parse: [
          parseRgb_default,
          parseHex_default,
          parseRgbLegacy_default,
          parseNamed_default,
          parseTransparent_default,
          "srgb"
        ],
        serialize: "srgb",
        interpolate: {
          r: interpolatorLinear,
          g: interpolatorLinear,
          b: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        gamut: true,
        white: { r: 1, g: 1, b: 1 },
        black: { r: 0, g: 0, b: 0 }
      };
      definition_default = definition;
    }
  });

  // node_modules/culori/src/a98/convertA98ToXyz65.js
  var linearize, convertA98ToXyz65, convertA98ToXyz65_default;
  var init_convertA98ToXyz65 = __esm({
    "node_modules/culori/src/a98/convertA98ToXyz65.js"() {
      linearize = (v = 0) => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
      convertA98ToXyz65 = (a982) => {
        let r = linearize(a982.r);
        let g = linearize(a982.g);
        let b = linearize(a982.b);
        let res = {
          mode: "xyz65",
          x: 0.5766690429101305 * r + 0.1855582379065463 * g + 0.1882286462349947 * b,
          y: 0.297344975250536 * r + 0.6273635662554661 * g + 0.0752914584939979 * b,
          z: 0.0270313613864123 * r + 0.0706888525358272 * g + 0.9913375368376386 * b
        };
        if (a982.alpha !== void 0) {
          res.alpha = a982.alpha;
        }
        return res;
      };
      convertA98ToXyz65_default = convertA98ToXyz65;
    }
  });

  // node_modules/culori/src/a98/convertXyz65ToA98.js
  var gamma, convertXyz65ToA98, convertXyz65ToA98_default;
  var init_convertXyz65ToA98 = __esm({
    "node_modules/culori/src/a98/convertXyz65ToA98.js"() {
      gamma = (v) => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
      convertXyz65ToA98 = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = {
          mode: "a98",
          r: gamma(
            x * 2.0415879038107465 - y * 0.5650069742788597 - 0.3447313507783297 * z
          ),
          g: gamma(
            x * -0.9692436362808798 + y * 1.8759675015077206 + 0.0415550574071756 * z
          ),
          b: gamma(
            x * 0.0134442806320312 - y * 0.1183623922310184 + 1.0151749943912058 * z
          )
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToA98_default = convertXyz65ToA98;
    }
  });

  // node_modules/culori/src/lrgb/convertRgbToLrgb.js
  var fn, convertRgbToLrgb, convertRgbToLrgb_default;
  var init_convertRgbToLrgb = __esm({
    "node_modules/culori/src/lrgb/convertRgbToLrgb.js"() {
      fn = (c2 = 0) => {
        const abs2 = Math.abs(c2);
        if (abs2 <= 0.04045) {
          return c2 / 12.92;
        }
        return (Math.sign(c2) || 1) * Math.pow((abs2 + 0.055) / 1.055, 2.4);
      };
      convertRgbToLrgb = ({ r, g, b, alpha }) => {
        let res = {
          mode: "lrgb",
          r: fn(r),
          g: fn(g),
          b: fn(b)
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertRgbToLrgb_default = convertRgbToLrgb;
    }
  });

  // node_modules/culori/src/xyz65/convertRgbToXyz65.js
  var convertRgbToXyz65, convertRgbToXyz65_default;
  var init_convertRgbToXyz65 = __esm({
    "node_modules/culori/src/xyz65/convertRgbToXyz65.js"() {
      init_convertRgbToLrgb();
      convertRgbToXyz65 = (rgb3) => {
        let { r, g, b, alpha } = convertRgbToLrgb_default(rgb3);
        let res = {
          mode: "xyz65",
          x: 0.4123907992659593 * r + 0.357584339383878 * g + 0.1804807884018343 * b,
          y: 0.2126390058715102 * r + 0.715168678767756 * g + 0.0721923153607337 * b,
          z: 0.0193308187155918 * r + 0.119194779794626 * g + 0.9505321522496607 * b
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertRgbToXyz65_default = convertRgbToXyz65;
    }
  });

  // node_modules/culori/src/lrgb/convertLrgbToRgb.js
  var fn2, convertLrgbToRgb, convertLrgbToRgb_default;
  var init_convertLrgbToRgb = __esm({
    "node_modules/culori/src/lrgb/convertLrgbToRgb.js"() {
      fn2 = (c2 = 0) => {
        const abs2 = Math.abs(c2);
        if (abs2 > 31308e-7) {
          return (Math.sign(c2) || 1) * (1.055 * Math.pow(abs2, 1 / 2.4) - 0.055);
        }
        return c2 * 12.92;
      };
      convertLrgbToRgb = ({ r, g, b, alpha }, mode = "rgb") => {
        let res = {
          mode,
          r: fn2(r),
          g: fn2(g),
          b: fn2(b)
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertLrgbToRgb_default = convertLrgbToRgb;
    }
  });

  // node_modules/culori/src/xyz65/convertXyz65ToRgb.js
  var convertXyz65ToRgb, convertXyz65ToRgb_default;
  var init_convertXyz65ToRgb = __esm({
    "node_modules/culori/src/xyz65/convertXyz65ToRgb.js"() {
      init_convertLrgbToRgb();
      convertXyz65ToRgb = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = convertLrgbToRgb_default({
          r: x * 3.2409699419045226 - y * 1.537383177570094 - 0.4986107602930034 * z,
          g: x * -0.9692436362808796 + y * 1.8759675015077204 + 0.0415550574071756 * z,
          b: x * 0.0556300796969936 - y * 0.2039769588889765 + 1.0569715142428784 * z
        });
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToRgb_default = convertXyz65ToRgb;
    }
  });

  // node_modules/culori/src/a98/definition.js
  var definition2, definition_default2;
  var init_definition2 = __esm({
    "node_modules/culori/src/a98/definition.js"() {
      init_definition();
      init_convertA98ToXyz65();
      init_convertXyz65ToA98();
      init_convertRgbToXyz65();
      init_convertXyz65ToRgb();
      definition2 = __spreadProps(__spreadValues({}, definition_default), {
        mode: "a98",
        parse: ["a98-rgb"],
        serialize: "a98-rgb",
        fromMode: {
          rgb: (color) => convertXyz65ToA98_default(convertRgbToXyz65_default(color)),
          xyz65: convertXyz65ToA98_default
        },
        toMode: {
          rgb: (color) => convertXyz65ToRgb_default(convertA98ToXyz65_default(color)),
          xyz65: convertA98ToXyz65_default
        }
      });
      definition_default2 = definition2;
    }
  });

  // node_modules/culori/src/util/normalizeHue.js
  var normalizeHue, normalizeHue_default;
  var init_normalizeHue = __esm({
    "node_modules/culori/src/util/normalizeHue.js"() {
      normalizeHue = (hue3) => (hue3 = hue3 % 360) < 0 ? hue3 + 360 : hue3;
      normalizeHue_default = normalizeHue;
    }
  });

  // node_modules/culori/src/fixup/hue.js
  var hue2, fixupHueShorter;
  var init_hue = __esm({
    "node_modules/culori/src/fixup/hue.js"() {
      init_normalizeHue();
      hue2 = (hues, fn5) => {
        return hues.map((hue3, idx, arr) => {
          if (hue3 === void 0) {
            return hue3;
          }
          let normalized = normalizeHue_default(hue3);
          if (idx === 0 || hues[idx - 1] === void 0) {
            return normalized;
          }
          return fn5(normalized - normalizeHue_default(arr[idx - 1]));
        }).reduce((acc, curr) => {
          if (!acc.length || curr === void 0 || acc[acc.length - 1] === void 0) {
            acc.push(curr);
            return acc;
          }
          acc.push(curr + acc[acc.length - 1]);
          return acc;
        }, []);
      };
      fixupHueShorter = (arr) => hue2(arr, (d) => Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d));
    }
  });

  // node_modules/culori/src/cubehelix/constants.js
  var M, degToRad, radToDeg;
  var init_constants = __esm({
    "node_modules/culori/src/cubehelix/constants.js"() {
      M = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0];
      degToRad = Math.PI / 180;
      radToDeg = 180 / Math.PI;
    }
  });

  // node_modules/culori/src/cubehelix/convertRgbToCubehelix.js
  var DE, BE, BCAD, convertRgbToCubehelix, convertRgbToCubehelix_default;
  var init_convertRgbToCubehelix = __esm({
    "node_modules/culori/src/cubehelix/convertRgbToCubehelix.js"() {
      init_constants();
      DE = M[3] * M[4];
      BE = M[1] * M[4];
      BCAD = M[1] * M[2] - M[0] * M[3];
      convertRgbToCubehelix = ({ r, g, b, alpha }) => {
        if (r === void 0) r = 0;
        if (g === void 0) g = 0;
        if (b === void 0) b = 0;
        let l = (BCAD * b + r * DE - g * BE) / (BCAD + DE - BE);
        let x = b - l;
        let y = (M[4] * (g - l) - M[2] * x) / M[3];
        let res = {
          mode: "cubehelix",
          l,
          s: l === 0 || l === 1 ? void 0 : Math.sqrt(x * x + y * y) / (M[4] * l * (1 - l))
        };
        if (res.s) res.h = Math.atan2(y, x) * radToDeg - 120;
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertRgbToCubehelix_default = convertRgbToCubehelix;
    }
  });

  // node_modules/culori/src/cubehelix/convertCubehelixToRgb.js
  var convertCubehelixToRgb, convertCubehelixToRgb_default;
  var init_convertCubehelixToRgb = __esm({
    "node_modules/culori/src/cubehelix/convertCubehelixToRgb.js"() {
      init_constants();
      convertCubehelixToRgb = ({ h, s, l, alpha }) => {
        let res = { mode: "rgb" };
        h = (h === void 0 ? 0 : h + 120) * degToRad;
        if (l === void 0) l = 0;
        let amp = s === void 0 ? 0 : s * l * (1 - l);
        let cosh = Math.cos(h);
        let sinh = Math.sin(h);
        res.r = l + amp * (M[0] * cosh + M[1] * sinh);
        res.g = l + amp * (M[2] * cosh + M[3] * sinh);
        res.b = l + amp * (M[4] * cosh + M[5] * sinh);
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertCubehelixToRgb_default = convertCubehelixToRgb;
    }
  });

  // node_modules/culori/src/difference.js
  var differenceHueSaturation, differenceHueNaive, differenceHueChroma;
  var init_difference = __esm({
    "node_modules/culori/src/difference.js"() {
      init_normalizeHue();
      differenceHueSaturation = (std, smp) => {
        if (std.h === void 0 || smp.h === void 0 || !std.s || !smp.s) {
          return 0;
        }
        let std_h = normalizeHue_default(std.h);
        let smp_h = normalizeHue_default(smp.h);
        let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
        return 2 * Math.sqrt(std.s * smp.s) * dH;
      };
      differenceHueNaive = (std, smp) => {
        if (std.h === void 0 || smp.h === void 0) {
          return 0;
        }
        let std_h = normalizeHue_default(std.h);
        let smp_h = normalizeHue_default(smp.h);
        if (Math.abs(smp_h - std_h) > 180) {
          return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
        }
        return smp_h - std_h;
      };
      differenceHueChroma = (std, smp) => {
        if (std.h === void 0 || smp.h === void 0 || !std.c || !smp.c) {
          return 0;
        }
        let std_h = normalizeHue_default(std.h);
        let smp_h = normalizeHue_default(smp.h);
        let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
        return 2 * Math.sqrt(std.c * smp.c) * dH;
      };
    }
  });

  // node_modules/culori/src/average.js
  var averageAngle;
  var init_average = __esm({
    "node_modules/culori/src/average.js"() {
      averageAngle = (val) => {
        let sum = val.reduce(
          (sum2, val2) => {
            if (val2 !== void 0) {
              let rad = val2 * Math.PI / 180;
              sum2.sin += Math.sin(rad);
              sum2.cos += Math.cos(rad);
            }
            return sum2;
          },
          { sin: 0, cos: 0 }
        );
        let angle = Math.atan2(sum.sin, sum.cos) * 180 / Math.PI;
        return angle < 0 ? 360 + angle : angle;
      };
    }
  });

  // node_modules/culori/src/cubehelix/definition.js
  var definition3, definition_default3;
  var init_definition3 = __esm({
    "node_modules/culori/src/cubehelix/definition.js"() {
      init_hue();
      init_alpha();
      init_linear();
      init_convertRgbToCubehelix();
      init_convertCubehelixToRgb();
      init_difference();
      init_average();
      definition3 = {
        mode: "cubehelix",
        channels: ["h", "s", "l", "alpha"],
        parse: ["--cubehelix"],
        serialize: "--cubehelix",
        ranges: {
          h: [0, 360],
          s: [0, 4.614],
          l: [0, 1]
        },
        fromMode: {
          rgb: convertRgbToCubehelix_default
        },
        toMode: {
          rgb: convertCubehelixToRgb_default
        },
        interpolate: {
          h: {
            use: interpolatorLinear,
            fixup: fixupHueShorter
          },
          s: interpolatorLinear,
          l: interpolatorLinear,
          alpha: {
            use: interpolatorLinear,
            fixup: fixupAlpha
          }
        },
        difference: {
          h: differenceHueSaturation
        },
        average: {
          h: averageAngle
        }
      };
      definition_default3 = definition3;
    }
  });

  // node_modules/culori/src/lch/convertLabToLch.js
  var convertLabToLch, convertLabToLch_default;
  var init_convertLabToLch = __esm({
    "node_modules/culori/src/lch/convertLabToLch.js"() {
      init_normalizeHue();
      convertLabToLch = ({ l, a, b, alpha }, mode = "lch") => {
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let c2 = Math.sqrt(a * a + b * b);
        let res = { mode, l, c: c2 };
        if (c2) res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertLabToLch_default = convertLabToLch;
    }
  });

  // node_modules/culori/src/lch/convertLchToLab.js
  var convertLchToLab, convertLchToLab_default;
  var init_convertLchToLab = __esm({
    "node_modules/culori/src/lch/convertLchToLab.js"() {
      convertLchToLab = ({ l, c: c2, h, alpha }, mode = "lab") => {
        if (h === void 0) h = 0;
        let res = {
          mode,
          l,
          a: c2 ? c2 * Math.cos(h / 180 * Math.PI) : 0,
          b: c2 ? c2 * Math.sin(h / 180 * Math.PI) : 0
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertLchToLab_default = convertLchToLab;
    }
  });

  // node_modules/culori/src/xyz65/constants.js
  var k, e;
  var init_constants2 = __esm({
    "node_modules/culori/src/xyz65/constants.js"() {
      k = Math.pow(29, 3) / Math.pow(3, 3);
      e = Math.pow(6, 3) / Math.pow(29, 3);
    }
  });

  // node_modules/culori/src/constants.js
  var D50, D65, k2, e2;
  var init_constants3 = __esm({
    "node_modules/culori/src/constants.js"() {
      D50 = {
        X: 0.3457 / 0.3585,
        Y: 1,
        Z: (1 - 0.3457 - 0.3585) / 0.3585
      };
      D65 = {
        X: 0.3127 / 0.329,
        Y: 1,
        Z: (1 - 0.3127 - 0.329) / 0.329
      };
      k2 = Math.pow(29, 3) / Math.pow(3, 3);
      e2 = Math.pow(6, 3) / Math.pow(29, 3);
    }
  });

  // node_modules/culori/src/lab65/convertLab65ToXyz65.js
  var fn3, convertLab65ToXyz65, convertLab65ToXyz65_default;
  var init_convertLab65ToXyz65 = __esm({
    "node_modules/culori/src/lab65/convertLab65ToXyz65.js"() {
      init_constants2();
      init_constants3();
      fn3 = (v) => Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;
      convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
        if (l === void 0) l = 0;
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let fy = (l + 16) / 116;
        let fx = a / 500 + fy;
        let fz = fy - b / 200;
        let res = {
          mode: "xyz65",
          x: fn3(fx) * D65.X,
          y: fn3(fy) * D65.Y,
          z: fn3(fz) * D65.Z
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLab65ToXyz65_default = convertLab65ToXyz65;
    }
  });

  // node_modules/culori/src/lab65/convertLab65ToRgb.js
  var convertLab65ToRgb, convertLab65ToRgb_default;
  var init_convertLab65ToRgb = __esm({
    "node_modules/culori/src/lab65/convertLab65ToRgb.js"() {
      init_convertLab65ToXyz65();
      init_convertXyz65ToRgb();
      convertLab65ToRgb = (lab2) => convertXyz65ToRgb_default(convertLab65ToXyz65_default(lab2));
      convertLab65ToRgb_default = convertLab65ToRgb;
    }
  });

  // node_modules/culori/src/lab65/convertXyz65ToLab65.js
  var f, convertXyz65ToLab65, convertXyz65ToLab65_default;
  var init_convertXyz65ToLab65 = __esm({
    "node_modules/culori/src/lab65/convertXyz65ToLab65.js"() {
      init_constants2();
      init_constants3();
      f = (value) => value > e ? Math.cbrt(value) : (k * value + 16) / 116;
      convertXyz65ToLab65 = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let f0 = f(x / D65.X);
        let f1 = f(y / D65.Y);
        let f22 = f(z / D65.Z);
        let res = {
          mode: "lab65",
          l: 116 * f1 - 16,
          a: 500 * (f0 - f1),
          b: 200 * (f1 - f22)
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToLab65_default = convertXyz65ToLab65;
    }
  });

  // node_modules/culori/src/lab65/convertRgbToLab65.js
  var convertRgbToLab65, convertRgbToLab65_default;
  var init_convertRgbToLab65 = __esm({
    "node_modules/culori/src/lab65/convertRgbToLab65.js"() {
      init_convertRgbToXyz65();
      init_convertXyz65ToLab65();
      convertRgbToLab65 = (rgb3) => {
        let res = convertXyz65ToLab65_default(convertRgbToXyz65_default(rgb3));
        if (rgb3.r === rgb3.b && rgb3.b === rgb3.g) {
          res.a = res.b = 0;
        }
        return res;
      };
      convertRgbToLab65_default = convertRgbToLab65;
    }
  });

  // node_modules/culori/src/dlch/constants.js
  var kE, kCH, \u03B8, cos\u03B8, sin\u03B8, factor;
  var init_constants4 = __esm({
    "node_modules/culori/src/dlch/constants.js"() {
      kE = 1;
      kCH = 1;
      \u03B8 = 26 / 180 * Math.PI;
      cos\u03B8 = Math.cos(\u03B8);
      sin\u03B8 = Math.sin(\u03B8);
      factor = 100 / Math.log(139 / 100);
    }
  });

  // node_modules/culori/src/dlch/convertDlchToLab65.js
  var convertDlchToLab65, convertDlchToLab65_default;
  var init_convertDlchToLab65 = __esm({
    "node_modules/culori/src/dlch/convertDlchToLab65.js"() {
      init_constants4();
      convertDlchToLab65 = ({ l, c: c2, h, alpha }) => {
        if (l === void 0) l = 0;
        if (c2 === void 0) c2 = 0;
        if (h === void 0) h = 0;
        let res = {
          mode: "lab65",
          l: (Math.exp(l * kE / factor) - 1) / 39e-4
        };
        let G = (Math.exp(0.0435 * c2 * kCH * kE) - 1) / 0.075;
        let e4 = G * Math.cos(h / 180 * Math.PI - \u03B8);
        let f3 = G * Math.sin(h / 180 * Math.PI - \u03B8);
        res.a = e4 * cos\u03B8 - f3 / 0.83 * sin\u03B8;
        res.b = e4 * sin\u03B8 + f3 / 0.83 * cos\u03B8;
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertDlchToLab65_default = convertDlchToLab65;
    }
  });

  // node_modules/culori/src/dlch/convertLab65ToDlch.js
  var convertLab65ToDlch, convertLab65ToDlch_default;
  var init_convertLab65ToDlch = __esm({
    "node_modules/culori/src/dlch/convertLab65ToDlch.js"() {
      init_constants4();
      init_normalizeHue();
      convertLab65ToDlch = ({ l, a, b, alpha }) => {
        if (l === void 0) l = 0;
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let e4 = a * cos\u03B8 + b * sin\u03B8;
        let f3 = 0.83 * (b * cos\u03B8 - a * sin\u03B8);
        let G = Math.sqrt(e4 * e4 + f3 * f3);
        let res = {
          mode: "dlch",
          l: factor / kE * Math.log(1 + 39e-4 * l),
          c: Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE)
        };
        if (res.c) {
          res.h = normalizeHue_default((Math.atan2(f3, e4) + \u03B8) / Math.PI * 180);
        }
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertLab65ToDlch_default = convertLab65ToDlch;
    }
  });

  // node_modules/culori/src/dlab/definition.js
  var convertDlabToLab65, convertLab65ToDlab, definition4, definition_default4;
  var init_definition4 = __esm({
    "node_modules/culori/src/dlab/definition.js"() {
      init_convertLabToLch();
      init_convertLchToLab();
      init_convertLab65ToRgb();
      init_convertRgbToLab65();
      init_convertDlchToLab65();
      init_convertLab65ToDlch();
      init_linear();
      init_alpha();
      convertDlabToLab65 = (c2) => convertDlchToLab65_default(convertLabToLch_default(c2, "dlch"));
      convertLab65ToDlab = (c2) => convertLchToLab_default(convertLab65ToDlch_default(c2), "dlab");
      definition4 = {
        mode: "dlab",
        parse: ["--din99o-lab"],
        serialize: "--din99o-lab",
        toMode: {
          lab65: convertDlabToLab65,
          rgb: (c2) => convertLab65ToRgb_default(convertDlabToLab65(c2))
        },
        fromMode: {
          lab65: convertLab65ToDlab,
          rgb: (c2) => convertLab65ToDlab(convertRgbToLab65_default(c2))
        },
        channels: ["l", "a", "b", "alpha"],
        ranges: {
          l: [0, 100],
          a: [-40.09, 45.501],
          b: [-40.469, 44.344]
        },
        interpolate: {
          l: interpolatorLinear,
          a: interpolatorLinear,
          b: interpolatorLinear,
          alpha: {
            use: interpolatorLinear,
            fixup: fixupAlpha
          }
        }
      };
      definition_default4 = definition4;
    }
  });

  // node_modules/culori/src/dlch/definition.js
  var definition5, definition_default5;
  var init_definition5 = __esm({
    "node_modules/culori/src/dlch/definition.js"() {
      init_convertLabToLch();
      init_convertLchToLab();
      init_convertDlchToLab65();
      init_convertLab65ToDlch();
      init_convertLab65ToRgb();
      init_convertRgbToLab65();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition5 = {
        mode: "dlch",
        parse: ["--din99o-lch"],
        serialize: "--din99o-lch",
        toMode: {
          lab65: convertDlchToLab65_default,
          dlab: (c2) => convertLchToLab_default(c2, "dlab"),
          rgb: (c2) => convertLab65ToRgb_default(convertDlchToLab65_default(c2))
        },
        fromMode: {
          lab65: convertLab65ToDlch_default,
          dlab: (c2) => convertLabToLch_default(c2, "dlch"),
          rgb: (c2) => convertLab65ToDlch_default(convertRgbToLab65_default(c2))
        },
        channels: ["l", "c", "h", "alpha"],
        ranges: {
          l: [0, 100],
          c: [0, 51.484],
          h: [0, 360]
        },
        interpolate: {
          l: interpolatorLinear,
          c: interpolatorLinear,
          h: {
            use: interpolatorLinear,
            fixup: fixupHueShorter
          },
          alpha: {
            use: interpolatorLinear,
            fixup: fixupAlpha
          }
        },
        difference: {
          h: differenceHueChroma
        },
        average: {
          h: averageAngle
        }
      };
      definition_default5 = definition5;
    }
  });

  // node_modules/culori/src/hsi/convertHsiToRgb.js
  function convertHsiToRgb({ h, s, i, alpha }) {
    h = normalizeHue_default(h !== void 0 ? h : 0);
    if (s === void 0) s = 0;
    if (i === void 0) i = 0;
    let f3 = Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = {
          r: i * (1 + s * (3 / (2 - f3) - 1)),
          g: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1)),
          b: i * (1 - s)
        };
        break;
      case 1:
        res = {
          r: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1)),
          g: i * (1 + s * (3 / (2 - f3) - 1)),
          b: i * (1 - s)
        };
        break;
      case 2:
        res = {
          r: i * (1 - s),
          g: i * (1 + s * (3 / (2 - f3) - 1)),
          b: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1))
        };
        break;
      case 3:
        res = {
          r: i * (1 - s),
          g: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1)),
          b: i * (1 + s * (3 / (2 - f3) - 1))
        };
        break;
      case 4:
        res = {
          r: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1)),
          g: i * (1 - s),
          b: i * (1 + s * (3 / (2 - f3) - 1))
        };
        break;
      case 5:
        res = {
          r: i * (1 + s * (3 / (2 - f3) - 1)),
          g: i * (1 - s),
          b: i * (1 + s * (3 * (1 - f3) / (2 - f3) - 1))
        };
        break;
      default:
        res = { r: i * (1 - s), g: i * (1 - s), b: i * (1 - s) };
    }
    res.mode = "rgb";
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertHsiToRgb = __esm({
    "node_modules/culori/src/hsi/convertHsiToRgb.js"() {
      init_normalizeHue();
    }
  });

  // node_modules/culori/src/hsi/convertRgbToHsi.js
  function convertRgbToHsi({ r, g, b, alpha }) {
    if (r === void 0) r = 0;
    if (g === void 0) g = 0;
    if (b === void 0) b = 0;
    let M3 = Math.max(r, g, b), m = Math.min(r, g, b);
    let res = {
      mode: "hsi",
      s: r + g + b === 0 ? 0 : 1 - 3 * m / (r + g + b),
      i: (r + g + b) / 3
    };
    if (M3 - m !== 0)
      res.h = (M3 === r ? (g - b) / (M3 - m) + (g < b) * 6 : M3 === g ? (b - r) / (M3 - m) + 2 : (r - g) / (M3 - m) + 4) * 60;
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertRgbToHsi = __esm({
    "node_modules/culori/src/hsi/convertRgbToHsi.js"() {
    }
  });

  // node_modules/culori/src/hsi/definition.js
  var definition6, definition_default6;
  var init_definition6 = __esm({
    "node_modules/culori/src/hsi/definition.js"() {
      init_convertHsiToRgb();
      init_convertRgbToHsi();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition6 = {
        mode: "hsi",
        toMode: {
          rgb: convertHsiToRgb
        },
        parse: ["--hsi"],
        serialize: "--hsi",
        fromMode: {
          rgb: convertRgbToHsi
        },
        channels: ["h", "s", "i", "alpha"],
        ranges: {
          h: [0, 360]
        },
        gamut: "rgb",
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          s: interpolatorLinear,
          i: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueSaturation
        },
        average: {
          h: averageAngle
        }
      };
      definition_default6 = definition6;
    }
  });

  // node_modules/culori/src/hsl/convertHslToRgb.js
  function convertHslToRgb({ h, s, l, alpha }) {
    h = normalizeHue_default(h !== void 0 ? h : 0);
    if (s === void 0) s = 0;
    if (l === void 0) l = 0;
    let m1 = l + s * (l < 0.5 ? l : 1 - l);
    let m2 = m1 - (m1 - l) * 2 * Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = { r: m1, g: m2, b: 2 * l - m1 };
        break;
      case 1:
        res = { r: m2, g: m1, b: 2 * l - m1 };
        break;
      case 2:
        res = { r: 2 * l - m1, g: m1, b: m2 };
        break;
      case 3:
        res = { r: 2 * l - m1, g: m2, b: m1 };
        break;
      case 4:
        res = { r: m2, g: 2 * l - m1, b: m1 };
        break;
      case 5:
        res = { r: m1, g: 2 * l - m1, b: m2 };
        break;
      default:
        res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
    }
    res.mode = "rgb";
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertHslToRgb = __esm({
    "node_modules/culori/src/hsl/convertHslToRgb.js"() {
      init_normalizeHue();
    }
  });

  // node_modules/culori/src/hsl/convertRgbToHsl.js
  function convertRgbToHsl({ r, g, b, alpha }) {
    if (r === void 0) r = 0;
    if (g === void 0) g = 0;
    if (b === void 0) b = 0;
    let M3 = Math.max(r, g, b), m = Math.min(r, g, b);
    let res = {
      mode: "hsl",
      s: M3 === m ? 0 : (M3 - m) / (1 - Math.abs(M3 + m - 1)),
      l: 0.5 * (M3 + m)
    };
    if (M3 - m !== 0)
      res.h = (M3 === r ? (g - b) / (M3 - m) + (g < b) * 6 : M3 === g ? (b - r) / (M3 - m) + 2 : (r - g) / (M3 - m) + 4) * 60;
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertRgbToHsl = __esm({
    "node_modules/culori/src/hsl/convertRgbToHsl.js"() {
    }
  });

  // node_modules/culori/src/util/hue.js
  var hueToDeg, hue_default;
  var init_hue2 = __esm({
    "node_modules/culori/src/util/hue.js"() {
      hueToDeg = (val, unit) => {
        switch (unit) {
          case "deg":
            return +val;
          case "rad":
            return val / Math.PI * 180;
          case "grad":
            return val / 10 * 9;
          case "turn":
            return val * 360;
        }
      };
      hue_default = hueToDeg;
    }
  });

  // node_modules/culori/src/hsl/parseHslLegacy.js
  var hsl_old, parseHslLegacy, parseHslLegacy_default;
  var init_parseHslLegacy = __esm({
    "node_modules/culori/src/hsl/parseHslLegacy.js"() {
      init_hue2();
      init_regex();
      hsl_old = new RegExp(
        `^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
      );
      parseHslLegacy = (color) => {
        let match = color.match(hsl_old);
        if (!match) return;
        let res = { mode: "hsl" };
        if (match[3] !== void 0) {
          res.h = +match[3];
        } else if (match[1] !== void 0 && match[2] !== void 0) {
          res.h = hue_default(match[1], match[2]);
        }
        if (match[4] !== void 0) {
          res.s = Math.min(Math.max(0, match[4] / 100), 1);
        }
        if (match[5] !== void 0) {
          res.l = Math.min(Math.max(0, match[5] / 100), 1);
        }
        if (match[6] !== void 0) {
          res.alpha = Math.max(0, Math.min(1, match[6] / 100));
        } else if (match[7] !== void 0) {
          res.alpha = Math.max(0, Math.min(1, +match[7]));
        }
        return res;
      };
      parseHslLegacy_default = parseHslLegacy;
    }
  });

  // node_modules/culori/src/hsl/parseHsl.js
  function parseHsl(color, parsed) {
    if (!parsed || parsed[0] !== "hsl" && parsed[0] !== "hsla") {
      return void 0;
    }
    const res = { mode: "hsl" };
    const [, h, s, l, alpha] = parsed;
    if (h.type !== Tok.None) {
      if (h.type === Tok.Percentage) {
        return void 0;
      }
      res.h = h.value;
    }
    if (s.type !== Tok.None) {
      if (s.type === Tok.Hue) {
        return void 0;
      }
      res.s = s.value / 100;
    }
    if (l.type !== Tok.None) {
      if (l.type === Tok.Hue) {
        return void 0;
      }
      res.l = l.value / 100;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseHsl_default;
  var init_parseHsl = __esm({
    "node_modules/culori/src/hsl/parseHsl.js"() {
      init_parse();
      parseHsl_default = parseHsl;
    }
  });

  // node_modules/culori/src/hsl/definition.js
  var definition7, definition_default7;
  var init_definition7 = __esm({
    "node_modules/culori/src/hsl/definition.js"() {
      init_convertHslToRgb();
      init_convertRgbToHsl();
      init_parseHslLegacy();
      init_parseHsl();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition7 = {
        mode: "hsl",
        toMode: {
          rgb: convertHslToRgb
        },
        fromMode: {
          rgb: convertRgbToHsl
        },
        channels: ["h", "s", "l", "alpha"],
        ranges: {
          h: [0, 360]
        },
        gamut: "rgb",
        parse: [parseHsl_default, parseHslLegacy_default],
        serialize: (c2) => `hsl(${c2.h !== void 0 ? c2.h : "none"} ${c2.s !== void 0 ? c2.s * 100 + "%" : "none"} ${c2.l !== void 0 ? c2.l * 100 + "%" : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          s: interpolatorLinear,
          l: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueSaturation
        },
        average: {
          h: averageAngle
        }
      };
      definition_default7 = definition7;
    }
  });

  // node_modules/culori/src/hsv/convertHsvToRgb.js
  function convertHsvToRgb({ h, s, v, alpha }) {
    h = normalizeHue_default(h !== void 0 ? h : 0);
    if (s === void 0) s = 0;
    if (v === void 0) v = 0;
    let f3 = Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = { r: v, g: v * (1 - s * f3), b: v * (1 - s) };
        break;
      case 1:
        res = { r: v * (1 - s * f3), g: v, b: v * (1 - s) };
        break;
      case 2:
        res = { r: v * (1 - s), g: v, b: v * (1 - s * f3) };
        break;
      case 3:
        res = { r: v * (1 - s), g: v * (1 - s * f3), b: v };
        break;
      case 4:
        res = { r: v * (1 - s * f3), g: v * (1 - s), b: v };
        break;
      case 5:
        res = { r: v, g: v * (1 - s), b: v * (1 - s * f3) };
        break;
      default:
        res = { r: v * (1 - s), g: v * (1 - s), b: v * (1 - s) };
    }
    res.mode = "rgb";
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertHsvToRgb = __esm({
    "node_modules/culori/src/hsv/convertHsvToRgb.js"() {
      init_normalizeHue();
    }
  });

  // node_modules/culori/src/hsv/convertRgbToHsv.js
  function convertRgbToHsv({ r, g, b, alpha }) {
    if (r === void 0) r = 0;
    if (g === void 0) g = 0;
    if (b === void 0) b = 0;
    let M3 = Math.max(r, g, b), m = Math.min(r, g, b);
    let res = {
      mode: "hsv",
      s: M3 === 0 ? 0 : 1 - m / M3,
      v: M3
    };
    if (M3 - m !== 0)
      res.h = (M3 === r ? (g - b) / (M3 - m) + (g < b) * 6 : M3 === g ? (b - r) / (M3 - m) + 2 : (r - g) / (M3 - m) + 4) * 60;
    if (alpha !== void 0) res.alpha = alpha;
    return res;
  }
  var init_convertRgbToHsv = __esm({
    "node_modules/culori/src/hsv/convertRgbToHsv.js"() {
    }
  });

  // node_modules/culori/src/hsv/definition.js
  var definition8, definition_default8;
  var init_definition8 = __esm({
    "node_modules/culori/src/hsv/definition.js"() {
      init_convertHsvToRgb();
      init_convertRgbToHsv();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition8 = {
        mode: "hsv",
        toMode: {
          rgb: convertHsvToRgb
        },
        parse: ["--hsv"],
        serialize: "--hsv",
        fromMode: {
          rgb: convertRgbToHsv
        },
        channels: ["h", "s", "v", "alpha"],
        ranges: {
          h: [0, 360]
        },
        gamut: "rgb",
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          s: interpolatorLinear,
          v: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueSaturation
        },
        average: {
          h: averageAngle
        }
      };
      definition_default8 = definition8;
    }
  });

  // node_modules/culori/src/hwb/convertHwbToRgb.js
  function convertHwbToRgb({ h, w, b, alpha }) {
    if (w === void 0) w = 0;
    if (b === void 0) b = 0;
    if (w + b > 1) {
      let s = w + b;
      w /= s;
      b /= s;
    }
    return convertHsvToRgb({
      h,
      s: b === 1 ? 1 : 1 - w / (1 - b),
      v: 1 - b,
      alpha
    });
  }
  var init_convertHwbToRgb = __esm({
    "node_modules/culori/src/hwb/convertHwbToRgb.js"() {
      init_convertHsvToRgb();
    }
  });

  // node_modules/culori/src/hwb/convertRgbToHwb.js
  function convertRgbToHwb(rgba) {
    let hsv2 = convertRgbToHsv(rgba);
    if (hsv2 === void 0) return void 0;
    let s = hsv2.s !== void 0 ? hsv2.s : 0;
    let v = hsv2.v !== void 0 ? hsv2.v : 0;
    let res = {
      mode: "hwb",
      w: (1 - s) * v,
      b: 1 - v
    };
    if (hsv2.h !== void 0) res.h = hsv2.h;
    if (hsv2.alpha !== void 0) res.alpha = hsv2.alpha;
    return res;
  }
  var init_convertRgbToHwb = __esm({
    "node_modules/culori/src/hwb/convertRgbToHwb.js"() {
      init_convertRgbToHsv();
    }
  });

  // node_modules/culori/src/hwb/parseHwb.js
  function ParseHwb(color, parsed) {
    if (!parsed || parsed[0] !== "hwb") {
      return void 0;
    }
    const res = { mode: "hwb" };
    const [, h, w, b, alpha] = parsed;
    if (h.type !== Tok.None) {
      if (h.type === Tok.Percentage) {
        return void 0;
      }
      res.h = h.value;
    }
    if (w.type !== Tok.None) {
      if (w.type === Tok.Hue) {
        return void 0;
      }
      res.w = w.value / 100;
    }
    if (b.type !== Tok.None) {
      if (b.type === Tok.Hue) {
        return void 0;
      }
      res.b = b.value / 100;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseHwb_default;
  var init_parseHwb = __esm({
    "node_modules/culori/src/hwb/parseHwb.js"() {
      init_parse();
      parseHwb_default = ParseHwb;
    }
  });

  // node_modules/culori/src/hwb/definition.js
  var definition9, definition_default9;
  var init_definition9 = __esm({
    "node_modules/culori/src/hwb/definition.js"() {
      init_convertHwbToRgb();
      init_convertRgbToHwb();
      init_parseHwb();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition9 = {
        mode: "hwb",
        toMode: {
          rgb: convertHwbToRgb
        },
        fromMode: {
          rgb: convertRgbToHwb
        },
        channels: ["h", "w", "b", "alpha"],
        ranges: {
          h: [0, 360]
        },
        gamut: "rgb",
        parse: [parseHwb_default],
        serialize: (c2) => `hwb(${c2.h !== void 0 ? c2.h : "none"} ${c2.w !== void 0 ? c2.w * 100 + "%" : "none"} ${c2.b !== void 0 ? c2.b * 100 + "%" : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          w: interpolatorLinear,
          b: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueNaive
        },
        average: {
          h: averageAngle
        }
      };
      definition_default9 = definition9;
    }
  });

  // node_modules/culori/src/hdr/constants.js
  var YW;
  var init_constants5 = __esm({
    "node_modules/culori/src/hdr/constants.js"() {
      YW = 203;
    }
  });

  // node_modules/culori/src/hdr/transfer.js
  function transferPqDecode(v) {
    if (v < 0) return 0;
    const c2 = Math.pow(v, 1 / M2);
    return 1e4 * Math.pow(Math.max(0, c2 - C1) / (C2 - C3 * c2), 1 / M1);
  }
  function transferPqEncode(v) {
    if (v < 0) return 0;
    const c2 = Math.pow(v / 1e4, M1);
    return Math.pow((C1 + C2 * c2) / (1 + C3 * c2), M2);
  }
  var M1, M2, C1, C2, C3;
  var init_transfer = __esm({
    "node_modules/culori/src/hdr/transfer.js"() {
      M1 = 0.1593017578125;
      M2 = 78.84375;
      C1 = 0.8359375;
      C2 = 18.8515625;
      C3 = 18.6875;
    }
  });

  // node_modules/culori/src/itp/convertItpToXyz65.js
  var toRel, convertItpToXyz65, convertItpToXyz65_default;
  var init_convertItpToXyz65 = __esm({
    "node_modules/culori/src/itp/convertItpToXyz65.js"() {
      init_constants5();
      init_transfer();
      toRel = (c2) => Math.max(c2 / YW, 0);
      convertItpToXyz65 = ({ i, t, p: p4, alpha }) => {
        if (i === void 0) i = 0;
        if (t === void 0) t = 0;
        if (p4 === void 0) p4 = 0;
        const l = transferPqDecode(
          i + 0.008609037037932761 * t + 0.11102962500302593 * p4
        );
        const m = transferPqDecode(
          i - 0.00860903703793275 * t - 0.11102962500302599 * p4
        );
        const s = transferPqDecode(
          i + 0.5600313357106791 * t - 0.32062717498731885 * p4
        );
        const res = {
          mode: "xyz65",
          x: toRel(
            2.070152218389422 * l - 1.3263473389671556 * m + 0.2066510476294051 * s
          ),
          y: toRel(
            0.3647385209748074 * l + 0.680566024947227 * m - 0.0453045459220346 * s
          ),
          z: toRel(
            -0.049747207535812 * l - 0.0492609666966138 * m + 1.1880659249923042 * s
          )
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertItpToXyz65_default = convertItpToXyz65;
    }
  });

  // node_modules/culori/src/itp/convertXyz65ToItp.js
  var toAbs, convertXyz65ToItp, convertXyz65ToItp_default;
  var init_convertXyz65ToItp = __esm({
    "node_modules/culori/src/itp/convertXyz65ToItp.js"() {
      init_constants5();
      init_transfer();
      toAbs = (c2 = 0) => Math.max(c2 * YW, 0);
      convertXyz65ToItp = ({ x, y, z, alpha }) => {
        const absX = toAbs(x);
        const absY = toAbs(y);
        const absZ = toAbs(z);
        const l = transferPqEncode(
          0.3592832590121217 * absX + 0.6976051147779502 * absY - 0.0358915932320289 * absZ
        );
        const m = transferPqEncode(
          -0.1920808463704995 * absX + 1.1004767970374323 * absY + 0.0753748658519118 * absZ
        );
        const s = transferPqEncode(
          0.0070797844607477 * absX + 0.0748396662186366 * absY + 0.8433265453898765 * absZ
        );
        const i = 0.5 * l + 0.5 * m;
        const t = 1.61376953125 * l - 3.323486328125 * m + 1.709716796875 * s;
        const p4 = 4.378173828125 * l - 4.24560546875 * m - 0.132568359375 * s;
        const res = { mode: "itp", i, t, p: p4 };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToItp_default = convertXyz65ToItp;
    }
  });

  // node_modules/culori/src/itp/definition.js
  var definition10, definition_default10;
  var init_definition10 = __esm({
    "node_modules/culori/src/itp/definition.js"() {
      init_linear();
      init_alpha();
      init_convertItpToXyz65();
      init_convertXyz65ToItp();
      init_convertRgbToXyz65();
      init_convertXyz65ToRgb();
      definition10 = {
        mode: "itp",
        channels: ["i", "t", "p", "alpha"],
        parse: ["--ictcp"],
        serialize: "--ictcp",
        toMode: {
          xyz65: convertItpToXyz65_default,
          rgb: (color) => convertXyz65ToRgb_default(convertItpToXyz65_default(color))
        },
        fromMode: {
          xyz65: convertXyz65ToItp_default,
          rgb: (color) => convertXyz65ToItp_default(convertRgbToXyz65_default(color))
        },
        ranges: {
          i: [0, 0.581],
          t: [-0.369, 0.272],
          p: [-0.164, 0.331]
        },
        interpolate: {
          i: interpolatorLinear,
          t: interpolatorLinear,
          p: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default10 = definition10;
    }
  });

  // node_modules/culori/src/jab/convertXyz65ToJab.js
  var p, d0, jabPqEncode, abs, convertXyz65ToJab, convertXyz65ToJab_default;
  var init_convertXyz65ToJab = __esm({
    "node_modules/culori/src/jab/convertXyz65ToJab.js"() {
      init_transfer();
      p = 134.03437499999998;
      d0 = 16295499532821565e-27;
      jabPqEncode = (v) => {
        if (v < 0) return 0;
        let vn3 = Math.pow(v / 1e4, M1);
        return Math.pow((C1 + C2 * vn3) / (1 + C3 * vn3), p);
      };
      abs = (v = 0) => Math.max(v * 203, 0);
      convertXyz65ToJab = ({ x, y, z, alpha }) => {
        x = abs(x);
        y = abs(y);
        z = abs(z);
        let xp = 1.15 * x - 0.15 * z;
        let yp = 0.66 * y + 0.34 * x;
        let l = jabPqEncode(0.41478972 * xp + 0.579999 * yp + 0.014648 * z);
        let m = jabPqEncode(-0.20151 * xp + 1.120649 * yp + 0.0531008 * z);
        let s = jabPqEncode(-0.0166008 * xp + 0.2648 * yp + 0.6684799 * z);
        let i = (l + m) / 2;
        let res = {
          mode: "jab",
          j: 0.44 * i / (1 - 0.56 * i) - d0,
          a: 3.524 * l - 4.066708 * m + 0.542708 * s,
          b: 0.199076 * l + 1.096799 * m - 1.295875 * s
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToJab_default = convertXyz65ToJab;
    }
  });

  // node_modules/culori/src/jab/convertJabToXyz65.js
  var p2, d02, jabPqDecode, rel, convertJabToXyz65, convertJabToXyz65_default;
  var init_convertJabToXyz65 = __esm({
    "node_modules/culori/src/jab/convertJabToXyz65.js"() {
      init_transfer();
      p2 = 134.03437499999998;
      d02 = 16295499532821565e-27;
      jabPqDecode = (v) => {
        if (v < 0) return 0;
        let vp = Math.pow(v, 1 / p2);
        return 1e4 * Math.pow((C1 - vp) / (C3 * vp - C2), 1 / M1);
      };
      rel = (v) => v / 203;
      convertJabToXyz65 = ({ j, a, b, alpha }) => {
        if (j === void 0) j = 0;
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let i = (j + d02) / (0.44 + 0.56 * (j + d02));
        let l = jabPqDecode(i + 0.13860504 * a + 0.058047316 * b);
        let m = jabPqDecode(i - 0.13860504 * a - 0.058047316 * b);
        let s = jabPqDecode(i - 0.096019242 * a - 0.8118919 * b);
        let res = {
          mode: "xyz65",
          x: rel(
            1.661373024652174 * l - 0.914523081304348 * m + 0.23136208173913045 * s
          ),
          y: rel(
            -0.3250758611844533 * l + 1.571847026732543 * m - 0.21825383453227928 * s
          ),
          z: rel(-0.090982811 * l - 0.31272829 * m + 1.5227666 * s)
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertJabToXyz65_default = convertJabToXyz65;
    }
  });

  // node_modules/culori/src/jab/convertRgbToJab.js
  var convertRgbToJab, convertRgbToJab_default;
  var init_convertRgbToJab = __esm({
    "node_modules/culori/src/jab/convertRgbToJab.js"() {
      init_convertXyz65ToJab();
      init_convertRgbToXyz65();
      convertRgbToJab = (rgb3) => {
        let res = convertXyz65ToJab_default(convertRgbToXyz65_default(rgb3));
        if (rgb3.r === rgb3.b && rgb3.b === rgb3.g) {
          res.a = res.b = 0;
        }
        return res;
      };
      convertRgbToJab_default = convertRgbToJab;
    }
  });

  // node_modules/culori/src/jab/convertJabToRgb.js
  var convertJabToRgb, convertJabToRgb_default;
  var init_convertJabToRgb = __esm({
    "node_modules/culori/src/jab/convertJabToRgb.js"() {
      init_convertXyz65ToRgb();
      init_convertJabToXyz65();
      convertJabToRgb = (color) => convertXyz65ToRgb_default(convertJabToXyz65_default(color));
      convertJabToRgb_default = convertJabToRgb;
    }
  });

  // node_modules/culori/src/jab/definition.js
  var definition11, definition_default11;
  var init_definition11 = __esm({
    "node_modules/culori/src/jab/definition.js"() {
      init_convertXyz65ToJab();
      init_convertJabToXyz65();
      init_convertRgbToJab();
      init_convertJabToRgb();
      init_linear();
      init_alpha();
      definition11 = {
        mode: "jab",
        channels: ["j", "a", "b", "alpha"],
        parse: ["--jzazbz"],
        serialize: "--jzazbz",
        fromMode: {
          rgb: convertRgbToJab_default,
          xyz65: convertXyz65ToJab_default
        },
        toMode: {
          rgb: convertJabToRgb_default,
          xyz65: convertJabToXyz65_default
        },
        ranges: {
          j: [0, 0.222],
          a: [-0.109, 0.129],
          b: [-0.185, 0.134]
        },
        interpolate: {
          j: interpolatorLinear,
          a: interpolatorLinear,
          b: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default11 = definition11;
    }
  });

  // node_modules/culori/src/jch/convertJabToJch.js
  var convertJabToJch, convertJabToJch_default;
  var init_convertJabToJch = __esm({
    "node_modules/culori/src/jch/convertJabToJch.js"() {
      init_normalizeHue();
      convertJabToJch = ({ j, a, b, alpha }) => {
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let c2 = Math.sqrt(a * a + b * b);
        let res = {
          mode: "jch",
          j,
          c: c2
        };
        if (c2) {
          res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
        }
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertJabToJch_default = convertJabToJch;
    }
  });

  // node_modules/culori/src/jch/convertJchToJab.js
  var convertJchToJab, convertJchToJab_default;
  var init_convertJchToJab = __esm({
    "node_modules/culori/src/jch/convertJchToJab.js"() {
      convertJchToJab = ({ j, c: c2, h, alpha }) => {
        if (h === void 0) h = 0;
        let res = {
          mode: "jab",
          j,
          a: c2 ? c2 * Math.cos(h / 180 * Math.PI) : 0,
          b: c2 ? c2 * Math.sin(h / 180 * Math.PI) : 0
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertJchToJab_default = convertJchToJab;
    }
  });

  // node_modules/culori/src/jch/definition.js
  var definition12, definition_default12;
  var init_definition12 = __esm({
    "node_modules/culori/src/jch/definition.js"() {
      init_convertJabToJch();
      init_convertJchToJab();
      init_convertJabToRgb();
      init_convertRgbToJab();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition12 = {
        mode: "jch",
        parse: ["--jzczhz"],
        serialize: "--jzczhz",
        toMode: {
          jab: convertJchToJab_default,
          rgb: (c2) => convertJabToRgb_default(convertJchToJab_default(c2))
        },
        fromMode: {
          rgb: (c2) => convertJabToJch_default(convertRgbToJab_default(c2)),
          jab: convertJabToJch_default
        },
        channels: ["j", "c", "h", "alpha"],
        ranges: {
          j: [0, 0.221],
          c: [0, 0.19],
          h: [0, 360]
        },
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          c: interpolatorLinear,
          j: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueChroma
        },
        average: {
          h: averageAngle
        }
      };
      definition_default12 = definition12;
    }
  });

  // node_modules/culori/src/xyz50/constants.js
  var k3, e3;
  var init_constants6 = __esm({
    "node_modules/culori/src/xyz50/constants.js"() {
      k3 = Math.pow(29, 3) / Math.pow(3, 3);
      e3 = Math.pow(6, 3) / Math.pow(29, 3);
    }
  });

  // node_modules/culori/src/lab/convertLabToXyz50.js
  var fn4, convertLabToXyz50, convertLabToXyz50_default;
  var init_convertLabToXyz50 = __esm({
    "node_modules/culori/src/lab/convertLabToXyz50.js"() {
      init_constants6();
      init_constants3();
      fn4 = (v) => Math.pow(v, 3) > e3 ? Math.pow(v, 3) : (116 * v - 16) / k3;
      convertLabToXyz50 = ({ l, a, b, alpha }) => {
        if (l === void 0) l = 0;
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let fy = (l + 16) / 116;
        let fx = a / 500 + fy;
        let fz = fy - b / 200;
        let res = {
          mode: "xyz50",
          x: fn4(fx) * D50.X,
          y: fn4(fy) * D50.Y,
          z: fn4(fz) * D50.Z
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLabToXyz50_default = convertLabToXyz50;
    }
  });

  // node_modules/culori/src/xyz50/convertXyz50ToRgb.js
  var convertXyz50ToRgb, convertXyz50ToRgb_default;
  var init_convertXyz50ToRgb = __esm({
    "node_modules/culori/src/xyz50/convertXyz50ToRgb.js"() {
      init_convertLrgbToRgb();
      convertXyz50ToRgb = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = convertLrgbToRgb_default({
          r: x * 3.1341359569958707 - y * 1.6173863321612538 - 0.4906619460083532 * z,
          g: x * -0.978795502912089 + y * 1.916254567259524 + 0.03344273116131949 * z,
          b: x * 0.07195537988411677 - y * 0.2289768264158322 + 1.405386058324125 * z
        });
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz50ToRgb_default = convertXyz50ToRgb;
    }
  });

  // node_modules/culori/src/lab/convertLabToRgb.js
  var convertLabToRgb, convertLabToRgb_default;
  var init_convertLabToRgb = __esm({
    "node_modules/culori/src/lab/convertLabToRgb.js"() {
      init_convertLabToXyz50();
      init_convertXyz50ToRgb();
      convertLabToRgb = (lab2) => convertXyz50ToRgb_default(convertLabToXyz50_default(lab2));
      convertLabToRgb_default = convertLabToRgb;
    }
  });

  // node_modules/culori/src/xyz50/convertRgbToXyz50.js
  var convertRgbToXyz50, convertRgbToXyz50_default;
  var init_convertRgbToXyz50 = __esm({
    "node_modules/culori/src/xyz50/convertRgbToXyz50.js"() {
      init_convertRgbToLrgb();
      convertRgbToXyz50 = (rgb3) => {
        let { r, g, b, alpha } = convertRgbToLrgb_default(rgb3);
        let res = {
          mode: "xyz50",
          x: 0.436065742824811 * r + 0.3851514688337912 * g + 0.14307845442264197 * b,
          y: 0.22249319175623702 * r + 0.7168870538238823 * g + 0.06061979053616537 * b,
          z: 0.013923904500943465 * r + 0.09708128566574634 * g + 0.7140993584005155 * b
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertRgbToXyz50_default = convertRgbToXyz50;
    }
  });

  // node_modules/culori/src/lab/convertXyz50ToLab.js
  var f2, convertXyz50ToLab, convertXyz50ToLab_default;
  var init_convertXyz50ToLab = __esm({
    "node_modules/culori/src/lab/convertXyz50ToLab.js"() {
      init_constants6();
      init_constants3();
      f2 = (value) => value > e3 ? Math.cbrt(value) : (k3 * value + 16) / 116;
      convertXyz50ToLab = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let f0 = f2(x / D50.X);
        let f1 = f2(y / D50.Y);
        let f22 = f2(z / D50.Z);
        let res = {
          mode: "lab",
          l: 116 * f1 - 16,
          a: 500 * (f0 - f1),
          b: 200 * (f1 - f22)
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz50ToLab_default = convertXyz50ToLab;
    }
  });

  // node_modules/culori/src/lab/convertRgbToLab.js
  var convertRgbToLab, convertRgbToLab_default;
  var init_convertRgbToLab = __esm({
    "node_modules/culori/src/lab/convertRgbToLab.js"() {
      init_convertRgbToXyz50();
      init_convertXyz50ToLab();
      convertRgbToLab = (rgb3) => {
        let res = convertXyz50ToLab_default(convertRgbToXyz50_default(rgb3));
        if (rgb3.r === rgb3.b && rgb3.b === rgb3.g) {
          res.a = res.b = 0;
        }
        return res;
      };
      convertRgbToLab_default = convertRgbToLab;
    }
  });

  // node_modules/culori/src/lab/parseLab.js
  function parseLab(color, parsed) {
    if (!parsed || parsed[0] !== "lab") {
      return void 0;
    }
    const res = { mode: "lab" };
    const [, l, a, b, alpha] = parsed;
    if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) {
      return void 0;
    }
    if (l.type !== Tok.None) {
      res.l = Math.min(Math.max(0, l.value), 100);
    }
    if (a.type !== Tok.None) {
      res.a = a.type === Tok.Number ? a.value : a.value * 125 / 100;
    }
    if (b.type !== Tok.None) {
      res.b = b.type === Tok.Number ? b.value : b.value * 125 / 100;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseLab_default;
  var init_parseLab = __esm({
    "node_modules/culori/src/lab/parseLab.js"() {
      init_parse();
      parseLab_default = parseLab;
    }
  });

  // node_modules/culori/src/lab/definition.js
  var definition13, definition_default13;
  var init_definition13 = __esm({
    "node_modules/culori/src/lab/definition.js"() {
      init_convertLabToRgb();
      init_convertLabToXyz50();
      init_convertRgbToLab();
      init_convertXyz50ToLab();
      init_parseLab();
      init_linear();
      init_alpha();
      definition13 = {
        mode: "lab",
        toMode: {
          xyz50: convertLabToXyz50_default,
          rgb: convertLabToRgb_default
        },
        fromMode: {
          xyz50: convertXyz50ToLab_default,
          rgb: convertRgbToLab_default
        },
        channels: ["l", "a", "b", "alpha"],
        ranges: {
          l: [0, 100],
          a: [-100, 100],
          b: [-100, 100]
        },
        parse: [parseLab_default],
        serialize: (c2) => `lab(${c2.l !== void 0 ? c2.l : "none"} ${c2.a !== void 0 ? c2.a : "none"} ${c2.b !== void 0 ? c2.b : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
        interpolate: {
          l: interpolatorLinear,
          a: interpolatorLinear,
          b: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default13 = definition13;
    }
  });

  // node_modules/culori/src/lab65/definition.js
  var definition14, definition_default14;
  var init_definition14 = __esm({
    "node_modules/culori/src/lab65/definition.js"() {
      init_convertLab65ToRgb();
      init_convertLab65ToXyz65();
      init_convertRgbToLab65();
      init_convertXyz65ToLab65();
      init_definition13();
      definition14 = __spreadProps(__spreadValues({}, definition_default13), {
        mode: "lab65",
        parse: ["--lab-d65"],
        serialize: "--lab-d65",
        toMode: {
          xyz65: convertLab65ToXyz65_default,
          rgb: convertLab65ToRgb_default
        },
        fromMode: {
          xyz65: convertXyz65ToLab65_default,
          rgb: convertRgbToLab65_default
        },
        ranges: {
          l: [0, 100],
          a: [-86.182, 98.234],
          b: [-107.86, 94.477]
        }
      });
      definition_default14 = definition14;
    }
  });

  // node_modules/culori/src/lch/parseLch.js
  function parseLch(color, parsed) {
    if (!parsed || parsed[0] !== "lch") {
      return void 0;
    }
    const res = { mode: "lch" };
    const [, l, c2, h, alpha] = parsed;
    if (l.type !== Tok.None) {
      if (l.type === Tok.Hue) {
        return void 0;
      }
      res.l = Math.min(Math.max(0, l.value), 100);
    }
    if (c2.type !== Tok.None) {
      res.c = Math.max(
        0,
        c2.type === Tok.Number ? c2.value : c2.value * 150 / 100
      );
    }
    if (h.type !== Tok.None) {
      if (h.type === Tok.Percentage) {
        return void 0;
      }
      res.h = h.value;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseLch_default;
  var init_parseLch = __esm({
    "node_modules/culori/src/lch/parseLch.js"() {
      init_parse();
      parseLch_default = parseLch;
    }
  });

  // node_modules/culori/src/lch/definition.js
  var definition15, definition_default15;
  var init_definition15 = __esm({
    "node_modules/culori/src/lch/definition.js"() {
      init_convertLabToLch();
      init_convertLchToLab();
      init_convertLabToRgb();
      init_convertRgbToLab();
      init_parseLch();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      definition15 = {
        mode: "lch",
        toMode: {
          lab: convertLchToLab_default,
          rgb: (c2) => convertLabToRgb_default(convertLchToLab_default(c2))
        },
        fromMode: {
          rgb: (c2) => convertLabToLch_default(convertRgbToLab_default(c2)),
          lab: convertLabToLch_default
        },
        channels: ["l", "c", "h", "alpha"],
        ranges: {
          l: [0, 100],
          c: [0, 150],
          h: [0, 360]
        },
        parse: [parseLch_default],
        serialize: (c2) => `lch(${c2.l !== void 0 ? c2.l : "none"} ${c2.c !== void 0 ? c2.c : "none"} ${c2.h !== void 0 ? c2.h : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          c: interpolatorLinear,
          l: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueChroma
        },
        average: {
          h: averageAngle
        }
      };
      definition_default15 = definition15;
    }
  });

  // node_modules/culori/src/lch65/definition.js
  var definition16, definition_default16;
  var init_definition16 = __esm({
    "node_modules/culori/src/lch65/definition.js"() {
      init_convertLabToLch();
      init_convertLchToLab();
      init_convertLab65ToRgb();
      init_convertRgbToLab65();
      init_definition15();
      definition16 = __spreadProps(__spreadValues({}, definition_default15), {
        mode: "lch65",
        parse: ["--lch-d65"],
        serialize: "--lch-d65",
        toMode: {
          lab65: (c2) => convertLchToLab_default(c2, "lab65"),
          rgb: (c2) => convertLab65ToRgb_default(convertLchToLab_default(c2, "lab65"))
        },
        fromMode: {
          rgb: (c2) => convertLabToLch_default(convertRgbToLab65_default(c2), "lch65"),
          lab65: (c2) => convertLabToLch_default(c2, "lch65")
        },
        ranges: {
          l: [0, 100],
          c: [0, 133.807],
          h: [0, 360]
        }
      });
      definition_default16 = definition16;
    }
  });

  // node_modules/culori/src/lchuv/convertLuvToLchuv.js
  var convertLuvToLchuv, convertLuvToLchuv_default;
  var init_convertLuvToLchuv = __esm({
    "node_modules/culori/src/lchuv/convertLuvToLchuv.js"() {
      init_normalizeHue();
      convertLuvToLchuv = ({ l, u, v, alpha }) => {
        if (u === void 0) u = 0;
        if (v === void 0) v = 0;
        let c2 = Math.sqrt(u * u + v * v);
        let res = {
          mode: "lchuv",
          l,
          c: c2
        };
        if (c2) {
          res.h = normalizeHue_default(Math.atan2(v, u) * 180 / Math.PI);
        }
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLuvToLchuv_default = convertLuvToLchuv;
    }
  });

  // node_modules/culori/src/lchuv/convertLchuvToLuv.js
  var convertLchuvToLuv, convertLchuvToLuv_default;
  var init_convertLchuvToLuv = __esm({
    "node_modules/culori/src/lchuv/convertLchuvToLuv.js"() {
      convertLchuvToLuv = ({ l, c: c2, h, alpha }) => {
        if (h === void 0) h = 0;
        let res = {
          mode: "luv",
          l,
          u: c2 ? c2 * Math.cos(h / 180 * Math.PI) : 0,
          v: c2 ? c2 * Math.sin(h / 180 * Math.PI) : 0
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLchuvToLuv_default = convertLchuvToLuv;
    }
  });

  // node_modules/culori/src/luv/convertXyz50ToLuv.js
  var u_fn, v_fn, un, vn, l_fn, convertXyz50ToLuv, convertXyz50ToLuv_default;
  var init_convertXyz50ToLuv = __esm({
    "node_modules/culori/src/luv/convertXyz50ToLuv.js"() {
      init_constants6();
      init_constants3();
      u_fn = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
      v_fn = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
      un = u_fn(D50.X, D50.Y, D50.Z);
      vn = v_fn(D50.X, D50.Y, D50.Z);
      l_fn = (value) => value <= e3 ? k3 * value : 116 * Math.cbrt(value) - 16;
      convertXyz50ToLuv = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let l = l_fn(y / D50.Y);
        let u = u_fn(x, y, z);
        let v = v_fn(x, y, z);
        if (!isFinite(u) || !isFinite(v)) {
          l = u = v = 0;
        } else {
          u = 13 * l * (u - un);
          v = 13 * l * (v - vn);
        }
        let res = {
          mode: "luv",
          l,
          u,
          v
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz50ToLuv_default = convertXyz50ToLuv;
    }
  });

  // node_modules/culori/src/luv/convertLuvToXyz50.js
  var u_fn2, v_fn2, un2, vn2, convertLuvToXyz50, convertLuvToXyz50_default;
  var init_convertLuvToXyz50 = __esm({
    "node_modules/culori/src/luv/convertLuvToXyz50.js"() {
      init_constants6();
      init_constants3();
      u_fn2 = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
      v_fn2 = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
      un2 = u_fn2(D50.X, D50.Y, D50.Z);
      vn2 = v_fn2(D50.X, D50.Y, D50.Z);
      convertLuvToXyz50 = ({ l, u, v, alpha }) => {
        if (l === void 0) l = 0;
        if (l === 0) {
          return { mode: "xyz50", x: 0, y: 0, z: 0 };
        }
        if (u === void 0) u = 0;
        if (v === void 0) v = 0;
        let up = u / (13 * l) + un2;
        let vp = v / (13 * l) + vn2;
        let y = D50.Y * (l <= 8 ? l / k3 : Math.pow((l + 16) / 116, 3));
        let x = y * (9 * up) / (4 * vp);
        let z = y * (12 - 3 * up - 20 * vp) / (4 * vp);
        let res = { mode: "xyz50", x, y, z };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLuvToXyz50_default = convertLuvToXyz50;
    }
  });

  // node_modules/culori/src/lchuv/definition.js
  var convertRgbToLchuv, convertLchuvToRgb, definition17, definition_default17;
  var init_definition17 = __esm({
    "node_modules/culori/src/lchuv/definition.js"() {
      init_convertLuvToLchuv();
      init_convertLchuvToLuv();
      init_convertXyz50ToLuv();
      init_convertLuvToXyz50();
      init_convertXyz50ToRgb();
      init_convertRgbToXyz50();
      init_hue();
      init_alpha();
      init_linear();
      init_difference();
      init_average();
      convertRgbToLchuv = (rgb3) => convertLuvToLchuv_default(convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb3)));
      convertLchuvToRgb = (lchuv2) => convertXyz50ToRgb_default(convertLuvToXyz50_default(convertLchuvToLuv_default(lchuv2)));
      definition17 = {
        mode: "lchuv",
        toMode: {
          luv: convertLchuvToLuv_default,
          rgb: convertLchuvToRgb
        },
        fromMode: {
          rgb: convertRgbToLchuv,
          luv: convertLuvToLchuv_default
        },
        channels: ["l", "c", "h", "alpha"],
        parse: ["--lchuv"],
        serialize: "--lchuv",
        ranges: {
          l: [0, 100],
          c: [0, 176.956],
          h: [0, 360]
        },
        interpolate: {
          h: { use: interpolatorLinear, fixup: fixupHueShorter },
          c: interpolatorLinear,
          l: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        },
        difference: {
          h: differenceHueChroma
        },
        average: {
          h: averageAngle
        }
      };
      definition_default17 = definition17;
    }
  });

  // node_modules/culori/src/lrgb/definition.js
  var definition18, definition_default18;
  var init_definition18 = __esm({
    "node_modules/culori/src/lrgb/definition.js"() {
      init_definition();
      init_convertRgbToLrgb();
      init_convertLrgbToRgb();
      definition18 = __spreadProps(__spreadValues({}, definition_default), {
        mode: "lrgb",
        toMode: {
          rgb: convertLrgbToRgb_default
        },
        fromMode: {
          rgb: convertRgbToLrgb_default
        },
        parse: ["srgb-linear"],
        serialize: "srgb-linear"
      });
      definition_default18 = definition18;
    }
  });

  // node_modules/culori/src/luv/definition.js
  var definition19, definition_default19;
  var init_definition19 = __esm({
    "node_modules/culori/src/luv/definition.js"() {
      init_convertXyz50ToLuv();
      init_convertLuvToXyz50();
      init_convertXyz50ToRgb();
      init_convertRgbToXyz50();
      init_linear();
      init_alpha();
      definition19 = {
        mode: "luv",
        toMode: {
          xyz50: convertLuvToXyz50_default,
          rgb: (luv2) => convertXyz50ToRgb_default(convertLuvToXyz50_default(luv2))
        },
        fromMode: {
          xyz50: convertXyz50ToLuv_default,
          rgb: (rgb3) => convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb3))
        },
        channels: ["l", "u", "v", "alpha"],
        parse: ["--luv"],
        serialize: "--luv",
        ranges: {
          l: [0, 100],
          u: [-84.936, 175.042],
          v: [-125.882, 87.243]
        },
        interpolate: {
          l: interpolatorLinear,
          u: interpolatorLinear,
          v: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default19 = definition19;
    }
  });

  // node_modules/culori/src/oklab/convertLrgbToOklab.js
  var convertLrgbToOklab, convertLrgbToOklab_default;
  var init_convertLrgbToOklab = __esm({
    "node_modules/culori/src/oklab/convertLrgbToOklab.js"() {
      convertLrgbToOklab = ({ r, g, b, alpha }) => {
        if (r === void 0) r = 0;
        if (g === void 0) g = 0;
        if (b === void 0) b = 0;
        let L = Math.cbrt(
          0.41222147079999993 * r + 0.5363325363 * g + 0.0514459929 * b
        );
        let M3 = Math.cbrt(
          0.2119034981999999 * r + 0.6806995450999999 * g + 0.1073969566 * b
        );
        let S = Math.cbrt(
          0.08830246189999998 * r + 0.2817188376 * g + 0.6299787005000002 * b
        );
        let res = {
          mode: "oklab",
          l: 0.2104542553 * L + 0.793617785 * M3 - 0.0040720468 * S,
          a: 1.9779984951 * L - 2.428592205 * M3 + 0.4505937099 * S,
          b: 0.0259040371 * L + 0.7827717662 * M3 - 0.808675766 * S
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertLrgbToOklab_default = convertLrgbToOklab;
    }
  });

  // node_modules/culori/src/oklab/convertRgbToOklab.js
  var convertRgbToOklab, convertRgbToOklab_default;
  var init_convertRgbToOklab = __esm({
    "node_modules/culori/src/oklab/convertRgbToOklab.js"() {
      init_convertRgbToLrgb();
      init_convertLrgbToOklab();
      convertRgbToOklab = (rgb3) => {
        let res = convertLrgbToOklab_default(convertRgbToLrgb_default(rgb3));
        if (rgb3.r === rgb3.b && rgb3.b === rgb3.g) {
          res.a = res.b = 0;
        }
        return res;
      };
      convertRgbToOklab_default = convertRgbToOklab;
    }
  });

  // node_modules/culori/src/oklab/convertOklabToLrgb.js
  var convertOklabToLrgb, convertOklabToLrgb_default;
  var init_convertOklabToLrgb = __esm({
    "node_modules/culori/src/oklab/convertOklabToLrgb.js"() {
      convertOklabToLrgb = ({ l, a, b, alpha }) => {
        if (l === void 0) l = 0;
        if (a === void 0) a = 0;
        if (b === void 0) b = 0;
        let L = Math.pow(
          l * 0.9999999984505198 + 0.39633779217376786 * a + 0.2158037580607588 * b,
          3
        );
        let M3 = Math.pow(
          l * 1.0000000088817609 - 0.10556134232365635 * a - 0.06385417477170591 * b,
          3
        );
        let S = Math.pow(
          l * 1.0000000546724108 - 0.08948418209496575 * a - 1.2914855378640917 * b,
          3
        );
        let res = {
          mode: "lrgb",
          r: 4.076741661347994 * L - 3.307711590408193 * M3 + 0.230969928729428 * S,
          g: -1.2684380040921763 * L + 2.6097574006633715 * M3 - 0.3413193963102197 * S,
          b: -0.004196086541837188 * L - 0.7034186144594493 * M3 + 1.7076147009309444 * S
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertOklabToLrgb_default = convertOklabToLrgb;
    }
  });

  // node_modules/culori/src/oklab/convertOklabToRgb.js
  var convertOklabToRgb, convertOklabToRgb_default;
  var init_convertOklabToRgb = __esm({
    "node_modules/culori/src/oklab/convertOklabToRgb.js"() {
      init_convertLrgbToRgb();
      init_convertOklabToLrgb();
      convertOklabToRgb = (c2) => convertLrgbToRgb_default(convertOklabToLrgb_default(c2));
      convertOklabToRgb_default = convertOklabToRgb;
    }
  });

  // node_modules/culori/src/okhsl/helpers.js
  function toe(x) {
    const k_1 = 0.206;
    const k_2 = 0.03;
    const k_3 = (1 + k_1) / (1 + k_2);
    return 0.5 * (k_3 * x - k_1 + Math.sqrt((k_3 * x - k_1) * (k_3 * x - k_1) + 4 * k_2 * k_3 * x));
  }
  function toe_inv(x) {
    const k_1 = 0.206;
    const k_2 = 0.03;
    const k_3 = (1 + k_1) / (1 + k_2);
    return (x * x + k_1 * x) / (k_3 * (x + k_2));
  }
  function compute_max_saturation(a, b) {
    let k0, k1, k22, k32, k4, wl, wm, ws;
    if (-1.88170328 * a - 0.80936493 * b > 1) {
      k0 = 1.19086277;
      k1 = 1.76576728;
      k22 = 0.59662641;
      k32 = 0.75515197;
      k4 = 0.56771245;
      wl = 4.0767416621;
      wm = -3.3077115913;
      ws = 0.2309699292;
    } else if (1.81444104 * a - 1.19445276 * b > 1) {
      k0 = 0.73956515;
      k1 = -0.45954404;
      k22 = 0.08285427;
      k32 = 0.1254107;
      k4 = 0.14503204;
      wl = -1.2684380046;
      wm = 2.6097574011;
      ws = -0.3413193965;
    } else {
      k0 = 1.35733652;
      k1 = -915799e-8;
      k22 = -1.1513021;
      k32 = -0.50559606;
      k4 = 692167e-8;
      wl = -0.0041960863;
      wm = -0.7034186147;
      ws = 1.707614701;
    }
    let S = k0 + k1 * a + k22 * b + k32 * a * a + k4 * a * b;
    let k_l = 0.3963377774 * a + 0.2158037573 * b;
    let k_m = -0.1055613458 * a - 0.0638541728 * b;
    let k_s = -0.0894841775 * a - 1.291485548 * b;
    {
      let l_ = 1 + S * k_l;
      let m_ = 1 + S * k_m;
      let s_ = 1 + S * k_s;
      let l = l_ * l_ * l_;
      let m = m_ * m_ * m_;
      let s = s_ * s_ * s_;
      let l_dS = 3 * k_l * l_ * l_;
      let m_dS = 3 * k_m * m_ * m_;
      let s_dS = 3 * k_s * s_ * s_;
      let l_dS2 = 6 * k_l * k_l * l_;
      let m_dS2 = 6 * k_m * k_m * m_;
      let s_dS2 = 6 * k_s * k_s * s_;
      let f3 = wl * l + wm * m + ws * s;
      let f1 = wl * l_dS + wm * m_dS + ws * s_dS;
      let f22 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;
      S = S - f3 * f1 / (f1 * f1 - 0.5 * f3 * f22);
    }
    return S;
  }
  function find_cusp(a, b) {
    let S_cusp = compute_max_saturation(a, b);
    let rgb3 = convertOklabToLrgb_default({ l: 1, a: S_cusp * a, b: S_cusp * b });
    let L_cusp = Math.cbrt(1 / Math.max(rgb3.r, rgb3.g, rgb3.b));
    let C_cusp = L_cusp * S_cusp;
    return [L_cusp, C_cusp];
  }
  function find_gamut_intersection(a, b, L1, C12, L0, cusp = null) {
    if (!cusp) {
      cusp = find_cusp(a, b);
    }
    let t;
    if ((L1 - L0) * cusp[1] - (cusp[0] - L0) * C12 <= 0) {
      t = cusp[1] * L0 / (C12 * cusp[0] + cusp[1] * (L0 - L1));
    } else {
      t = cusp[1] * (L0 - 1) / (C12 * (cusp[0] - 1) + cusp[1] * (L0 - L1));
      {
        let dL = L1 - L0;
        let dC = C12;
        let k_l = 0.3963377774 * a + 0.2158037573 * b;
        let k_m = -0.1055613458 * a - 0.0638541728 * b;
        let k_s = -0.0894841775 * a - 1.291485548 * b;
        let l_dt = dL + dC * k_l;
        let m_dt = dL + dC * k_m;
        let s_dt = dL + dC * k_s;
        {
          let L = L0 * (1 - t) + t * L1;
          let C = t * C12;
          let l_ = L + C * k_l;
          let m_ = L + C * k_m;
          let s_ = L + C * k_s;
          let l = l_ * l_ * l_;
          let m = m_ * m_ * m_;
          let s = s_ * s_ * s_;
          let ldt = 3 * l_dt * l_ * l_;
          let mdt = 3 * m_dt * m_ * m_;
          let sdt = 3 * s_dt * s_ * s_;
          let ldt2 = 6 * l_dt * l_dt * l_;
          let mdt2 = 6 * m_dt * m_dt * m_;
          let sdt2 = 6 * s_dt * s_dt * s_;
          let r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s - 1;
          let r1 = 4.0767416621 * ldt - 3.3077115913 * mdt + 0.2309699292 * sdt;
          let r2 = 4.0767416621 * ldt2 - 3.3077115913 * mdt2 + 0.2309699292 * sdt2;
          let u_r = r1 / (r1 * r1 - 0.5 * r * r2);
          let t_r = -r * u_r;
          let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s - 1;
          let g1 = -1.2684380046 * ldt + 2.6097574011 * mdt - 0.3413193965 * sdt;
          let g2 = -1.2684380046 * ldt2 + 2.6097574011 * mdt2 - 0.3413193965 * sdt2;
          let u_g = g1 / (g1 * g1 - 0.5 * g * g2);
          let t_g = -g * u_g;
          let b2 = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s - 1;
          let b1 = -0.0041960863 * ldt - 0.7034186147 * mdt + 1.707614701 * sdt;
          let b22 = -0.0041960863 * ldt2 - 0.7034186147 * mdt2 + 1.707614701 * sdt2;
          let u_b = b1 / (b1 * b1 - 0.5 * b2 * b22);
          let t_b = -b2 * u_b;
          t_r = u_r >= 0 ? t_r : 1e6;
          t_g = u_g >= 0 ? t_g : 1e6;
          t_b = u_b >= 0 ? t_b : 1e6;
          t += Math.min(t_r, Math.min(t_g, t_b));
        }
      }
    }
    return t;
  }
  function get_ST_max(a_, b_, cusp = null) {
    if (!cusp) {
      cusp = find_cusp(a_, b_);
    }
    let L = cusp[0];
    let C = cusp[1];
    return [C / L, C / (1 - L)];
  }
  function get_Cs(L, a_, b_) {
    let cusp = find_cusp(a_, b_);
    let C_max = find_gamut_intersection(a_, b_, L, 1, L, cusp);
    let ST_max = get_ST_max(a_, b_, cusp);
    let S_mid = 0.11516993 + 1 / (7.4477897 + 4.1590124 * b_ + a_ * (-2.19557347 + 1.75198401 * b_ + a_ * (-2.13704948 - 10.02301043 * b_ + a_ * (-4.24894561 + 5.38770819 * b_ + 4.69891013 * a_))));
    let T_mid = 0.11239642 + 1 / (1.6132032 - 0.68124379 * b_ + a_ * (0.40370612 + 0.90148123 * b_ + a_ * (-0.27087943 + 0.6122399 * b_ + a_ * (299215e-8 - 0.45399568 * b_ - 0.14661872 * a_))));
    let k4 = C_max / Math.min(L * ST_max[0], (1 - L) * ST_max[1]);
    let C_a = L * S_mid;
    let C_b = (1 - L) * T_mid;
    let C_mid = 0.9 * k4 * Math.sqrt(
      Math.sqrt(
        1 / (1 / (C_a * C_a * C_a * C_a) + 1 / (C_b * C_b * C_b * C_b))
      )
    );
    C_a = L * 0.4;
    C_b = (1 - L) * 0.8;
    let C_0 = Math.sqrt(1 / (1 / (C_a * C_a) + 1 / (C_b * C_b)));
    return [C_0, C_mid, C_max];
  }
  var init_helpers = __esm({
    "node_modules/culori/src/okhsl/helpers.js"() {
      init_convertOklabToLrgb();
    }
  });

  // node_modules/culori/src/okhsl/convertOklabToOkhsl.js
  function convertOklabToOkhsl(lab2) {
    const l = lab2.l !== void 0 ? lab2.l : 0;
    const a = lab2.a !== void 0 ? lab2.a : 0;
    const b = lab2.b !== void 0 ? lab2.b : 0;
    const ret = { mode: "okhsl", l: toe(l) };
    if (lab2.alpha !== void 0) {
      ret.alpha = lab2.alpha;
    }
    let c2 = Math.sqrt(a * a + b * b);
    if (!c2) {
      ret.s = 0;
      return ret;
    }
    let [C_0, C_mid, C_max] = get_Cs(l, a / c2, b / c2);
    let s;
    if (c2 < C_mid) {
      let k_0 = 0;
      let k_1 = 0.8 * C_0;
      let k_2 = 1 - k_1 / C_mid;
      let t = (c2 - k_0) / (k_1 + k_2 * (c2 - k_0));
      s = t * 0.8;
    } else {
      let k_0 = C_mid;
      let k_1 = 0.2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
      let k_2 = 1 - k_1 / (C_max - C_mid);
      let t = (c2 - k_0) / (k_1 + k_2 * (c2 - k_0));
      s = 0.8 + 0.2 * t;
    }
    if (s) {
      ret.s = s;
      ret.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
    }
    return ret;
  }
  var init_convertOklabToOkhsl = __esm({
    "node_modules/culori/src/okhsl/convertOklabToOkhsl.js"() {
      init_normalizeHue();
      init_helpers();
    }
  });

  // node_modules/culori/src/okhsl/convertOkhslToOklab.js
  function convertOkhslToOklab(hsl2) {
    let h = hsl2.h !== void 0 ? hsl2.h : 0;
    let s = hsl2.s !== void 0 ? hsl2.s : 0;
    let l = hsl2.l !== void 0 ? hsl2.l : 0;
    const ret = { mode: "oklab", l: toe_inv(l) };
    if (hsl2.alpha !== void 0) {
      ret.alpha = hsl2.alpha;
    }
    if (!s || l === 1) {
      ret.a = ret.b = 0;
      return ret;
    }
    let a_ = Math.cos(h / 180 * Math.PI);
    let b_ = Math.sin(h / 180 * Math.PI);
    let [C_0, C_mid, C_max] = get_Cs(ret.l, a_, b_);
    let t, k_0, k_1, k_2;
    if (s < 0.8) {
      t = 1.25 * s;
      k_0 = 0;
      k_1 = 0.8 * C_0;
      k_2 = 1 - k_1 / C_mid;
    } else {
      t = 5 * (s - 0.8);
      k_0 = C_mid;
      k_1 = 0.2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
      k_2 = 1 - k_1 / (C_max - C_mid);
    }
    let C = k_0 + t * k_1 / (1 - k_2 * t);
    ret.a = C * a_;
    ret.b = C * b_;
    return ret;
  }
  var init_convertOkhslToOklab = __esm({
    "node_modules/culori/src/okhsl/convertOkhslToOklab.js"() {
      init_helpers();
    }
  });

  // node_modules/culori/src/okhsl/modeOkhsl.js
  var modeOkhsl, modeOkhsl_default;
  var init_modeOkhsl = __esm({
    "node_modules/culori/src/okhsl/modeOkhsl.js"() {
      init_convertRgbToOklab();
      init_convertOklabToRgb();
      init_convertOklabToOkhsl();
      init_convertOkhslToOklab();
      init_definition7();
      modeOkhsl = __spreadProps(__spreadValues({}, definition_default7), {
        mode: "okhsl",
        channels: ["h", "s", "l", "alpha"],
        parse: ["--okhsl"],
        serialize: "--okhsl",
        fromMode: {
          oklab: convertOklabToOkhsl,
          rgb: (c2) => convertOklabToOkhsl(convertRgbToOklab_default(c2))
        },
        toMode: {
          oklab: convertOkhslToOklab,
          rgb: (c2) => convertOklabToRgb_default(convertOkhslToOklab(c2))
        }
      });
      modeOkhsl_default = modeOkhsl;
    }
  });

  // node_modules/culori/src/okhsv/convertOklabToOkhsv.js
  function convertOklabToOkhsv(lab2) {
    let l = lab2.l !== void 0 ? lab2.l : 0;
    let a = lab2.a !== void 0 ? lab2.a : 0;
    let b = lab2.b !== void 0 ? lab2.b : 0;
    let c2 = Math.sqrt(a * a + b * b);
    let a_ = c2 ? a / c2 : 1;
    let b_ = c2 ? b / c2 : 1;
    let [S_max, T] = get_ST_max(a_, b_);
    let S_0 = 0.5;
    let k4 = 1 - S_0 / S_max;
    let t = T / (c2 + l * T);
    let L_v = t * l;
    let C_v = t * c2;
    let L_vt = toe_inv(L_v);
    let C_vt = C_v * L_vt / L_v;
    let rgb_scale = convertOklabToLrgb_default({ l: L_vt, a: a_ * C_vt, b: b_ * C_vt });
    let scale_L = Math.cbrt(
      1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0)
    );
    l = l / scale_L;
    c2 = c2 / scale_L * toe(l) / l;
    l = toe(l);
    const ret = {
      mode: "okhsv",
      s: c2 ? (S_0 + T) * C_v / (T * S_0 + T * k4 * C_v) : 0,
      v: l ? l / L_v : 0
    };
    if (ret.s) {
      ret.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
    }
    if (lab2.alpha !== void 0) {
      ret.alpha = lab2.alpha;
    }
    return ret;
  }
  var init_convertOklabToOkhsv = __esm({
    "node_modules/culori/src/okhsv/convertOklabToOkhsv.js"() {
      init_normalizeHue();
      init_convertOklabToLrgb();
      init_helpers();
    }
  });

  // node_modules/culori/src/okhsv/convertOkhsvToOklab.js
  function convertOkhsvToOklab(hsv2) {
    const ret = { mode: "oklab" };
    if (hsv2.alpha !== void 0) {
      ret.alpha = hsv2.alpha;
    }
    const h = hsv2.h !== void 0 ? hsv2.h : 0;
    const s = hsv2.s !== void 0 ? hsv2.s : 0;
    const v = hsv2.v !== void 0 ? hsv2.v : 0;
    const a_ = Math.cos(h / 180 * Math.PI);
    const b_ = Math.sin(h / 180 * Math.PI);
    const [S_max, T] = get_ST_max(a_, b_);
    const S_0 = 0.5;
    const k4 = 1 - S_0 / S_max;
    const L_v = 1 - s * S_0 / (S_0 + T - T * k4 * s);
    const C_v = s * T * S_0 / (S_0 + T - T * k4 * s);
    const L_vt = toe_inv(L_v);
    const C_vt = C_v * L_vt / L_v;
    const rgb_scale = convertOklabToLrgb_default({
      l: L_vt,
      a: a_ * C_vt,
      b: b_ * C_vt
    });
    const scale_L = Math.cbrt(
      1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0)
    );
    const L_new = toe_inv(v * L_v);
    const C = C_v * L_new / L_v;
    ret.l = L_new * scale_L;
    ret.a = C * a_ * scale_L;
    ret.b = C * b_ * scale_L;
    return ret;
  }
  var init_convertOkhsvToOklab = __esm({
    "node_modules/culori/src/okhsv/convertOkhsvToOklab.js"() {
      init_convertOklabToLrgb();
      init_helpers();
    }
  });

  // node_modules/culori/src/okhsv/modeOkhsv.js
  var modeOkhsv, modeOkhsv_default;
  var init_modeOkhsv = __esm({
    "node_modules/culori/src/okhsv/modeOkhsv.js"() {
      init_convertRgbToOklab();
      init_convertOklabToRgb();
      init_convertOklabToOkhsv();
      init_convertOkhsvToOklab();
      init_definition8();
      modeOkhsv = __spreadProps(__spreadValues({}, definition_default8), {
        mode: "okhsv",
        channels: ["h", "s", "v", "alpha"],
        parse: ["--okhsv"],
        serialize: "--okhsv",
        fromMode: {
          oklab: convertOklabToOkhsv,
          rgb: (c2) => convertOklabToOkhsv(convertRgbToOklab_default(c2))
        },
        toMode: {
          oklab: convertOkhsvToOklab,
          rgb: (c2) => convertOklabToRgb_default(convertOkhsvToOklab(c2))
        }
      });
      modeOkhsv_default = modeOkhsv;
    }
  });

  // node_modules/culori/src/oklab/parseOklab.js
  function parseOklab(color, parsed) {
    if (!parsed || parsed[0] !== "oklab") {
      return void 0;
    }
    const res = { mode: "oklab" };
    const [, l, a, b, alpha] = parsed;
    if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) {
      return void 0;
    }
    if (l.type !== Tok.None) {
      res.l = Math.min(
        Math.max(0, l.type === Tok.Number ? l.value : l.value / 100),
        1
      );
    }
    if (a.type !== Tok.None) {
      res.a = a.type === Tok.Number ? a.value : a.value * 0.4 / 100;
    }
    if (b.type !== Tok.None) {
      res.b = b.type === Tok.Number ? b.value : b.value * 0.4 / 100;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseOklab_default;
  var init_parseOklab = __esm({
    "node_modules/culori/src/oklab/parseOklab.js"() {
      init_parse();
      parseOklab_default = parseOklab;
    }
  });

  // node_modules/culori/src/oklab/definition.js
  var definition20, definition_default20;
  var init_definition20 = __esm({
    "node_modules/culori/src/oklab/definition.js"() {
      init_convertOklabToLrgb();
      init_convertLrgbToOklab();
      init_convertRgbToOklab();
      init_convertOklabToRgb();
      init_parseOklab();
      init_definition13();
      definition20 = __spreadProps(__spreadValues({}, definition_default13), {
        mode: "oklab",
        toMode: {
          lrgb: convertOklabToLrgb_default,
          rgb: convertOklabToRgb_default
        },
        fromMode: {
          lrgb: convertLrgbToOklab_default,
          rgb: convertRgbToOklab_default
        },
        ranges: {
          l: [0, 1],
          a: [-0.4, 0.4],
          b: [-0.4, 0.4]
        },
        parse: [parseOklab_default],
        serialize: (c2) => `oklab(${c2.l !== void 0 ? c2.l : "none"} ${c2.a !== void 0 ? c2.a : "none"} ${c2.b !== void 0 ? c2.b : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`
      });
      definition_default20 = definition20;
    }
  });

  // node_modules/culori/src/oklch/parseOklch.js
  function parseOklch(color, parsed) {
    if (!parsed || parsed[0] !== "oklch") {
      return void 0;
    }
    const res = { mode: "oklch" };
    const [, l, c2, h, alpha] = parsed;
    if (l.type !== Tok.None) {
      if (l.type === Tok.Hue) {
        return void 0;
      }
      res.l = Math.min(
        Math.max(0, l.type === Tok.Number ? l.value : l.value / 100),
        1
      );
    }
    if (c2.type !== Tok.None) {
      res.c = Math.max(
        0,
        c2.type === Tok.Number ? c2.value : c2.value * 0.4 / 100
      );
    }
    if (h.type !== Tok.None) {
      if (h.type === Tok.Percentage) {
        return void 0;
      }
      res.h = h.value;
    }
    if (alpha.type !== Tok.None) {
      res.alpha = Math.min(
        1,
        Math.max(
          0,
          alpha.type === Tok.Number ? alpha.value : alpha.value / 100
        )
      );
    }
    return res;
  }
  var parseOklch_default;
  var init_parseOklch = __esm({
    "node_modules/culori/src/oklch/parseOklch.js"() {
      init_parse();
      parseOklch_default = parseOklch;
    }
  });

  // node_modules/culori/src/oklch/definition.js
  var definition21, definition_default21;
  var init_definition21 = __esm({
    "node_modules/culori/src/oklch/definition.js"() {
      init_definition15();
      init_convertLabToLch();
      init_convertLchToLab();
      init_convertOklabToRgb();
      init_convertRgbToOklab();
      init_parseOklch();
      definition21 = __spreadProps(__spreadValues({}, definition_default15), {
        mode: "oklch",
        toMode: {
          oklab: (c2) => convertLchToLab_default(c2, "oklab"),
          rgb: (c2) => convertOklabToRgb_default(convertLchToLab_default(c2, "oklab"))
        },
        fromMode: {
          rgb: (c2) => convertLabToLch_default(convertRgbToOklab_default(c2), "oklch"),
          oklab: (c2) => convertLabToLch_default(c2, "oklch")
        },
        parse: [parseOklch_default],
        serialize: (c2) => `oklch(${c2.l !== void 0 ? c2.l : "none"} ${c2.c !== void 0 ? c2.c : "none"} ${c2.h !== void 0 ? c2.h : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
        ranges: {
          l: [0, 1],
          c: [0, 0.4],
          h: [0, 360]
        }
      });
      definition_default21 = definition21;
    }
  });

  // node_modules/culori/src/p3/convertP3ToXyz65.js
  var convertP3ToXyz65, convertP3ToXyz65_default;
  var init_convertP3ToXyz65 = __esm({
    "node_modules/culori/src/p3/convertP3ToXyz65.js"() {
      init_convertRgbToLrgb();
      convertP3ToXyz65 = (rgb3) => {
        let { r, g, b, alpha } = convertRgbToLrgb_default(rgb3);
        let res = {
          mode: "xyz65",
          x: 0.486570948648216 * r + 0.265667693169093 * g + 0.1982172852343625 * b,
          y: 0.2289745640697487 * r + 0.6917385218365062 * g + 0.079286914093745 * b,
          z: 0 * r + 0.0451133818589026 * g + 1.043944368900976 * b
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertP3ToXyz65_default = convertP3ToXyz65;
    }
  });

  // node_modules/culori/src/p3/convertXyz65ToP3.js
  var convertXyz65ToP3, convertXyz65ToP3_default;
  var init_convertXyz65ToP3 = __esm({
    "node_modules/culori/src/p3/convertXyz65ToP3.js"() {
      init_convertLrgbToRgb();
      convertXyz65ToP3 = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = convertLrgbToRgb_default(
          {
            r: x * 2.4934969119414263 - y * 0.9313836179191242 - 0.402710784450717 * z,
            g: x * -0.8294889695615749 + y * 1.7626640603183465 + 0.0236246858419436 * z,
            b: x * 0.0358458302437845 - y * 0.0761723892680418 + 0.9568845240076871 * z
          },
          "p3"
        );
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToP3_default = convertXyz65ToP3;
    }
  });

  // node_modules/culori/src/p3/definition.js
  var definition22, definition_default22;
  var init_definition22 = __esm({
    "node_modules/culori/src/p3/definition.js"() {
      init_definition();
      init_convertP3ToXyz65();
      init_convertXyz65ToP3();
      init_convertRgbToXyz65();
      init_convertXyz65ToRgb();
      definition22 = __spreadProps(__spreadValues({}, definition_default), {
        mode: "p3",
        parse: ["display-p3"],
        serialize: "display-p3",
        fromMode: {
          rgb: (color) => convertXyz65ToP3_default(convertRgbToXyz65_default(color)),
          xyz65: convertXyz65ToP3_default
        },
        toMode: {
          rgb: (color) => convertXyz65ToRgb_default(convertP3ToXyz65_default(color)),
          xyz65: convertP3ToXyz65_default
        }
      });
      definition_default22 = definition22;
    }
  });

  // node_modules/culori/src/prophoto/convertXyz50ToProphoto.js
  var gamma2, convertXyz50ToProphoto, convertXyz50ToProphoto_default;
  var init_convertXyz50ToProphoto = __esm({
    "node_modules/culori/src/prophoto/convertXyz50ToProphoto.js"() {
      gamma2 = (v) => {
        let abs2 = Math.abs(v);
        if (abs2 >= 1 / 512) {
          return Math.sign(v) * Math.pow(abs2, 1 / 1.8);
        }
        return 16 * v;
      };
      convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = {
          mode: "prophoto",
          r: gamma2(
            x * 1.3457868816471585 - y * 0.2555720873797946 - 0.0511018649755453 * z
          ),
          g: gamma2(
            x * -0.5446307051249019 + y * 1.5082477428451466 + 0.0205274474364214 * z
          ),
          b: gamma2(x * 0 + y * 0 + 1.2119675456389452 * z)
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz50ToProphoto_default = convertXyz50ToProphoto;
    }
  });

  // node_modules/culori/src/prophoto/convertProphotoToXyz50.js
  var linearize2, convertProphotoToXyz50, convertProphotoToXyz50_default;
  var init_convertProphotoToXyz50 = __esm({
    "node_modules/culori/src/prophoto/convertProphotoToXyz50.js"() {
      linearize2 = (v = 0) => {
        let abs2 = Math.abs(v);
        if (abs2 >= 16 / 512) {
          return Math.sign(v) * Math.pow(abs2, 1.8);
        }
        return v / 16;
      };
      convertProphotoToXyz50 = (prophoto2) => {
        let r = linearize2(prophoto2.r);
        let g = linearize2(prophoto2.g);
        let b = linearize2(prophoto2.b);
        let res = {
          mode: "xyz50",
          x: 0.7977666449006423 * r + 0.1351812974005331 * g + 0.0313477341283922 * b,
          y: 0.2880748288194013 * r + 0.7118352342418731 * g + 899369387256e-16 * b,
          z: 0 * r + 0 * g + 0.8251046025104602 * b
        };
        if (prophoto2.alpha !== void 0) {
          res.alpha = prophoto2.alpha;
        }
        return res;
      };
      convertProphotoToXyz50_default = convertProphotoToXyz50;
    }
  });

  // node_modules/culori/src/prophoto/definition.js
  var definition23, definition_default23;
  var init_definition23 = __esm({
    "node_modules/culori/src/prophoto/definition.js"() {
      init_definition();
      init_convertXyz50ToProphoto();
      init_convertProphotoToXyz50();
      init_convertXyz50ToRgb();
      init_convertRgbToXyz50();
      definition23 = __spreadProps(__spreadValues({}, definition_default), {
        mode: "prophoto",
        parse: ["prophoto-rgb"],
        serialize: "prophoto-rgb",
        fromMode: {
          xyz50: convertXyz50ToProphoto_default,
          rgb: (color) => convertXyz50ToProphoto_default(convertRgbToXyz50_default(color))
        },
        toMode: {
          xyz50: convertProphotoToXyz50_default,
          rgb: (color) => convertXyz50ToRgb_default(convertProphotoToXyz50_default(color))
        }
      });
      definition_default23 = definition23;
    }
  });

  // node_modules/culori/src/rec2020/convertXyz65ToRec2020.js
  var \u03B1, \u03B2, gamma3, convertXyz65ToRec2020, convertXyz65ToRec2020_default;
  var init_convertXyz65ToRec2020 = __esm({
    "node_modules/culori/src/rec2020/convertXyz65ToRec2020.js"() {
      \u03B1 = 1.09929682680944;
      \u03B2 = 0.018053968510807;
      gamma3 = (v) => {
        const abs2 = Math.abs(v);
        if (abs2 > \u03B2) {
          return (Math.sign(v) || 1) * (\u03B1 * Math.pow(abs2, 0.45) - (\u03B1 - 1));
        }
        return 4.5 * v;
      };
      convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = {
          mode: "rec2020",
          r: gamma3(
            x * 1.7166511879712683 - y * 0.3556707837763925 - 0.2533662813736599 * z
          ),
          g: gamma3(
            x * -0.6666843518324893 + y * 1.6164812366349395 + 0.0157685458139111 * z
          ),
          b: gamma3(
            x * 0.0176398574453108 - y * 0.0427706132578085 + 0.9421031212354739 * z
          )
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToRec2020_default = convertXyz65ToRec2020;
    }
  });

  // node_modules/culori/src/rec2020/convertRec2020ToXyz65.js
  var \u03B12, \u03B22, linearize3, convertRec2020ToXyz65, convertRec2020ToXyz65_default;
  var init_convertRec2020ToXyz65 = __esm({
    "node_modules/culori/src/rec2020/convertRec2020ToXyz65.js"() {
      \u03B12 = 1.09929682680944;
      \u03B22 = 0.018053968510807;
      linearize3 = (v = 0) => {
        let abs2 = Math.abs(v);
        if (abs2 < \u03B22 * 4.5) {
          return v / 4.5;
        }
        return (Math.sign(v) || 1) * Math.pow((abs2 + \u03B12 - 1) / \u03B12, 1 / 0.45);
      };
      convertRec2020ToXyz65 = (rec20202) => {
        let r = linearize3(rec20202.r);
        let g = linearize3(rec20202.g);
        let b = linearize3(rec20202.b);
        let res = {
          mode: "xyz65",
          x: 0.6369580483012911 * r + 0.1446169035862083 * g + 0.1688809751641721 * b,
          y: 0.262700212011267 * r + 0.6779980715188708 * g + 0.059301716469862 * b,
          z: 0 * r + 0.0280726930490874 * g + 1.0609850577107909 * b
        };
        if (rec20202.alpha !== void 0) {
          res.alpha = rec20202.alpha;
        }
        return res;
      };
      convertRec2020ToXyz65_default = convertRec2020ToXyz65;
    }
  });

  // node_modules/culori/src/rec2020/definition.js
  var definition24, definition_default24;
  var init_definition24 = __esm({
    "node_modules/culori/src/rec2020/definition.js"() {
      init_definition();
      init_convertXyz65ToRec2020();
      init_convertRec2020ToXyz65();
      init_convertRgbToXyz65();
      init_convertXyz65ToRgb();
      definition24 = __spreadProps(__spreadValues({}, definition_default), {
        mode: "rec2020",
        fromMode: {
          xyz65: convertXyz65ToRec2020_default,
          rgb: (color) => convertXyz65ToRec2020_default(convertRgbToXyz65_default(color))
        },
        toMode: {
          xyz65: convertRec2020ToXyz65_default,
          rgb: (color) => convertXyz65ToRgb_default(convertRec2020ToXyz65_default(color))
        },
        parse: ["rec2020"],
        serialize: "rec2020"
      });
      definition_default24 = definition24;
    }
  });

  // node_modules/culori/src/xyb/constants.js
  var bias, bias_cbrt;
  var init_constants7 = __esm({
    "node_modules/culori/src/xyb/constants.js"() {
      bias = 0.0037930732552754493;
      bias_cbrt = Math.cbrt(bias);
    }
  });

  // node_modules/culori/src/xyb/convertRgbToXyb.js
  var transfer, convertRgbToXyb, convertRgbToXyb_default;
  var init_convertRgbToXyb = __esm({
    "node_modules/culori/src/xyb/convertRgbToXyb.js"() {
      init_convertRgbToLrgb();
      init_constants7();
      transfer = (v) => Math.cbrt(v) - bias_cbrt;
      convertRgbToXyb = (color) => {
        const { r, g, b, alpha } = convertRgbToLrgb_default(color);
        const l = transfer(0.3 * r + 0.622 * g + 0.078 * b + bias);
        const m = transfer(0.23 * r + 0.692 * g + 0.078 * b + bias);
        const s = transfer(
          0.2434226892454782 * r + 0.2047674442449682 * g + 0.5518098665095535 * b + bias
        );
        const res = {
          mode: "xyb",
          x: (l - m) / 2,
          y: (l + m) / 2,
          /* Apply default chroma from luma (subtract Y from B) */
          b: s - (l + m) / 2
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertRgbToXyb_default = convertRgbToXyb;
    }
  });

  // node_modules/culori/src/xyb/convertXybToRgb.js
  var transfer2, convertXybToRgb, convertXybToRgb_default;
  var init_convertXybToRgb = __esm({
    "node_modules/culori/src/xyb/convertXybToRgb.js"() {
      init_convertLrgbToRgb();
      init_constants7();
      transfer2 = (v) => Math.pow(v + bias_cbrt, 3);
      convertXybToRgb = ({ x, y, b, alpha }) => {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (b === void 0) b = 0;
        const l = transfer2(x + y) - bias;
        const m = transfer2(y - x) - bias;
        const s = transfer2(b + y) - bias;
        const res = convertLrgbToRgb_default({
          r: 11.031566904639861 * l - 9.866943908131562 * m - 0.16462299650829934 * s,
          g: -3.2541473810744237 * l + 4.418770377582723 * m - 0.16462299650829934 * s,
          b: -3.6588512867136815 * l + 2.7129230459360922 * m + 1.9459282407775895 * s
        });
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertXybToRgb_default = convertXybToRgb;
    }
  });

  // node_modules/culori/src/xyb/definition.js
  var definition25, definition_default25;
  var init_definition25 = __esm({
    "node_modules/culori/src/xyb/definition.js"() {
      init_linear();
      init_alpha();
      init_convertRgbToXyb();
      init_convertXybToRgb();
      definition25 = {
        mode: "xyb",
        channels: ["x", "y", "b", "alpha"],
        parse: ["--xyb"],
        serialize: "--xyb",
        toMode: {
          rgb: convertXybToRgb_default
        },
        fromMode: {
          rgb: convertRgbToXyb_default
        },
        ranges: {
          x: [-0.0154, 0.0281],
          y: [0, 0.8453],
          b: [-0.2778, 0.388]
        },
        interpolate: {
          x: interpolatorLinear,
          y: interpolatorLinear,
          b: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default25 = definition25;
    }
  });

  // node_modules/culori/src/xyz50/definition.js
  var definition26, definition_default26;
  var init_definition26 = __esm({
    "node_modules/culori/src/xyz50/definition.js"() {
      init_convertXyz50ToRgb();
      init_convertXyz50ToLab();
      init_convertRgbToXyz50();
      init_convertLabToXyz50();
      init_linear();
      init_alpha();
      definition26 = {
        mode: "xyz50",
        parse: ["xyz-d50"],
        serialize: "xyz-d50",
        toMode: {
          rgb: convertXyz50ToRgb_default,
          lab: convertXyz50ToLab_default
        },
        fromMode: {
          rgb: convertRgbToXyz50_default,
          lab: convertLabToXyz50_default
        },
        channels: ["x", "y", "z", "alpha"],
        ranges: {
          x: [0, 0.964],
          y: [0, 0.999],
          z: [0, 0.825]
        },
        interpolate: {
          x: interpolatorLinear,
          y: interpolatorLinear,
          z: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default26 = definition26;
    }
  });

  // node_modules/culori/src/xyz65/convertXyz65ToXyz50.js
  var convertXyz65ToXyz50, convertXyz65ToXyz50_default;
  var init_convertXyz65ToXyz50 = __esm({
    "node_modules/culori/src/xyz65/convertXyz65ToXyz50.js"() {
      convertXyz65ToXyz50 = (xyz652) => {
        let { x, y, z, alpha } = xyz652;
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = {
          mode: "xyz50",
          x: 1.0479298208405488 * x + 0.0229467933410191 * y - 0.0501922295431356 * z,
          y: 0.0296278156881593 * x + 0.990434484573249 * y - 0.0170738250293851 * z,
          z: -0.0092430581525912 * x + 0.0150551448965779 * y + 0.7518742899580008 * z
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz65ToXyz50_default = convertXyz65ToXyz50;
    }
  });

  // node_modules/culori/src/xyz65/convertXyz50ToXyz65.js
  var convertXyz50ToXyz65, convertXyz50ToXyz65_default;
  var init_convertXyz50ToXyz65 = __esm({
    "node_modules/culori/src/xyz65/convertXyz50ToXyz65.js"() {
      convertXyz50ToXyz65 = (xyz502) => {
        let { x, y, z, alpha } = xyz502;
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        let res = {
          mode: "xyz65",
          x: 0.9554734527042182 * x - 0.0230985368742614 * y + 0.0632593086610217 * z,
          y: -0.0283697069632081 * x + 1.0099954580058226 * y + 0.021041398966943 * z,
          z: 0.0123140016883199 * x - 0.0205076964334779 * y + 1.3303659366080753 * z
        };
        if (alpha !== void 0) {
          res.alpha = alpha;
        }
        return res;
      };
      convertXyz50ToXyz65_default = convertXyz50ToXyz65;
    }
  });

  // node_modules/culori/src/xyz65/definition.js
  var definition27, definition_default27;
  var init_definition27 = __esm({
    "node_modules/culori/src/xyz65/definition.js"() {
      init_convertXyz65ToRgb();
      init_convertRgbToXyz65();
      init_convertXyz65ToXyz50();
      init_convertXyz50ToXyz65();
      init_linear();
      init_alpha();
      definition27 = {
        mode: "xyz65",
        toMode: {
          rgb: convertXyz65ToRgb_default,
          xyz50: convertXyz65ToXyz50_default
        },
        fromMode: {
          rgb: convertRgbToXyz65_default,
          xyz50: convertXyz50ToXyz65_default
        },
        ranges: {
          x: [0, 0.95],
          y: [0, 1],
          z: [0, 1.088]
        },
        channels: ["x", "y", "z", "alpha"],
        parse: ["xyz", "xyz-d65"],
        serialize: "xyz-d65",
        interpolate: {
          x: interpolatorLinear,
          y: interpolatorLinear,
          z: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default27 = definition27;
    }
  });

  // node_modules/culori/src/yiq/convertRgbToYiq.js
  var convertRgbToYiq, convertRgbToYiq_default;
  var init_convertRgbToYiq = __esm({
    "node_modules/culori/src/yiq/convertRgbToYiq.js"() {
      convertRgbToYiq = ({ r, g, b, alpha }) => {
        if (r === void 0) r = 0;
        if (g === void 0) g = 0;
        if (b === void 0) b = 0;
        const res = {
          mode: "yiq",
          y: 0.29889531 * r + 0.58662247 * g + 0.11448223 * b,
          i: 0.59597799 * r - 0.2741761 * g - 0.32180189 * b,
          q: 0.21147017 * r - 0.52261711 * g + 0.31114694 * b
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertRgbToYiq_default = convertRgbToYiq;
    }
  });

  // node_modules/culori/src/yiq/convertYiqToRgb.js
  var convertYiqToRgb, convertYiqToRgb_default;
  var init_convertYiqToRgb = __esm({
    "node_modules/culori/src/yiq/convertYiqToRgb.js"() {
      convertYiqToRgb = ({ y, i, q, alpha }) => {
        if (y === void 0) y = 0;
        if (i === void 0) i = 0;
        if (q === void 0) q = 0;
        const res = {
          mode: "rgb",
          r: y + 0.95608445 * i + 0.6208885 * q,
          g: y - 0.27137664 * i - 0.6486059 * q,
          b: y - 1.10561724 * i + 1.70250126 * q
        };
        if (alpha !== void 0) res.alpha = alpha;
        return res;
      };
      convertYiqToRgb_default = convertYiqToRgb;
    }
  });

  // node_modules/culori/src/yiq/definition.js
  var definition28, definition_default28;
  var init_definition28 = __esm({
    "node_modules/culori/src/yiq/definition.js"() {
      init_convertRgbToYiq();
      init_convertYiqToRgb();
      init_linear();
      init_alpha();
      definition28 = {
        mode: "yiq",
        toMode: {
          rgb: convertYiqToRgb_default
        },
        fromMode: {
          rgb: convertRgbToYiq_default
        },
        channels: ["y", "i", "q", "alpha"],
        parse: ["--yiq"],
        serialize: "--yiq",
        ranges: {
          i: [-0.595, 0.595],
          q: [-0.522, 0.522]
        },
        interpolate: {
          y: interpolatorLinear,
          i: interpolatorLinear,
          q: interpolatorLinear,
          alpha: { use: interpolatorLinear, fixup: fixupAlpha }
        }
      };
      definition_default28 = definition28;
    }
  });

  // node_modules/culori/src/clamp.js
  function displayable(color) {
    return inrange_rgb(rgb(color));
  }
  function clampRgb(color) {
    color = prepare_default(color);
    if (color === void 0 || displayable(color)) return color;
    let conv = converter_default(color.mode);
    return conv(to_displayable_srgb(color));
  }
  var rgb, fixup_rgb, to_displayable_srgb, inrange_rgb;
  var init_clamp = __esm({
    "node_modules/culori/src/clamp.js"() {
      init_converter();
      init_prepare();
      rgb = converter_default("rgb");
      fixup_rgb = (c2) => {
        const res = {
          mode: c2.mode,
          r: Math.max(0, Math.min(c2.r !== void 0 ? c2.r : 0, 1)),
          g: Math.max(0, Math.min(c2.g !== void 0 ? c2.g : 0, 1)),
          b: Math.max(0, Math.min(c2.b !== void 0 ? c2.b : 0, 1))
        };
        if (c2.alpha !== void 0) {
          res.alpha = c2.alpha;
        }
        return res;
      };
      to_displayable_srgb = (c2) => fixup_rgb(rgb(c2));
      inrange_rgb = (c2) => {
        return c2 !== void 0 && (c2.r === void 0 || c2.r >= 0 && c2.r <= 1) && (c2.g === void 0 || c2.g >= 0 && c2.g <= 1) && (c2.b === void 0 || c2.b >= 0 && c2.b <= 1);
      };
    }
  });

  // node_modules/culori/src/index.js
  var a98, cubehelix, dlab, dlch, hsi, hsl, hsv, hwb, itp, jab, jch, lab, lab65, lch, lch65, lchuv, lrgb, luv, okhsl, okhsv, oklab, oklch, p3, prophoto, rec2020, rgb2, xyb, xyz50, xyz65, yiq;
  var init_src = __esm({
    "node_modules/culori/src/index.js"() {
      init_definition2();
      init_definition3();
      init_definition4();
      init_definition5();
      init_definition6();
      init_definition7();
      init_definition8();
      init_definition9();
      init_definition10();
      init_definition11();
      init_definition12();
      init_definition13();
      init_definition14();
      init_definition15();
      init_definition16();
      init_definition17();
      init_definition18();
      init_definition19();
      init_modeOkhsl();
      init_modeOkhsv();
      init_definition20();
      init_definition21();
      init_definition22();
      init_definition23();
      init_definition24();
      init_definition();
      init_definition25();
      init_definition26();
      init_definition27();
      init_definition28();
      init_modes();
      init_converter();
      init_clamp();
      init_parse();
      a98 = useMode(definition_default2);
      cubehelix = useMode(definition_default3);
      dlab = useMode(definition_default4);
      dlch = useMode(definition_default5);
      hsi = useMode(definition_default6);
      hsl = useMode(definition_default7);
      hsv = useMode(definition_default8);
      hwb = useMode(definition_default9);
      itp = useMode(definition_default10);
      jab = useMode(definition_default11);
      jch = useMode(definition_default12);
      lab = useMode(definition_default13);
      lab65 = useMode(definition_default14);
      lch = useMode(definition_default15);
      lch65 = useMode(definition_default16);
      lchuv = useMode(definition_default17);
      lrgb = useMode(definition_default18);
      luv = useMode(definition_default19);
      okhsl = useMode(modeOkhsl_default);
      okhsv = useMode(modeOkhsv_default);
      oklab = useMode(definition_default20);
      oklch = useMode(definition_default21);
      p3 = useMode(definition_default22);
      prophoto = useMode(definition_default23);
      rec2020 = useMode(definition_default24);
      rgb2 = useMode(definition_default);
      xyb = useMode(definition_default25);
      xyz50 = useMode(definition_default26);
      xyz65 = useMode(definition_default27);
      yiq = useMode(definition_default28);
    }
  });

  // src/code.ts
  var require_code = __commonJS({
    "src/code.ts"() {
      init_src();
      var VARIABLE_SCOPES = [
        "TEXT_CONTENT",
        "CORNER_RADIUS",
        "WIDTH_HEIGHT",
        "GAP",
        "ALL_FILLS",
        "FRAME_FILL",
        "SHAPE_FILL",
        "TEXT_FILL",
        "STROKE_COLOR",
        "STROKE_FLOAT",
        "EFFECT_FLOAT",
        "EFFECT_COLOR",
        "OPACITY",
        "FONT_FAMILY",
        "FONT_STYLE",
        "FONT_WEIGHT",
        "FONT_SIZE",
        "LINE_HEIGHT",
        "LETTER_SPACING",
        "PARAGRAPH_SPACING",
        "PARAGRAPH_INDENT"
      ];
      var SCOPE_KEYWORDS = {
        TEXT_CONTENT: ["TEXT", "CONTENT", "STRING"],
        CORNER_RADIUS: ["RADIUS", "BORDER_RADIUS", "ROUNDNESS"],
        WIDTH_HEIGHT: ["WIDTH", "HEIGHT", "DIMENSION"],
        GAP: ["GAP", "SPACING", "SPACE"],
        ALL_FILLS: ["FILL", "BACKGROUND"],
        FRAME_FILL: ["FRAME_FILL"],
        SHAPE_FILL: ["SHAPE_FILL"],
        TEXT_FILL: ["TEXT_FILL", "FONT_COLOR"],
        STROKE_COLOR: ["STROKE_COLOR", "BORDER_COLOR"],
        STROKE_FLOAT: ["STROKE_WIDTH", "BORDER_WIDTH"],
        EFFECT_FLOAT: ["BLUR", "SHADOW_SPREAD", "EFFECT_SIZE"],
        EFFECT_COLOR: ["SHADOW_COLOR", "GLOW_COLOR"],
        OPACITY: ["OPACITY", "ALPHA", "TRANSPARENCY"],
        FONT_FAMILY: ["FONT", "TYPEFACE", "FONT_FAMILY"],
        FONT_STYLE: ["STYLE", "FONT_STYLE"],
        FONT_WEIGHT: ["FONT_WEIGHT", "WEIGHT"],
        FONT_SIZE: ["FONT_SIZE", "TEXT_SIZE"],
        LINE_HEIGHT: ["LINE_HEIGHT", "LEADING"],
        LETTER_SPACING: ["LETTER_SPACING", "TRACKING"],
        PARAGRAPH_SPACING: ["PARAGRAPH_SPACING", "PARAGRAPH_GAP"],
        PARAGRAPH_INDENT: ["PARAGRAPH_INDENT", "INDENTATION"]
      };
      figma.showUI(__html__, { themeColors: true, width: 400, height: 480 });
      figma.ui.postMessage({
        type: "init",
        collections: figma.variables.getLocalVariableCollections().map((c2) => c2.name),
        scopes: VARIABLE_SCOPES
      });
      function detectVariableScopes(name) {
        const normalized = name.replace(/[^a-zA-Z0-9]+/g, "_").toUpperCase();
        const scopes = VARIABLE_SCOPES.filter((scope) => normalized.includes(scope));
        for (const [scope, keywords] of Object.entries(SCOPE_KEYWORDS)) {
          const s = scope;
          if (scopes.includes(s)) continue;
          for (const kw of keywords) {
            if (normalized.includes(kw.replace(/[^A-Z0-9]+/g, "_").toUpperCase())) {
              scopes.push(s);
              break;
            }
          }
        }
        return scopes;
      }
      function toFigmaName(name) {
        const parts = name.split("-");
        if (parts.length > 1) {
          const last = parts.pop();
          return parts.join("/") + "/" + last;
        }
        return name;
      }
      function getGroup(name) {
        const figmaName = toFigmaName(name);
        const idx = figmaName.lastIndexOf("/");
        return idx === -1 ? "" : figmaName.slice(0, idx);
      }
      function parseCssVariables(css) {
        var _a;
        const result = {};
        css = css.replace(/\/\*[\s\S]*?\*\//g, "");
        const re = /--([a-zA-Z0-9\-_]+)\s*:\s*([^;]+);/g;
        let m;
        const toRGB = converter_default("rgb");
        while ((m = re.exec(css)) !== null) {
          const name = m[1];
          const valueStr = m[2].trim();
          const aliasMatch = valueStr.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
          if (aliasMatch) {
            result[name] = { type: "ALIAS", value: aliasMatch[1] };
            continue;
          }
          const numberMatch = valueStr.match(/^[-+]?(?:\d*\.)?\d+$/);
          if (numberMatch) {
            const num3 = parseFloat(valueStr);
            result[name] = { type: "FLOAT", value: num3 };
            continue;
          }
          const unitMatch = valueStr.match(/^(-?\d*\.?\d+)([a-zA-Z%]+)$/);
          if (unitMatch) {
            let num3 = parseFloat(unitMatch[1]);
            const unit = unitMatch[2].toLowerCase();
            if (unit === "rem") {
              num3 *= 16;
            }
            result[name] = { type: "FLOAT", value: num3 };
            continue;
          }
          const color = parse_default(valueStr);
          if (color) {
            const rgb3 = clampRgb(toRGB(color));
            result[name] = {
              type: "COLOR",
              value: { r: rgb3.r, g: rgb3.g, b: rgb3.b, a: (_a = rgb3.alpha) != null ? _a : 1 }
            };
            continue;
          }
        }
        return result;
      }
      figma.ui.onmessage = async (msg) => {
        var _a;
        if (msg.type === "preview-css") {
          const vars = parseCssVariables(msg.css);
          const preview = Object.entries(vars).map(([name, data]) => ({
            name,
            type: data.type,
            value: data.value,
            scopes: detectVariableScopes(name)
          }));
          figma.ui.postMessage({ type: "preview-data", preview });
          return;
        }
        if (msg.type === "import-css") {
          const vars = parseCssVariables(msg.css);
          const collectionName = msg.collectionName;
          const itemScopes = msg.itemScopes;
          const groupScopes = msg.groupScopes;
          let collection = figma.variables.getLocalVariableCollections().find((c2) => c2.name === collectionName);
          if (!collection) {
            collection = figma.variables.createVariableCollection(collectionName);
          }
          const modeId = collection.modes[0].modeId;
          const getScopesForName = (name) => {
            if (itemScopes && itemScopes[name]) {
              return [itemScopes[name]];
            }
            const group = getGroup(name);
            if (groupScopes && groupScopes[group]) {
              return [groupScopes[group]];
            }
            return detectVariableScopes(name);
          };
          const allVars = await figma.variables.getLocalVariablesAsync();
          const nameMap = /* @__PURE__ */ new Map();
          for (const v of allVars) {
            nameMap.set(v.name, v);
            const css = (_a = v.codeSyntax) == null ? void 0 : _a.WEB;
            const match = css == null ? void 0 : css.match(/^var\(--([a-zA-Z0-9\-_]+)\)$/);
            if (match) {
              nameMap.set(match[1], v);
            }
          }
          const created = {};
          let added = 0;
          let updated = 0;
          for (const [cssName, data] of Object.entries(vars)) {
            if (data.type === "ALIAS") continue;
            const figmaName = toFigmaName(cssName);
            let variable = collection.variableIds.map((id) => figma.variables.getVariableById(id)).find((v) => v.name === figmaName);
            if (!variable) {
              variable = figma.variables.createVariable(figmaName, collection.id, data.type);
              added++;
            } else {
              updated++;
            }
            variable.setValueForMode(modeId, data.value);
            variable.setVariableCodeSyntax("WEB", `var(--${cssName})`);
            const scopes = getScopesForName(cssName);
            if (scopes.length) {
              variable.scopes = scopes;
            }
            created[cssName] = variable;
            nameMap.set(cssName, variable);
          }
          let aliasEntries = Object.entries(vars).filter(([, d]) => d.type === "ALIAS");
          let generations = aliasEntries.length;
          while (aliasEntries.length && generations > 0) {
            const remaining = [];
            for (const [cssName, data] of aliasEntries) {
              const target = nameMap.get(data.value);
              if (target) {
                const figmaName = toFigmaName(cssName);
                let variable = collection.variableIds.map((id) => figma.variables.getVariableById(id)).find((v) => v.name === figmaName);
                if (!variable) {
                  variable = figma.variables.createVariable(figmaName, collection.id, target.resolvedType);
                  added++;
                } else {
                  updated++;
                }
                const alias = figma.variables.createVariableAlias(target);
                variable.setValueForMode(modeId, alias);
                variable.setVariableCodeSyntax("WEB", `var(--${cssName})`);
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
          let message = "";
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
    }
  });
  require_code();
})();
