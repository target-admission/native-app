import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../../src/components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Page() {
	const router = useRouter();
	return (
		<SafeAreaView className="bg-black h-full flex flex-col">
			<View className="flex-1 flex flex-col items-start justify-end p-8 gap-2">
				<View className="w-full p-4">
					<Text className="text-white text-4xl font-fredoka-medium">
						Welcome
					</Text>
					<Text className="text-[#777] text-xl mb-4 font-fredoka-medium">
						Sign in to continue
					</Text>
				</View>
				<View className="w-full">
					<Input placeholder="Phone Number" />
				</View>
				<View className="w-full">
					<Input
						secureTextEntry
						placeholder="Password"
					/>
				</View>
				<View className="flex flex-row items-center justify-end w-full pr-4">
					<Text className="text-white mb-2 font-fredoka text-base">
						Forgot password?
					</Text>
				</View>
				<TouchableOpacity
					className="relative rounded-md w-full"
					activeOpacity={0.85}
					onPressOut={async () => {
						await AsyncStorage.removeItem("@app:openedBefore");
						router.push("/onboarding");
					}}
				>
					<Text className="bg-primary rounded-md text-xl text-center font-fredoka-semibold tracking-widest  px-6 py-4">
						SIGN IN
					</Text>
				</TouchableOpacity>
				<View className="w-full">
					<Text className="text-white w-full text-center my-8 font-fredoka text-base">
						Create new account?
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
