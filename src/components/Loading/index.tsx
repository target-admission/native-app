import { ActivityIndicator, Text, View } from "react-native";
import React, { Component } from "react";

export default class Loading extends Component {
	render() {
		return (
			<View className="bg-black h-full w-full flex flex-row items-center justify-center">
				<ActivityIndicator
					color={"#ffffff"}
					size={"large"}
				/>
			</View>
		);
	}
}
