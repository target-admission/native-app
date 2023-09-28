import { ActivityIndicator, View } from "react-native";
import React, { Component } from "react";

export default class Loading extends Component {
	render() {
		return (
			<View className="bg-background h-full w-full flex flex-row items-center justify-center">
				<ActivityIndicator
					color={"#ffffff"}
					size={"large"}
				/>
			</View>
		);
	}
}
