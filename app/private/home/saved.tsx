import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	return (
		<SafeAreaView className="bg-background h-full">
			<View className="flex flex-row items-center justify-between px-5 py-4">
				<View className="flex flex-row items-center gap-3">
					<MaterialCommunityIcons
						name="bookmark"
						size={35}
						color="white"
					/>
					<View className="flex flex-col items-start">
						<Text className="text-white font-fredoka-medium text-xl">
							Saved Collection
						</Text>
						<Text className="font-fredoka text-gray-500 text-base">
							No collections
						</Text>
					</View>
				</View>
				<TouchableOpacity
					className="mr-3"
					activeOpacity={0.6}
					onPress={() => {
						console.log("Mark all as read");
					}}
				>
					<Feather
						name="folder-plus"
						size={24}
						color="#ED2024"
					/>
				</TouchableOpacity>
			</View>

			<View className="flex flex-col items-center justify-center h-[70vh] w-full">
				<Feather
					name="folder"
					size={70}
					color="#6b7280"
				/>
				<Text className="mt-5 text-white font-fredoka-medium text-xl">
					No Collections
				</Text>
				<Text className="mt-1 text-center font-fredoka text-gray-500 text-base">
					You have no collections saved
				</Text>
			</View>
		</SafeAreaView>
	);
}
