import { ComponentType, useEffect } from "react";
import { useRouter } from "expo-router";
import { authService, useAuth } from "../services/auth";

export const withAuth = <T extends object>(
	WrappedComponent: ComponentType<T>
) => {
	// eslint-disable-next-line react/display-name
	return async (props: T) => {
		const { isAuthenticated } = await useAuth();
		const router = useRouter();

		useEffect(() => {
			if (!isAuthenticated) logout();
		}, [isAuthenticated, router]);

		const logout = async () => {
			await authService.removeToken();
			router.replace("/public/sign");
		};

		return <WrappedComponent {...props} />;
	};
};
