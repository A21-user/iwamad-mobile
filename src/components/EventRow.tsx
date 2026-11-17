
import { Pressable, StyleSheet, Text } from 'react-native';
import type { CampusEvent } from '../data/events';

type Props = {
  event: CampusEvent;
  saved: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function EventRow({
  event,
  saved,
  onPress,
  onLongPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <Text style={styles.title}>
        {event.title}{saved ? ' ★ Saved' : ''}
      </Text>
      <Text style={styles.details}>
        {event.date} · {event.place}
      </Text>
    </Pressable>
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
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: '#475569',
  },
});
