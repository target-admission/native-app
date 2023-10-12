import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../src/services/auth";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
	const { user } = useAuth();

	return (
		<SafeAreaView className="bg-background h-full">
			<ScrollView>
				<View className="flex flex-row items-start justify-between my-8 mx-7 bg-gradient-to-br from-primary to-secondary">
					<LinearGradient
						// Background Linear Gradient
						end={{ x: 0.1, y: 0.2 }}
						colors={["rgba(155,0,0,0.8)", "transparent"]}
					>
						<View className="flex flex-col gap-1">
							<Text className="text-white font-fredoka-medium text-4xl">
								Welcome
							</Text>
							<Text className="text-white font-fredoka text-xl">
								{user.first_name} {user.last_name}
							</Text>
						</View>
					</LinearGradient>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
