# CSS Variables Importer Figma Plugin

This plugin allows you to paste CSS variable definitions and automatically create Figma variables in your file. Both color values (including all CSS color functions, even relative color syntax such as `oklch(from var(--base) 0.9 0.1 h)`) and numeric values are supported. Values with units are imported as numbers, with `rem` values converted to pixels (16px per `1rem`).

Variables using the `light-dark()` CSS function will create separate "light" and "dark" mode values in Figma.

Variables grouped under data attributes like `[data-theme="colorful"]` or `[data-mode="dark"]` create mode values based on the attribute's value. For example:

```css
[data-theme="colorful"] {
  --color-action-complementary: #E2E9ED;
}
```

This sets `color-action-complementary` for a Figma mode named **colorful**.

## Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Build the plugin:
   ```sh
   npm run build
   ```
3. In Figma, select **Import Plugin from Manifest...** and choose `manifest.json`.

Paste CSS variables like:

```css
:root {
  --primary: oklch(60% 0.2 200);
  --radius: 4;
}
```

The plugin will create variables named `primary` and `radius` inside a collection called **CSS Variables**.
