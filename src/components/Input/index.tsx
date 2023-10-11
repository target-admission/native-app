import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface CustomTextInputProps extends TextInputProps {
	// Add any additional props specific to your custom TextInput
	error?: boolean | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const Input: React.FC<CustomTextInputProps> = ({
	className,
	error = false,
	...props
}) => {
	return (
		<>
			<TextInput
				cursorColor={"#f00"}
				placeholderTextColor={"#ffffff30"}
				style={{
					backgroundColor: "#ffffff07",
					...(!!error && {
						borderColor: "#ff000077",
						borderWidth: 1,
					}),
				}}
				blurOnSubmit
				className={`text-white font-medium my-2 placeholder:text-white rounded-md p-4 px-6 text-xl w-full font-fredoka ${className}`}
				{...props}
			/>
			{!!(
				typeof error !== "boolean" &&
				(error?.message?.toString?.() || error?.type?.toString?.())
			) && (
				<View>
					<Text
						style={{
							color: "#ff0000",
						}}
						className="font-fredoka uppercase text-right mb-3"
					>
						{error?.message?.toString?.() || error?.type?.toString?.()}
					</Text>
				</View>
			)}
		</>
	);
};

export default Input;
