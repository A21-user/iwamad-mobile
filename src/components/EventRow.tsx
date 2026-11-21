
import { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  ZoomIn,
} from 'react-native-reanimated';
import type { CampusEvent } from '../data/events';

type Props = {
  event: CampusEvent;
  saved: boolean;
  onPress: () => void;
  onToggleSaved: () => void;
};

export default function EventRow({
  event,
  saved,
  onPress,
  onToggleSaved,
}: Props) {
  const swipeRef = useRef<React.ComponentRef<typeof Swipeable>>(null);

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition}
    >
      <Swipeable
        ref={swipeRef}
        friction={2}
        rightThreshold={60}
        renderRightActions={(_progress, _translation, swipeable) => (
          <Pressable
            style={[
              styles.action,
              saved ? styles.unsaveAction : styles.saveAction,
            ]}
            onPress={() => {
              onToggleSaved();
              swipeable.close();
            }}
          >
            <Text style={styles.actionText}>
              {saved ? 'Unsave' : 'Save'}
            </Text>
          </Pressable>
        )}
      >
        <Pressable
          onPress={onPress}
          onLongPress={onToggleSaved}
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title}>{event.title}</Text>

            {saved && (
              <Animated.Text
                entering={ZoomIn}
                style={styles.savedBadge}
              >
                ★ Saved
              </Animated.Text>
            )}
          </View>

          <Text style={styles.details}>
            {event.date} · {event.place}
          </Text>
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    minHeight: 64,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  cardPressed: {
    backgroundColor: '#dbeafe',
    borderColor: '#2563eb',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: '#475569',
  },
  savedBadge: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#15803d',
  },
  action: {
    minWidth: 100,
    minHeight: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 12,
  },
  saveAction: {
    backgroundColor: '#16a34a',
  },
  unsaveAction: {
    backgroundColor: '#dc2626',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
