import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

export default function HomeLayout() {
	NavigationBar.setBackgroundColorAsync("black");

	return (
		<>
			<StatusBar style="light" />
			<Slot />
		</>
	);
}
