import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OutlineButton = ({ title, isActive }) => {
  const buttonStyles = isActive
    ? [styles.activeButton, styles.button]
    : styles.button;
  const textStyles = isActive ? styles.activeButtonText : styles.buttonText;

  return (
    <TouchableOpacity style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#f87e7c",
    borderRadius: 5,
    padding: 4,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
  },
  activeButton: {
    flex: 1,
    backgroundColor: "#f87e7c",
  },
  activeButtonText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
});

export default OutlineButton;
