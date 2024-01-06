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
import { Audio } from "expo-av";
// import clicks from "../../files/button_click.mp3";

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
  const { wrapper, container, modalBox, modalWrapper, modalText, timerText } =
    styles;

  const [modalVisible, setModalVisible] = useState(false);

  const [words, setWords] = useState([]);

  const [selectedItem, setSelectedItem] = useState("");

  const [seconds, setSeconds] = useState(30);

  const [isPressed, setIsPressed] = useState([]);

  const [sound, setSound] = useState();

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => handleView(item)}
      style={[
        styles.button,
        { backgroundColor: isPressed.includes(item) ? "grey" : "#40C9A2" },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
    </Pressable>
  );

  const playPause = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./files/button_click.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleView = (item) => {
    playPause();
    setSelectedItem(item);
    setModalVisible(true);
    setIsPressed((prevSelect) => [...prevSelect, item]);

    setTimeout(() => {
      setModalVisible(false);
    }, 10000);
  };

  useEffect(() => {
    let timer;

    if (modalVisible && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!modalVisible) {
      // Reset the timer if the modal is closed
      setSeconds(10);
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
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#07352E",
  },
  container: {
    padding: 10,
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
