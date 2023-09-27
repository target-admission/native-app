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
	NavigationBar.setBackgroundColorAsync("black");

	useOnlineManager();

	useAppState(onAppStateChange);

	return (
		<>
			<StatusBar style="light" />
			<QueryClientProvider client={queryClient}>
				<Slot />
			</QueryClientProvider>
		</>
	);
}
