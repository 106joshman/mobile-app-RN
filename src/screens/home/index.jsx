import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Modal,
  FlatList,
  Pressable,
} from "react-native";

// const CARD = [
//   {
//     id: 0,
//     // title: "1",
//     word: "ONE",
//   },
//   {
//     id: 1,
//     // title: "2",
//     word: "TWO",
//   },
//   {
//     id: 2,
//     // title: "3",
//     word: "THREE",
//   },
//   {
//     id: 3,
//     // title: "4",
//     word: "FOUR",
//   },
//   {
//     id: 4,
//     // title: "5",
//     word: "FIVE",
//   },
//   {
//     id: 5,
//     // title: "6",
//     word: "SIX",
//   },
//   {
//     id: 6,
//     // title: "7",
//     word: "SEVEN",
//   },
//   {
//     id: 7,
//     // title: "8",
//     word: "EIGHT",
//   },
//   {
//     id: 8,
//     // title: "9",
//     word: "NINE",
//   },
//   {
//     id: 9,
//     // title: "10",
//     word: "TEN",
//   },
//   {
//     id: 10,
//     // title: "11",
//     word: "ELEVEN",
//   },
//   {
//     id: 11,
//     // title: "12",
//     word: "TWELVE",
//   },
//   {
//     id: 12,
//     // title: "13",
//     word: "THIRTEEN",
//   },
//   {
//     id: 13,
//     // title: "14",
//     word: "FOURTEEN",
//   },
//   {
//     id: 14,
//     // title: "15",
//     word: "FIFTEEN",
//   },
//   {
//     id: 15,
//     // title: "16",
//     word: "SIXTEEN",
//   },
//   {
//     id: 16,
//     // title: "17",
//     word: "SEVENTEEN",
//   },
//   {
//     id: 17,
//     // title: "18",
//     word: "EIGHTEEN",
//   },
// ];

const generateRandomWords = (count) => {
  const words = [
    "Fishing",
    "Walk a Dog",
    "Flying",
    "Chop a wood",
    "Drink tea",
    "Santa Claus",
    "Ballet Dancer",
    "Ronaldo",
    "Man in the middle",
    "ten",
    "The Great Wall of China",
    "Dinosaur",
    "Champagne toast",
    "President",
    "Beach",
    "Pirate",
    "Frightened",
    " Elf",
  ];
  const randomWords = [];
  while (randomWords.length < count) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    if (!randomWords.includes(word)) {
      randomWords.push(word);
    }
  }
  return randomWords;
};

export default function Home() {
  const {
    wrapper,
    container,
    gridContainer,
    modalBox,
    modalWrapper,
    modalText,
    timerText,
  } = styles;

  const [modalVisible, setModalVisible] = useState(false);

  const [words, setWords] = useState([]);

  const [selectedItem, setSelectedItem] = useState("");

  const [seconds, setSeconds] = useState(30);

  const renderItem = ({ item, index, isPressed }) => (
    <Pressable
      onPress={() => handleView(item)}
      style={[
        styles.button,
        { backgroundColor: isPressed ? "grey" : "#40c9a2" },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
    </Pressable>
  );

  const handleView = (item) => {
    setSelectedItem(item);
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 35000);
  };

  useEffect(() => {
    let timer;

    if (modalVisible && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!modalVisible) {
      // Reset the timer if the modal is closed
      setSeconds(30);
    }

    return () => {
      clearInterval(timer);
    };
  }, [modalVisible, seconds]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Generate 18 random words when the page mounts
    const randomWords = generateRandomWords(18);
    setWords(randomWords);
  }, []);

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <FlatList
          data={words}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={(index) => index.toString()}
        />

        {/* MODAL TO DISPLAY CHARADE WORD */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={handleCloseModal}
        >
          <View style={modalWrapper}>
            <View style={modalBox}>
              <Text style={timerText}>{seconds}</Text>
              <Text style={modalText}>{selectedItem}</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    overflow: "scroll",
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    padding: 10,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
  },
  button: {
    flex: 1,
    minWidth: 120,
    maxWidth: "25%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    fontWeight: 500,
    margin: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalBox: {
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
    width: 300,
    height: 300,
    backgroundColor: "#e5f9e0",
    justifyContent: "center",
    alignSelf: "center",
  },
  modalText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
  },
  timerText: {
    top: 15,
    position: "absolute",
    left: 250,
    fontSize: 25,
  },
});
