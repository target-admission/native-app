import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	return (
		<SafeAreaView className="bg-background h-full">
			<View className="flex flex-row items-center justify-between px-5 py-4">
				<View className="flex flex-row items-center gap-4">
					<MaterialCommunityIcons
						name="bell"
						size={24}
						color="white"
					/>
					<View className="flex flex-col items-start">
						<Text className="text-white font-fredoka-medium text-xl">
							Notifications
						</Text>
						<Text className="font-fredoka text-gray-500 text-base">
							5 unread notifications
						</Text>
					</View>
				</View>
				<TouchableOpacity
					className="mr-3"
					onPress={() => {
						console.log("Mark all as read");
					}}
				>
					<Ionicons
						name="checkmark-done"
						size={24}
						color="#ED2024"
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
