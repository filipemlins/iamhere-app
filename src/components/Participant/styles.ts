import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1f1e25",
        width: "100%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    name: {
        color: "#fdfcfe",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        marginLeft: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
      },
      button: {
        backgroundColor: '#E23C44',
        height: 56,
        width: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
});