import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {
	// Add any additional props specific to your custom TextInput
}

const Input: React.FC<CustomTextInputProps> = ({ className, ...props }) => {
	return (
		<TextInput
			{...props}
			cursorColor={"#f00"}
			placeholderTextColor={"#ffffff40"}
			style={{
				// fontFamily: "Fredoka_400Regular",
				backgroundColor: "#ffffff20",
			}}
			className={`text-white font-medium my-2 placeholder:text-white rounded-md p-4 px-6 text-xl w-full font-fredoka ${className}`}
		/>
	);
};

export default Input;
