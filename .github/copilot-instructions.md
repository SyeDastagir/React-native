# Repo: learnRN — Copilot Instructions

Purpose: Give AI coding agents a concise, actionable summary of project structure, dev workflows, and project-specific conventions so they can make useful edits quickly.

## Quick facts

- Platform: Expo React Native (JS/TS) app
- Entry points: `index.ts` -> `App.tsx`
- Screens folder: `screens/` (each screen is a default-exported functional component)
- TypeScript: `tsconfig.json` extends `expo/tsconfig.base` with `strict: true`
- Scripts: `npm start` (Expo), `npm run ios|android|web` (via Expo)
- Important files: `app.json` (expo config and assets), `package.json` (expo version ~54), `assets/` (images)

## Architecture & patterns (what to expect)

- Minimal single-screen app: `App.tsx` currently mounts `HomeScreen` directly. Other screens (`ProfileScreen`, `SearchScreen`) are present but not wired up.
- Screen components live in `screens/` and follow the pattern:
  - Default export of a small functional component
  - Uses `StyleSheet.create({})` at the bottom of the file
  - Example: `screens/HomeScreen.tsx` and `screens/ProfileScreen.tsx`
- Entry registration is handled in `index.ts` using `registerRootComponent(App)` (Expo convention)
- App configuration (icons, splash, platform settings) is in `app.json` (note: `newArchEnabled: true` is set)

## Developer workflows (concrete commands)

- Start the dev server: `npm start` (runs `expo start`)
- Run on Android emulator or connected device: `npm run android` (runs `expo start --android`)
- Run on iOS simulator: `npm run ios` (runs `expo start --ios`)
- Web: `npm run web` (runs `expo start --web`)
- TypeScript: Type checking will enforce `strict` rules; run `tsc --noEmit` if needed for type-only checks

## Conventions & guardrails for AI edits

- Keep TypeScript `strict` semantics in mind; prefer typed changes and add types where missing.
- Prefer modifying or adding screens in `screens/`; maintain the default-export functional component pattern
  - Screens should export a **default** component (e.g., `export default HomeScreen`). Some files may also include a named export for compatibility. If you see "Element type is invalid" errors, check for accidental named imports (`import { HomeScreen } from './screens/HomeScreen'`) and prefer the default import (`import HomeScreen from './screens/HomeScreen'`).
- Avoid changing `app.json` platform settings without explicit user confirmation (icon/splash and `newArchEnabled` may affect native behavior)
- Do not introduce global style mutations — keep styles localized to components using `StyleSheet.create`
- If adding navigation, add it conservatively and ensure you update `App.tsx` to import and render the navigator (there is currently no navigation stack in the repo)

## Notable findings & quick fixes (examples you can safely suggest)

- `screens/SearchScreen.tsx` currently renders `<Text>HomeScreen</Text>` — likely a copy/paste mistake; should read `SearchScreen`.
- There are no tests or CI configuration files visible—avoid adding sweeping CI changes without guidance.

## Editing examples

- Run dev server: `npm start` (verify change in Expo dev tools)
- Add a new screen:
  1. Create `screens/MyNewScreen.tsx` following the existing pattern (default-export functional component + `StyleSheet.create`)
  2. Import and use it in `App.tsx` or wire it into a navigator

## When to ask for clarification

- Before adding native modules or changing `app.json`/`expo` versions
- Before adding a global styling system or changing the component export conventions

---

If any of these sections are unclear or you want more details (navigation conventions, testing setup, or CI suggestions), tell me which part to expand and I will iterate. ✅
