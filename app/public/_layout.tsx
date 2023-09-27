import { withoutAuth } from "../../src/hook";
import { Slot } from "expo-router";

export default function PublicLayout() {
	return withoutAuth(() => (
		<>
			<Slot />
		</>
	));
}
