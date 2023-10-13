import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	return (
		<SafeAreaView className="bg-background h-full">
			<View>
				<Text className="text-white">Search</Text>
			</View>
		</SafeAreaView>
	);
}
