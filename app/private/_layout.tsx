import { Slot } from "expo-router";
import { withAuth } from "../../src/hook";

export default function PrivateLayout() {
	return withAuth(() => (
		<>
			<Slot />
		</>
	));
}
