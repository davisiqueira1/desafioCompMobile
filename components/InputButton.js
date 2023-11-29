import { View, Text, Pressable, StyleSheet } from "react-native";
import { ButtonText } from "./StyledComponents";
import colorPalette from "../constants/colorPalette";
import fonts from "../constants/fonts";

export default function InputButton({ children, onPress, style }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "black" }}
      >
        <ButtonText style={styles.text}>{children}</ButtonText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: "80%",
    height: 50,
    borderRadius: 6,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    flex: 1,
    backgroundColor: colorPalette.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.secondaryText,
  },
});
