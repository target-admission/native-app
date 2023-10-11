import { Slot, useRouter, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

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
		name: "Saved",
		Icon: (props: any) => (
			<Feather
				name="bookmark"
				size={24}
				color="white"
				{...props}
			/>
		),
		href: "/private/home/saved",
	},
	{
		name: "Notify",
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
	NavigationBar.setBackgroundColorAsync("#0A0A0D");

	const Tab = ({ name, href, Icon }: any) => {
		return (
			<TouchableOpacity
				onPress={() => {
					router.push(href);
				}}
			>
				<View
					className="py-3 mt-1 mb-2 pl-3 pr-5 flex flex-row items-center justify-center rounded-full"
					style={{
						backgroundColor: pathname === href ? "#1B1616" : "transparent",
					}}
				>
					<Icon color={pathname === href ? primaryColor : "#888"} />
					<Text
						className="text-primary font-fredoka-medium text-lg ml-2"
						style={{
							display: pathname === href ? "flex" : "none",
						}}
					>
						{name}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<>
			<View className="pb-16 bg-background">
				<Slot />
			</View>
			<View className="bg-[#0A0A0D] absolute bottom-0 w-full border-t border-t-neutral-950">
				<View className="relative w-full  p-1 px-4 rounded-md flex flex-row items-center justify-evenly">
					{Tabs?.map(({ name, href, Icon }) => (
						<Tab
							key={href}
							name={name}
							href={href}
							Icon={Icon}
						/>
					))}
				</View>
			</View>
		</>
	);
}

export default HomeLayout;
