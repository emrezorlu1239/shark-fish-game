import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export { SCREEN_WIDTH, SCREEN_HEIGHT };
export const SHARK_SIZE = 60;
export const FISH_SIZE = 40;
export const MAX_FISH_COUNT = 8;
export const SPAWN_INTERVAL_MS = 1200;
