import React from "react";
import {
	Image,
	Text,
	ToastAndroid,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../../src/components/Input";
// import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../../src/queries/auth";
import handleResponse from "../../../src/utilites/handleResponse";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../../../src/services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Page() {
	const router = useRouter();
	const { handleSubmit, control, reset } = useForm();

	const { mutateAsync, isLoading } = useLogin();

	const [formError, setFormError] = React.useState<string | null>(null);

	const onSubmit = async (data: any) => {
		const res = await handleResponse(() => mutateAsync(data));
		if (res.status) {
			reset();
			authService.setToken(res.data.jwt);
			ToastAndroid.showWithGravity(
				res.message,
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM
			);
		} else {
			setFormError(res.message);
			ToastAndroid.showWithGravity(
				res.message,
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM
			);
		}
	};

	return (
		<SafeAreaView className="bg-background h-full flex flex-col">
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
						render={({
							field: { onChange, onBlur, value },
							formState: {
								errors: { phone: error },
							},
						}) => (
							<Input
								placeholder="Phone Number"
								onChangeText={onChange}
								keyboardType="phone-pad"
								onBlur={onBlur}
								value={value}
								error={error || !!formError}
								autoComplete="off"
								blurOnSubmit
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
						render={({
							field: { onChange, onBlur, value },
							formState: {
								errors: { password: error },
							},
						}) => (
							<Input
								placeholder="Password"
								onChangeText={onChange}
								secureTextEntry
								selectTextOnFocus
								error={error || !!formError}
								autoComplete={"off"}
								onBlur={onBlur}
								value={value}
								blurOnSubmit
							/>
						)}
					/>
				</View>
				<View className="flex flex-row items-center justify-end w-full pr-4">
					<Text className="text-white mb-2 font-fredoka text-base">
						Forgot password?
					</Text>
				</View>
				{!!formError && (
					<View>
						<Text className="text-red-700 text-base font-fredoka-semibold uppercase my-2">
							{formError}
						</Text>
					</View>
				)}
				<TouchableOpacity
					disabled={isLoading}
					className="relative rounded-md w-full"
					activeOpacity={0.85}
					onPress={handleSubmit(onSubmit)}
				>
					<Text className="bg-primary rounded-md text-xl text-center font-fredoka-semibold tracking-widest text-background px-6 py-4">
						{isLoading ? "SIGNING..." : "SIGN IN"}
					</Text>
				</TouchableOpacity>
				<View className="w-full">
					<TouchableOpacity
						className="relative rounded-md w-full"
						activeOpacity={0.85}
						onPress={async () => {
							await AsyncStorage.removeItem("@app:openedBefore");
							router.replace("/onboarding");
						}}
					>
						<Text className="text-white w-full text-center my-8 font-fredoka text-base">
							Create new account?
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
