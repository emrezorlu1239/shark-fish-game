import { useEffect } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { SHARK_SIZE } from '../constants/game';
import SharkShape from './SharkShape';
import type { SharedValue } from 'react-native-reanimated';

interface SharkProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
  screenWidth: number;
  screenHeight: number;
}

export default function Shark({ x, y, screenWidth, screenHeight }: SharkProps) {
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const flipScale = useSharedValue(1);
  const tailWag = useSharedValue(-18);

  useEffect(() => {
    tailWag.value = withRepeat(
      withTiming(18, { duration: 800, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
  }, []);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = x.value;
      startY.value = y.value;
    })
    .onUpdate((e) => {
      if (e.velocityX > 0) {
        flipScale.value = withTiming(1, { duration: 200 });
      } else if (e.velocityX < 0) {
        flipScale.value = withTiming(-1, { duration: 200 });
      }
      x.value = Math.min(
        Math.max(0, startX.value + e.translationX),
        screenWidth - SHARK_SIZE,
      );
      y.value = Math.min(
        Math.max(0, startY.value + e.translationY),
        screenHeight - SHARK_SIZE,
      );
    });

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: 0,
    top: 0,
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { scaleX: flipScale.value },
    ],
    zIndex: 10,
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.shark, animatedStyle]}>
        <SharkShape tailRotation={tailWag} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  shark: {
    width: SHARK_SIZE,
    height: SHARK_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
