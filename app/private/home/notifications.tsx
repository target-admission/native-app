import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const filters = [
	{
		id: "news",
		label: "News",
	},
	{
		id: "reffer",
		label: "Refferal",
	},
	{
		id: "score",
		label: "Score",
	},
	{
		id: "payment",
		label: "Payment",
	},
	{
		id: "security",
		label: "Security",
	},
];

export default function Page() {
	const [activeFilter, setActiveFilter] = React.useState("");

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
							No unread notifications
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
					<Ionicons
						name="checkmark-done"
						size={24}
						color="#ED2024"
					/>
				</TouchableOpacity>
			</View>
			<View className="flex flex-col h-11">
				<ScrollView
					style={{ flex: 1 }}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						columnGap: 10,
						paddingLeft: 10,
					}}
				>
					{filters?.map?.((item: { id: string; label: string }) => (
						<TouchableOpacity
							key={item.id}
							onPress={() =>
								setActiveFilter((a) => (a === item.id ? "" : item.id))
							}
							activeOpacity={0.6}
						>
							<Text
								className={`text-base font-fredoka px-3 py-1 rounded-full ${
									activeFilter === item.id
										? "bg-primary text-background font-fredoka-semibold"
										: "bg-gray-600 text-background font-fredoka-medium"
								}`}
							>
								{item?.label}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
			{/* <ScrollView
				style={{
					flex: 1,
				}}
			></ScrollView> */}
			<View className="flex flex-col items-center justify-center h-[70vh] w-full">
				<MaterialCommunityIcons
					name="checkbox-blank-badge-outline"
					size={70}
					color="#6b7280"
				/>
				<Text className="mt-3 text-white font-fredoka-medium text-xl">
					No notifications
				</Text>
				<Text className="mt-1 text-center font-fredoka text-gray-500 text-base">
					You have no unread notifications
				</Text>
			</View>
		</SafeAreaView>
	);
}
