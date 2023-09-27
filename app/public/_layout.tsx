import { useEffect } from "react";
import { useAuth } from "../../src/services/auth";
import { Slot, useRouter } from "expo-router";
import Loading from "../../src/components/Loading";

function PublicLayout() {
	const { isLoading, isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		checkAuth();
	}, [router]);

	const checkAuth = async () => {
		if (!isAuthenticated) return;
		router.replace("/private/sign");
	};

	if (isLoading) return <Loading />;

	return (
		<>
			<Slot />
		</>
	);
}

export default PublicLayout;
