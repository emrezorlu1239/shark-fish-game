# 🦈 Shark Eats Fish

A touch-controlled mobile mini-game built with Expo & React Native — drag a shark around the screen and gobble up fish before they swim away.

## What is this

A simple, single-screen game: you drag a shark emoji across the screen with your finger, fish pop up randomly over time, and every fish your shark touches gets eaten (score +1). Built as a lightweight portfolio project to show off gesture handling, Reanimated animations, and a clean component structure in React Native — no bloat, no unnecessary dependencies, just a fun little interaction done right.

## Features

- 🖐️ Drag-to-move shark powered by pan gestures and 60fps Reanimated animations
- 🐟 Fish spawn randomly over time, capped at 8 on screen so it never gets chaotic
- 💥 Collision detection runs entirely on the UI thread via `useAnimatedReaction` — no janky JS-thread polling
- 🏆 Live score tracker at the top of the screen
- 📱 Everything stays clamped inside the screen bounds, no matter how wildly you drag
- 🌊 Ocean-blue background to set the mood

## Tech Stack

- [Expo](https://expo.dev) (managed workflow, SDK 57)
- [React Native](https://reactnative.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) — drag gesture
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) — shared values and animated styles

## Preview

<!-- TODO: Replace with an actual screen recording or screenshot -->
<img src="./assets/preview.gif" width="300" alt="Gameplay preview" />

## How to run locally

```bash
git clone https://github.com/emrezorlu1239/shark-fish-game.git
cd shark-fish-game
npm install
npx expo start
```

Open it however you like — Expo Go on iOS/Android, an iOS simulator, an Android emulator, or right in your browser (just press `w` in the Expo CLI).

## Project structure
App.tsx                  # Root component: game loop, collision logic, state
components/
├── Shark.tsx            # Draggable shark (Gesture.Pan + Reanimated)
├── Fish.tsx             # Individual fish emoji display
└── Score.tsx            # Score overlay
constants/
└── game.ts              # Game constants (sizes, spawn rate, max count)
types/
└── game.ts              # TypeScript interfaces (Fish)

## License

MIT — see [LICENSE](./LICENSE).
