import { Text, StyleSheet } from 'react-native';
import { FISH_SIZE } from '../constants/game';

interface FishProps {
  x: number;
  y: number;
}

export default function Fish({ x, y }: FishProps) {
  return (
    <Text style={[styles.fish, { left: x, top: y }]}>🐟</Text>
  );
}

const styles = StyleSheet.create({
  fish: {
    position: 'absolute',
    width: FISH_SIZE,
    height: FISH_SIZE,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
