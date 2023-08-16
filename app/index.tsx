import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Page() {
	return (
		<SafeAreaView className="flex-col items-center justify-evenly h-full">
			<View
				children={
					<Image
						source={require("../assets/icons/favicon.png")}
						className="h-[50vw] w-[50vw] max-h-60 max-w-[240px]"
					/>
				}
				className="min-h-[35vh] flex flex-col items-center justify-center"
			/>

			<View>
				<Text className="text-3xl font-black text-[#182D4D] mx-auto">
					Admi<Text className="text-[#49A247]">Que</Text>
				</Text>
				<Text className="text-center max-w-[300px] mt-6 text-sm font-medium text-slate-500 mx-auto">
					Prepare easily with{" "}
					<Text className="font-bold text-[#182D4D]">AdmiQue</Text>. You can
					access many course, mentors and exams for your{" "}
					<Text className="text-[#182D4D] font-bold">
						University Admission{" "}
						<Text className="text-[#49A247] font-bold">Preparation</Text>
					</Text>
					.
				</Text>
			</View>

			<View>
				<Link
					href="/onboarding"
					asChild
				>
					<Pressable
						className="mb-8"
						android_ripple={{
							color: "#ffffff22",
							radius: 10000,
							foreground: true,
						}}
					>
						<Text className="bg-[#182D4D] text-white font-black text-lg px-16 py-4 rounded-full mx-auto">
							Get Started
						</Text>
					</Pressable>
				</Link>

				<Text className="text-xs font-black text-slate-500 mx-auto">
					Developed By <Text className="text-[#182D4D] text-base">TamsLab</Text>
				</Text>
			</View>
		</SafeAreaView>
	);
}
