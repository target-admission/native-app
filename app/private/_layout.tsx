import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { authService, useAuth } from "../../src/services/auth";
import Loading from "../../src/components/Loading";

function PrivateLayout() {
	const { isLoading, isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		logout();
	}, [router]);

	const logout = async () => {
		if (isAuthenticated) return;
		await authService.removeToken();
		router.replace("/public/sign");
	};

	if (isLoading) return <Loading />;

	return (
		<>
			<Slot />
		</>
	);
}

export default PrivateLayout;
