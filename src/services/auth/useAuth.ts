import { useEffect, useState } from "react";
import { authService } from "./auth.service";
import { useGetValidation } from "../../queries/auth";

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

	return {
		isLoading: token === null || isValidationInitialLoading,
		token,
		user,
		isValidationLoading,
		isAuthenticated: !!token && !!token?.length,
	};
};
