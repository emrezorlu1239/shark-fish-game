import Svg, { Path, G, Circle, Ellipse } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

const AnimatedG = Animated.createAnimatedComponent(G);

interface SharkShapeProps {
  tailRotation: SharedValue<number>;
}

export default function SharkShape({ tailRotation }: SharkShapeProps) {
  const tailAnimatedProps = useAnimatedProps(() => ({
    transform: `rotate(${tailRotation.value}, 15, 30)` as const,
  }));

  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 60">
      <Ellipse cx="42" cy="30" rx="25" ry="11" fill="#6B8FAD" />
      <Path d="M 33 19 Q 38 5 45 19 Z" fill="#4A6A8A" />
      <AnimatedG animatedProps={tailAnimatedProps}>
        <Path
          d="M 15 30 L 3 14 C 6 22, 8 28, 6 30 C 8 32, 6 38, 3 44 Z"
          fill="#4A6A8A"
        />
      </AnimatedG>
      <Path d="M 35 41 L 33 52 L 42 41 Z" fill="#5B7B9A" />
      <Circle cx="60" cy="26" r="3" fill="white" />
      <Circle cx="61" cy="26" r="1.5" fill="#1a1a2e" />
      <Path
        d="M 68 30 Q 64 34 58 32"
        stroke="#3A5A7A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
