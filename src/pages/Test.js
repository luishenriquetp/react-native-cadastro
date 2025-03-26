import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function Test() {
	const navigation = useNavigation();
	const [contador, setContador] = useState(0);
	function incrementar() {
		setContador(contador + 1);
	}
	return (
		<>
			<Header title="Header param" />
			<View style={styles.container}>
				<Text style={styles.title}>Hello World!</Text>

				<Text>{contador} toques!</Text>
				<TouchableOpacity style={styles.button} onPress={incrementar}>
					<Text>Press Here</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Form")}
				>
					<Text>Navegar</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
	},
	button: {
		marginTop: 20,
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
});
