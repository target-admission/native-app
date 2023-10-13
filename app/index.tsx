import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Loading from "../src/components/Loading";

export default function Page() {
	const navigation = useRouter();

	useEffect(() => {
		cacheResourcesAsync();
	}, []);

	const cacheResourcesAsync = async () => {
		try {
			const openedBefore = await AsyncStorage.getItem("@app:openedBefore");
			if (openedBefore) {
				navigation.replace("/private/home");
			} else {
				navigation.replace("/onboarding");
			}
		} catch (error) {
			// Handle error
		}
	};

	return (
		<SafeAreaView className="flex-col items-center justify-evenly h-full bg-background">
			<Loading />
		</SafeAreaView>
	);
}
