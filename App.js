import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import CoolButton from './CoolButton';

const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const randomLetter = () => letters[Math.floor(Math.random() * letters.length)]

export default function App() {
  const [count, setCount] = useState(0)
  const [boardItems, setBoardItems] = useState([])

  useEffect(() => {
    if (count === 0) {
      setBoardItems([])
    } else if (count % 3 === 0) {
      const text = randomLetter()
      const angle = Math.random() * 360
      const scale = Math.floor(Math.random() * 2 + 0.5)
      setBoardItems(items => [...items, { text, angle, scale }])
    }
  }, [count, setCount])

  function reset() {
    setBoardItems([])
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Count: {count}</Text>
      <CoolButton text="increment" onPress={() => setCount(c => c + 1)} />
      <CoolButton text="decrement" onPress={() => setCount(c => c - 1)} />
      <CoolButton text="reset" color="red" backgroundColor="pink" onPress={reset} />
      <View style={styles.board}>
        {boardItems.map(item =>
          <Text style={{...styles.boardItem,
            transform: [{rotate: `${item.angle}deg`}, {scale: item.scale}]
          }}>{item.text}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgoldenrodyellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  innerText: {
    color: 'green',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'GillSans',
  },
  board: {
    borderColor: 'green',
    borderWidth: 3,
    alignSelf: 'stretch',
    flex: 1,
    margin: 20,
    borderRadius: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boardItem: {
    fontSize: 48,
    margin: 5,
    padding: 0,
    color: 'green',
  }
});
