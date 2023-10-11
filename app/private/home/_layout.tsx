import { Slot, useRouter, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

// icons
import {
	AntDesign,
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = [
	{
		name: "Feed",
		Icon: (props: any) => (
			<MaterialCommunityIcons
				name="view-dashboard-outline"
				size={24}
				color="white"
				{...props}
			/>
		),
		SelectedIcon: (props: any) => (
			<MaterialCommunityIcons
				name="view-dashboard"
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
			<MaterialCommunityIcons
				name="bookmark-outline"
				size={24}
				color="white"
				{...props}
			/>
		),
		SelectedIcon: (props: any) => (
			<MaterialCommunityIcons
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
			<MaterialCommunityIcons
				name="bell-outline"
				size={24}
				color="white"
				{...props}
			/>
		),
		SelectedIcon: (props: any) => (
			<MaterialCommunityIcons
				name="bell"
				size={24}
				color="white"
				{...props}
			/>
		),
		href: "/private/home/notifications",
	},
	{
		name: "Me",
		Icon: (props: any) => (
			<MaterialCommunityIcons
				name="account-outline"
				size={24}
				color="white"
				{...props}
			/>
		),
		SelectedIcon: (props: any) => (
			<MaterialCommunityIcons
				name="account"
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

	const Tab = ({ name, href, Icon, SelectedIcon }: any) => {
		return (
			<TouchableOpacity
				onPress={() => {
					router.push(href);
				}}
			>
				<View
					className="py-3 mt-1 mb-2 pl-5 pr-6 flex flex-row items-center justify-center rounded-full"
					style={{
						backgroundColor: pathname === href ? "#1B1616" : "transparent",
					}}
				>
					{pathname === href ? (
						<SelectedIcon color={primaryColor} />
					) : (
						<Icon color={"#888"} />
					)}
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
					{Tabs?.map(({ name, href, Icon, SelectedIcon }) => (
						<Tab
							key={href}
							name={name}
							href={href}
							Icon={Icon}
							SelectedIcon={SelectedIcon}
						/>
					))}
				</View>
			</View>
		</>
	);
}

export default HomeLayout;
