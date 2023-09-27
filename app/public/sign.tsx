import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../src/components/Input";

export default function Page() {
	return (
		<SafeAreaView className="bg-black h-full flex flex-col">
			<View className="flex-1 flex flex-col items-start justify-end p-8 gap-2">
				<View className="w-full p-4">
					<Text className="text-white text-4xl font-bold">Welcome</Text>
					<Text className="text-[#444] text-xl mb-4 font-semibold">
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
					<Text className="text-white mb-2">Forgot password?</Text>
				</View>
				<TouchableOpacity className="relative rounded-md w-full">
					<Text className="bg-primary rounded-md text-xl text-center font-bold px-6 py-4">
						Sign In
					</Text>
				</TouchableOpacity>
				<View className="w-full">
					<Text className="text-white w-full text-center my-8">
						Already have an account?
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
