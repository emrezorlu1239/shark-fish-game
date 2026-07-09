import { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedReaction, runOnJS } from 'react-native-reanimated';

import Shark from './components/Shark';
import Fish from './components/Fish';
import Score from './components/Score';
import { Fish as FishType } from './types/game';
import { SHARK_SIZE, FISH_SIZE, MAX_FISH_COUNT, SPAWN_INTERVAL_MS } from './constants/game';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function App() {
  const [fish, setFish] = useState<FishType[]>([]);
  const [score, setScore] = useState(0);

  const sharkX = useSharedValue(SCREEN_WIDTH / 2 - SHARK_SIZE / 2);
  const sharkY = useSharedValue(SCREEN_HEIGHT / 2 - SHARK_SIZE / 2);
  const fishPositions = useSharedValue<FishType[]>([]);

  useEffect(() => {
    fishPositions.value = fish;
  }, [fish]);

  const handleEat = useCallback((fishId: string) => {
    setFish((prev) => prev.filter((f) => f.id !== fishId));
    setScore((prev) => prev + 1);
  }, []);

  useAnimatedReaction(
    () => ({
      sx: sharkX.value,
      sy: sharkY.value,
      fish: fishPositions.value,
    }),
    (current) => {
      const sharkCX = current.sx + SHARK_SIZE / 2;
      const sharkCY = current.sy + SHARK_SIZE / 2;
      const arr = current.fish;
      for (let i = 0; i < arr.length; i++) {
        const f = arr[i];
        const fishCX = f.x + FISH_SIZE / 2;
        const fishCY = f.y + FISH_SIZE / 2;
        const dx = sharkCX - fishCX;
        const dy = sharkCY - fishCY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < (SHARK_SIZE + FISH_SIZE) / 2) {
          const next = [...arr];
          next.splice(i, 1);
          fishPositions.value = next;
          runOnJS(handleEat)(f.id);
          break;
        }
      }
    },
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFish((prev) => {
        if (prev.length >= MAX_FISH_COUNT) return prev;
        const id = Date.now().toString() + Math.random().toString();
        const x = Math.random() * (SCREEN_WIDTH - FISH_SIZE);
        const y = Math.random() * (SCREEN_HEIGHT - FISH_SIZE);
        return [...prev, { id, x, y }];
      });
    }, SPAWN_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.gameArea}>
        {fish.map((f) => (
          <Fish key={f.id} x={f.x} y={f.y} />
        ))}
        <Shark
          x={sharkX}
          y={sharkY}
          screenWidth={SCREEN_WIDTH}
          screenHeight={SCREEN_HEIGHT}
        />
        <Score score={score} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameArea: {
    flex: 1,
    backgroundColor: '#0a4a7a',
  },
});
