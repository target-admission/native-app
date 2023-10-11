import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../src/services/auth/useAuth";
import { Avatar } from "../../../src/components/Avatar";

// icons
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Page() {
	const { user, logout, isLogoutLoading } = useAuth();

	return (
		<SafeAreaView className="bg-background h-full">
			<ScrollView>
				<View className="flex flex-col items-center justify-end pb-6 min-h-[310px]">
					<View>
						<Avatar source={(user?.display_picture as any) || null} />
					</View>
					<Text className="text-white font-fredoka text-xl">
						{[user?.first_name, user?.last_name].join(" ")}
					</Text>
					<Text className="text-[#777] font-fredoka text-xl">
						@{user?.username}
					</Text>
				</View>
				<View className="p-4">
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<Feather
									name="edit-2"
									size={20}
									color="white"
								/>
							</View>
							<Text className="text-white font-fredoka text-lg flex-1">
								Edit Profile
							</Text>
							<View className="ml-5">
								<MaterialIcons
									name="arrow-forward-ios"
									size={20}
									color="#444"
								/>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<MaterialIcons
									name="leaderboard"
									size={20}
									color="white"
								/>
							</View>
							<Text className="text-white font-fredoka text-lg flex-1">
								Leaderboard
							</Text>
							<View className="ml-5">
								<MaterialIcons
									name="arrow-forward-ios"
									size={20}
									color="#444"
								/>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<FontAwesome
									name="credit-card"
									size={20}
									color="white"
								/>
							</View>
							<Text className="text-white font-fredoka text-lg flex-1">
								Subscription
							</Text>
							<View className="ml-5">
								<MaterialIcons
									name="arrow-forward-ios"
									size={20}
									color="#444"
								/>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<Feather
									name="gift"
									size={20}
									color="white"
								/>
							</View>
							<Text className="text-white font-fredoka text-lg flex-1">
								Refer & Earn
							</Text>
							<View className="ml-5">
								<MaterialIcons
									name="arrow-forward-ios"
									size={20}
									color="#444"
								/>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<Feather
									name="help-circle"
									size={20}
									color="white"
								/>
							</View>
							<Text className="text-white font-fredoka text-lg flex-1">
								Help & Feedback
							</Text>
							<View className="ml-5">
								<MaterialCommunityIcons
									name="search-web"
									size={26}
									color="#444"
								/>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						className="my-2"
						onPressOut={() => {
							logout();
						}}
						disabled={isLogoutLoading}
					>
						<View className="flex flex-row items-center bg-[#ffffff05] py-6 px-7 rounded-2xl justify-between">
							<View className="mr-5">
								<Feather
									name="log-out"
									size={20}
									color="#ED2024"
								/>
							</View>
							<Text className="text-primary font-fredoka-medium text-xl flex-1">
								{isLogoutLoading ? "Logging out..." : "Logout"}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
