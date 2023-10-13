import React, { Component } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
export default class Loading extends Component {
	render() {
		return (
			<View className="bg-background h-full w-full flex flex-row items-center justify-center">
				{/* <ActivityIndicator
					color={"#ffffff"}
					size={"large"}
				/> */}
				<View className="h-56 w-56">
					<LottieView
						resizeMode="contain"
						source={require("../../../assets/icons/lottie/loading.json")}
						autoPlay
						loop
					/>
				</View>
			</View>
		);
	}
}
