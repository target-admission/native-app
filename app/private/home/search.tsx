import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../../src/components/Input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Page() {
	return (
		<SafeAreaView className="bg-background h-full">
			<View className="p-4">
				<Input placeholder="Search..." />
			</View>
			<View className="flex flex-col items-center justify-center h-[70vh] w-full">
				<MaterialCommunityIcons
					name="cloud-search"
					size={70}
					color="#6b7280"
				/>
				<Text className="mt-3 text-white font-fredoka-medium text-xl">
					Search Online
				</Text>
				<Text className="mt-1 text-center font-fredoka text-gray-500 text-base">
					Search for exams, courses and more
				</Text>
			</View>
		</SafeAreaView>
	);
}
