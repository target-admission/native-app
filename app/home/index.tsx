import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	return (
		<SafeAreaView className="bg-black h-full">
			<View>
				<Text className="text-white">Home</Text>
			</View>
		</SafeAreaView>
	);
}
