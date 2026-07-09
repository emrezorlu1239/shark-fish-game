import { Text, StyleSheet } from 'react-native';

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps) {
  return (
    <Text style={styles.score}>{score}</Text>
  );
}

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    zIndex: 20,
  },
});
