import { StyleSheet, Text, View, ImageBackground } from "react-native";

function BackgroundImage({ imageSrc, title, customStyle, children }) {
  return (
    <ImageBackground
      source={imageSrc}
      style={[styles.imageBackground, customStyle]}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BackgroundImage;
