# Shark Eats Fish

A touch-controlled mobile mini-game built with Expo & React Native — drag a shark around the screen to eat fish.

## What is this

A single-screen game where the player drags a shark emoji across the screen using touch gestures. Fish spawn randomly over time; when the shark touches a fish, the fish is eaten and the score increases. Built as a lightweight portfolio project to demonstrate gesture handling, Reanimated animations, and clean component structure in React Native.

## Features

- Drag-to-move shark using pan gesture with 60fps Reanimated animations
- Random fish spawning at fixed intervals, capped at 8 on screen
- Collision detection via `useAnimatedReaction` running on the UI thread
- Live score displayed at the top of the screen
- All entities clamped to screen bounds
- Ocean-blue background

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

The app can be opened in Expo Go (iOS/Android), an iOS simulator, an Android emulator, or a web browser (press `w` in the Expo CLI).

## Project structure

```
App.tsx                  # Root component: game loop, collision logic, state
components/
├── Shark.tsx            # Draggable shark (Gesture.Pan + Reanimated)
├── Fish.tsx             # Individual fish emoji display
└── Score.tsx            # Score overlay
constants/
└── game.ts              # Game constants (sizes, spawn rate, max count)
types/
└── game.ts              # TypeScript interfaces (Fish)
```

## License

MIT — see [LICENSE](./LICENSE).
