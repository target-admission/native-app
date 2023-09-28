import { Slot, useRouter, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
// icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = [
	{
		name: "Home",
		Icon: (props: any) => (
			<MaterialIcons
				name="explore"
				size={24}
				color="white"
				{...props}
			/>
		),
		href: "/private/home",
	},
	{
		name: "Notifications",
		Icon: (props: any) => (
			<Ionicons
				name="notifications"
				size={24}
				color="white"
				{...props}
			/>
		),
		href: "/private/home/notifications",
	},
	{
		name: "Profile",
		Icon: (props: any) => (
			<Feather
				name="user"
				size={24}
				color="white"
				{...props}
			/>
		),
		href: "/private/home/more",
	},
];

function HomeLayout() {
	const primaryColor = "#ED2024";
	const router = useRouter();
	const pathname = usePathname();

	return (
		<>
			<Slot />
			<View className="bg-background absolute bottom-0 w-full border-t border-t-neutral-950">
				<View className="relative w-full  p-1 px-4 rounded-md flex flex-row items-center justify-evenly">
					{Tabs?.map(({ name, href, Icon }) => (
						<TouchableOpacity
							key={href}
							onPressOut={() => {
								router.push(href);
							}}
						>
							<View
								className="py-3 mt-1 mb-2 pl-3 pr-5 flex flex-row items-center justify-center rounded-full"
								style={{
									backgroundColor:
										pathname === href ? primaryColor : "transparent",
								}}
							>
								<Icon color={pathname === href ? "#131417" : "white"} />
								{pathname === href && (
									<Text className="text-background font-fredoka-medium text-lg ml-2">
										{name}
									</Text>
								)}
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</>
	);
}

export default HomeLayout;
