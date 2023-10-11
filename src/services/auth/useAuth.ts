import { useEffect, useState } from "react";
import { authService } from "./auth.service";
import { useGetValidation, useLogout } from "../../queries/auth";
import { updateInstanceAuthorization } from "..";
import handleResponse from "../../utilites/handleResponse";
import { ToastAndroid } from "react-native";
import { useRouter } from "expo-router";

export const useAuth = () => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState({
		id: 0,
		first_name: "",
		last_name: "",
		username: "",
		gender: "others",
		display_picture: "",
		email: "",
		phone: "",
		dob: "",
		address: "",
		max_session: 0,
		is_active: true,
		verified_at: "",
		created_at: "",
		updated_at: "",
		deleted_at: "",
	});

	useEffect(() => {
		authService.getToken().then((v) => {
			setToken(v || "");
			updateInstanceAuthorization();
		});
	}, []);

	useEffect(() => {
		const unsubscribe = authService.listen((v) => {
			setToken(v);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const {
		data: validationData,
		isLoading: isValidationLoading,
		isInitialLoading: isValidationInitialLoading,
		isError: isValidationError,
		error,
	} = useGetValidation(token);

	useEffect(() => {
		let status = error?.request?.status;

		if (!isValidationError || status !== 401) return;

		// message.open({
		// 	type: "loading",
		// 	content: "Signing out..",
		// 	duration: 0,
		// });
		console.log(status);

		setTimeout(() => {
			authService.removeToken();
			// message.success("Logged out! Please sign in again");
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValidationError]);

	useEffect(() => {
		if (!validationData) return;
		setUser(validationData?.data);
	}, [validationData]);

	const { mutateAsync: logoutAsync, isLoading: isLogoutLoading } = useLogout();
	const router = useRouter();

	const logout = async () => {
		const res = await handleResponse(() => logoutAsync());
		if (res.status) {
			authService.removeToken();
			router.replace("/public/sign");
			ToastAndroid.showWithGravity(
				res.message,
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM
			);
		} else {
			ToastAndroid.showWithGravity(
				res.message,
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM
			);
		}
	};

	return {
		isLoading: token === null || isValidationInitialLoading,
		token,
		user,
		isValidationLoading,
		isAuthenticated: !!token && !!token?.length,
		logout,
		isLogoutLoading,
	};
};
