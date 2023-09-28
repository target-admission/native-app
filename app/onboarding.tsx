import { Image, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Page() {
	const router = useRouter();

	return (
		<Onboarding
			transitionAnimationDuration={300}
			bottomBarHighlight={false}
			onSkip={async () => {
				await AsyncStorage.setItem("@app:openedBefore", "true");
				router.push("/private/home");
			}}
			onDone={async () => {
				await AsyncStorage.setItem("@app:openedBefore", "true");
				router.push("/private/home");
			}}
			SkipButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="px-6"
				>
					<Text className="font-fredoka-medium text-base text-gray-500">
						Skip
					</Text>
				</TouchableOpacity>
			)}
			NextButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="px-6"
				>
					<Text className="font-fredoka-medium text-base text-white">Next</Text>
				</TouchableOpacity>
			)}
			DoneButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="font-fredoka-medium px-6"
				>
					<Text className="font-bold text-base text-primary">Done</Text>
				</TouchableOpacity>
			)}
			pages={[
				{
					backgroundColor: "#131417",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/qbank.png")}
									className="h-[70vw] w-[70vw] max-h-72 max-w-[288px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-3xl text-white font-fredoka-medium">
								Question <Text className="text-primary">Bank</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-base font-fredoka text-gray-500">
								Access a vast collection of previous years' university admission
								test questions and expert-curated new suggested question banks.
								Boost your preparation by practicing with real exam-like
								questions and increase your chances of success.
							</Text>
						</View>
					),
				},
				{
					backgroundColor: "#131417",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/exam.png")}
									className="h-[70vw] w-[70vw] max-h-72 max-w-[288px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-3xl text-white font-fredoka-medium">
								In-App <Text className="text-primary">Exam</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-base font-fredoka text-gray-500">
								Test your knowledge and track your progress with our interactive
								in-app exams. Simulate the actual admission test environment,
								receive instant feedback, and identify areas for improvement to
								fine-tune your preparation.
							</Text>
						</View>
					),
				},
				{
					backgroundColor: "#131417",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/courses.png")}
									className="h-[70vw] w-[70vw] max-h-72 max-w-[288px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-3xl text-white font-fredoka-medium">
								Online <Text className="text-primary">Courses</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-base font-fredoka text-gray-500">
								Enroll in specialized academic courses designed by experienced
								educators to tackle challenging topics of the university
								admission test. Gain in-depth knowledge, receive personalized
								guidance, and stay ahead in your preparation journey.
							</Text>
						</View>
					),
				},
			]}
		/>
	);
}
