import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../../src/components/Input";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../../src/queries/auth";
import handleResponse from "../../../src/utilites/handleResponse";

export default function Page() {
	const router = useRouter();
	const {
		register,
		setValue,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm();

	const { mutateAsync, isLoading } = useLogin();

	const onSubmit = async (data: any) => {
		const res = await handleResponse(() => mutateAsync(data));
		console.log(res);
	};

	return (
		<SafeAreaView className="bg-black h-full flex flex-col">
			<View className="flex-1 flex flex-col items-start justify-end p-8 gap-2">
				<View className="w-full p-4">
					<Image
						source={require("../../../assets/icons/flat/convo-hat.png")}
						className="h-[50vw] w-[50vw] max-h-40 max-w-[160px] mb-4"
					/>
					<View>
						<Text className="text-white text-4xl font-fredoka-medium">
							Welcome
						</Text>
						<Text className="text-[#777] text-xl mb-4 font-fredoka-medium">
							Sign in to continue
						</Text>
					</View>
				</View>
				<View className="w-full">
					<Controller
						control={control}
						name="phone"
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								placeholder="Phone Number"
								onChangeText={onChange}
								keyboardType="phone-pad"
								onBlur={onBlur}
								value={value}
								autoComplete="off"
							/>
						)}
					/>
				</View>
				<View className="w-full">
					<Controller
						control={control}
						name="password"
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								placeholder="Password"
								onChangeText={onChange}
								secureTextEntry
								selectTextOnFocus
								autoComplete={"off"}
								onBlur={onBlur}
								value={value}
							/>
						)}
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
					onPressOut={handleSubmit(onSubmit)}
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
