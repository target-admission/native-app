import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import {
	QueryClient,
	QueryClientProvider,
	focusManager,
} from "@tanstack/react-query";
import { AppStateStatus, Platform } from "react-native";
import { useOnlineManager } from "../src/hooks/useOnlineManager";
import { useAppState } from "../src/hooks/useAppState";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import {
	Fredoka_300Light,
	Fredoka_400Regular,
	Fredoka_500Medium,
	Fredoka_600SemiBold,
	Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
	// React Query already supports in web browser refetch on window focus by default
	if (Platform.OS !== "web") {
		focusManager.setFocused(status === "active");
	}
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2 } },
});

export default function HomeLayout() {
	NavigationBar.setBackgroundColorAsync("#131417");

	const [fontsLoaded, fontError] = useFonts({
		"fredoka-light": Fredoka_300Light,
		"fredoka-regular": Fredoka_400Regular,
		"fredoka-medium": Fredoka_500Medium,
		"fredoka-semibold": Fredoka_600SemiBold,
		"fredoka-bold": Fredoka_700Bold,
	});

	const callback = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && fontError) {
		return null;
	}

	callback();

	useOnlineManager();

	useAppState(onAppStateChange);

	return (
		<>
			<StatusBar
				animated
				backgroundColor="#131417"
				style="light"
			/>
			<QueryClientProvider client={queryClient}>
				<Slot />
			</QueryClientProvider>
		</>
	);
}
