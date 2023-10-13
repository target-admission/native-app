import {
	Image,
	ImageSourcePropType,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../src/services/auth";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ShortcutCard = ({
	image_url,
	text,
	page_url,
}: {
	image_url: ImageSourcePropType;
	text: string;
	page_url: string;
}) => {
	const router = useRouter();

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() => {
				router.push(page_url);
			}}
		>
			<View className="flex flex-col items-center justify-center p-3 gap-3 rounded-md">
				<Image
					source={image_url}
					className="h-20 w-20"
				/>
				<Text className="text-gray-300 tracking-widest font-fredoka-medium text-center text-sm">
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default function Page() {
	const { user } = useAuth();
	const router = useRouter();

	return (
		<SafeAreaView className="bg-background h-full">
			<ScrollView>
				<LinearGradient
					start={{ x: -0.3, y: -0.3 }}
					colors={["#9583d4", "#f26366"]}
					className="flex flex-row items-center justify-between py-6 px-7 rounded-3xl max-h-40 m-6"
				>
					<View className="flex flex-col">
						<Text className="text-background font-fredoka-semibold text-4xl mb-1">
							Welcome
						</Text>
						<Text className="text-gray-800 font-fredoka-medium text-xl">
							{user.first_name} {user.last_name}
						</Text>
						<Text className="text-background font-fredoka-medium text-base">
							{moment().format("dddd, MMM Do YYYY")}
						</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={() => {
							router.push("/private/home/search");
						}}
					>
						<View className="p-3">
							<FontAwesome
								name="search"
								size={30}
								color="#0A0A0D"
							/>
						</View>
					</TouchableOpacity>
				</LinearGradient>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						justifyContent: "center",
					}}
					className="px-6"
				>
					<ShortcutCard
						image_url={require("../../../assets/icons/courses.png")}
						text={"Online\nCourses"}
						page_url="/private/home/search"
					/>
					<ShortcutCard
						image_url={require("../../../assets/icons/qbank.png")}
						text={"Question\nBank"}
						page_url="/private/home/search"
					/>
					<ShortcutCard
						image_url={require("../../../assets/icons/exam.png")}
						text={"In-App\nExam"}
						page_url="/private/home/search"
					/>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}
