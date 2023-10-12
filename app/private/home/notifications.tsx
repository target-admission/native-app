import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const filters = [
	{
		id: "",
		label: "All",
	},
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
	const [activeFilter, setActiveFilter] = React.useState(filters[0].id);

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
			<ScrollView
				style={{ flex: 1 }}
				horizontal
				contentContainerStyle={{
					flexDirection: "row",
					columnGap: 10,
					overflow: "scroll",
					paddingLeft: 10,
				}}
			>
				{filters?.map?.((item: { id: string; label: string }) => (
					<TouchableOpacity
						key={item.id}
						onPress={() => setActiveFilter(item.id)}
						activeOpacity={0.6}
						disabled={activeFilter === item.id}
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
		</SafeAreaView>
	);
}
