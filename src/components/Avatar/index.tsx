import React from "react";
import {
	Image,
	ImageProps,
	ImageSourcePropType,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
// import { useUpdateUserInfo } from "../../queries/auth";
// import handleResponse from "src/utilites/handleResponse";

interface AvatarProps extends ImageProps {
	onChange?: (image: any) => void;
}

export const Avatar = (props: AvatarProps) => {
	const [uri, setUri] = React.useState<string | ImageSourcePropType | null>(
		props.source || null
	);

	// const { isLoading, mutateAsync } = useUpdateUserInfo();

	// const onChange = async (image: any) => {
	//     const res = await handleResponse(() => mutateAsync({ data: {
	//         display_picture: image
	//     } }));
	// };

	const pickPicture = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [6, 6],
			quality: 1,
		});

		if (!result.canceled) {
			setUri(result.assets[0]);
		}
	};

	return (
		<TouchableOpacity
			style={{
				marginBottom: 32,
			}}
			// disabled={isLoading}
			onPress={pickPicture}
		>
			<View className="border-2 border-primary rounded-full p-2">
				{uri ? (
					<Image
						style={styles.avatar}
						{...props}
						source={uri ? (uri as ImageSourcePropType) : props.source}
					/>
				) : (
					<View className="border-2 border-[#333] rounded-full p-3">
						<Feather
							name="user"
							size={70}
							color="#777"
						/>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	avatar: {
		paddingTop: 20,
		height: 100,
		width: 100,
		borderRadius: 100,
		padding: 20,
	},
});
