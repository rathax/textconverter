# [textconverter.net](https://www.textconverter.net)

This is a simple app built with Vue + Tailwind + vite + vite-ssg - vite-pwa that convert plain text (letters, sometimes numbers) to obscure characters from Unicode. The output can easily be copy and pasted.

**Key Features**
* Wide Range of Characters: Choose from an extensive collection of Unicode characters an symbols to personalize your text
* Easy-to-Use Interface: This mobile friendly interface ensures a seamless and hassle-free text conversion experience, even for beginners.
* Instant Preview: See the transformation in real-time with our instant preview feature, allowing you to fine-tune your fancy text before sharing it with the world.
* Copy and Paste Convenience: Copy your converted text with a single click and paste it directly into your favorite platforms, saving you time and effort.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# to buil the SSG bundle
npm run build
