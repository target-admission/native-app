import { Image, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function Page() {
	return (
		<Onboarding
			transitionAnimationDuration={300}
			bottomBarHighlight={false}
			SkipButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="px-6"
				>
					<Text className="font-bold text-base">Skip</Text>
				</TouchableOpacity>
			)}
			NextButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="px-6"
				>
					<Text className="font-bold text-base">Next</Text>
				</TouchableOpacity>
			)}
			DoneButtonComponent={({ ...props }) => (
				<TouchableOpacity
					{...props}
					className="px-6"
				>
					<Text className="font-bold text-base">Done</Text>
				</TouchableOpacity>
			)}
			pages={[
				{
					backgroundColor: "#fff",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/qbank.png")}
									className="h-[50vw] w-[50vw] max-h-60 max-w-[240px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-2xl font-black text-[#182D4D]">
								Question <Text className="text-[#49A247]">Bank</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-xs font-medium text-[#6C7D87]">
								Access a vast collection of previous years' university admission
								test questions and expert-curated new suggested question banks.
								Boost your preparation by practicing with real exam-like
								questions and increase your chances of success.
							</Text>
						</View>
					),
				},
				{
					backgroundColor: "#fff",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/exam.png")}
									className="h-[50vw] w-[50vw] max-h-60 max-w-[240px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-2xl font-black text-[#182D4D]">
								In-App <Text className="text-[#49A247]">Exam</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-xs font-medium text-[#6C7D87]">
								Test your knowledge and track your progress with our interactive
								in-app exams. Simulate the actual admission test environment,
								receive instant feedback, and identify areas for improvement to
								fine-tune your preparation.
							</Text>
						</View>
					),
				},
				{
					backgroundColor: "#fff",
					image: (
						<View
							children={
								<Image
									source={require("../assets/icons/courses.png")}
									className="h-[50vw] w-[50vw] max-h-60 max-w-[240px]"
								/>
							}
							className="min-h-[35vh] flex flex-col items-center justify-center"
						/>
					),
					title: (
						<View>
							<Text className="text-2xl font-black text-[#182D4D]">
								Online <Text className="text-[#49A247]">Courses</Text>
							</Text>
						</View>
					),
					subtitle: (
						<View>
							<Text className="text-center max-w-[300px] mt-6 text-xs font-medium text-[#6C7D87]">
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
