import { View, Pressable, StyleSheet } from "react-native";
import { ButtonText } from "./StyledComponents";

export default function InputButton({ children, onPress, style }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#000000" }}
      >
        <ButtonText>{children}</ButtonText>
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
    backgroundColor: "#353935",
    justifyContent: "center",
    alignItems: "center",
  },
});
