import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../src/services/auth";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Page() {
	const { user } = useAuth();
	const router = useRouter();

	return (
		<SafeAreaView className="bg-background h-full">
			<ScrollView>
				<LinearGradient
					start={{ x: -0.3, y: -0.3 }}
					colors={["#9583d4", "#f26366"]}
					className="flex flex-row items-start justify-between py-7 px-6 rounded-xl max-h-40 m-6"
				>
					<View className="flex flex-col">
						<Text className="text-background font-fredoka-semibold text-4xl mb-1">
							Welcome
						</Text>
						<Text className="text-gray-800 font-fredoka-medium text-xl">
							{user.first_name} {user.last_name}
						</Text>
						<Text className="text-background font-fredoka-medium text-base">
							{moment().format("dddd, MMM Do YYYY")}
						</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={() => {
							router.push("/private/home/search");
						}}
					>
						<View className="p-3">
							<FontAwesome
								name="search"
								size={30}
								color="#0A0A0D"
							/>
						</View>
					</TouchableOpacity>
				</LinearGradient>
			</ScrollView>
		</SafeAreaView>
	);
}
