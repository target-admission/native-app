import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../src/services/auth";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
	const { user } = useAuth();

	return (
		<SafeAreaView className="bg-background h-full">
			<ScrollView>
				<View className="flex flex-row items-start justify-between my-5 mx-4 py-7 px-6 rounded-xl bg-background-dark">
					<View className="flex flex-col">
						<Text className="text-white font-fredoka-medium text-4xl">
							Welcome
						</Text>
						<Text className="text-gray-400 font-fredoka text-xl">
							{user.first_name} {user.last_name}
						</Text>
					</View>
				</View>
				<View>
					<LinearGradient
						// Background Linear Gradient
						className="flex flex-row items-start justify-between my-5 mx-4 py-7 px-6 rounded-xl"
						start={{ x: 0.1, y: 0.2 }}
						colors={["#592774", "#4E30B7"]}
					>
						<View className="flex flex-col">
							<Text className="text-background font-fredoka-medium text-4xl">
								Welcome
							</Text>
							<Text className="text-background-dark font-fredoka-medium text-xl">
								{user.first_name} {user.last_name}
							</Text>
						</View>
					</LinearGradient>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
