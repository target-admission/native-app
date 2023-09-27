import { useRouter } from "expo-router";
import { ComponentType, useEffect } from "react";
import { useAuth } from "src/services/auth";

export const withoutAuth = <T extends object>(
	WrappedComponent: ComponentType<T>
) => {
	// eslint-disable-next-line react/display-name
	return async (props: T) => {
		const { isAuthenticated } = await useAuth();
		const router = useRouter();

		useEffect(() => {
			if (isAuthenticated) {
				// router.replace(router.query?.to?.toString?.() || "/user");
				router.replace("/private/profile");
			}
		}, [isAuthenticated, router]);

		return <WrappedComponent {...props} />;
	};
};
