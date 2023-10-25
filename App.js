import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import OutlineButton from "./components/OutlineButton";
import BackgroundImage from "./components/BackgroundImage";
import ImageButton from "./components/ImageButton";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My stats</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("./images/icons/clock.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text>0 h 0 m</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("./images/icons/dumbell.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text>0 Exercises</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.title}>Trimesters</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <OutlineButton title="trimester 1" isActive={true} />
              <OutlineButton title="trimester 2" />
              <OutlineButton title="trimester 3" />
            </View>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.title}>Try</Text>
            <BackgroundImage
              imageSrc={require("./images/exercises/exercise-1.jpg")}
              title="Mandatory instructions"
            >
              <ImageButton title="Trial workout" />
            </BackgroundImage>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.title}>Continue</Text>
            <BackgroundImage
              imageSrc={require("./images/exercises/exercise-1.jpg")}
              title="Through the 8th week"
              customStyle={{ marginBottom: 30 }}
            />
            <BackgroundImage
              imageSrc={require("./images/exercises/exercise-1.jpg")}
              title="Through the 8th week"
              customStyle={{ marginBottom: 30 }}
            />
            <BackgroundImage
              imageSrc={require("./images/exercises/exercise-1.jpg")}
              title="Through the 8th week"
              customStyle={{ marginBottom: 30 }}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff",
  },
  headerTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  main: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    marginBottom: 10,
    fontWeight: "medium",
    fontSize: 18,
  },
});
