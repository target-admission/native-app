// Axios
// import config from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { authService } from "./auth";
// import crypto from "@/utilities/crypto";

// console.log(process.env, process.env.EXPO_PUBLIC_API_URL, "boom");

// Configuring root url
export const rootURL: string | undefined =
	process.env.EXPO_PUBLIC_API_URL || "https://api.target-admission.tam11a.dev/";

// configuring axios on initial load with the authorization token from localstorage it exists
export const instance = axios.create({
	baseURL: rootURL,
	headers: {
		accept: "*/*",
	},
});

instance.interceptors.request.use((configuration) => {
	// Check if the token exists in cookies
	// const token = authService.getToken();

	// if (token) {
	// 	configuration.headers.Authorization = `Bearer ${token}`;
	// }

	// configuration.headers.set("x-api-key", crypto?.encryptKey?.(config.xApiKey));

	return configuration;
});

// update authorization token from instance if exists or remove if not exists
export const updateInstanceAuthorization = async () => {
	await Promise.resolve(
		instance.interceptors.request.use(async (req: any) => {
			const token = await AsyncStorage.getItem("@app:jwt");
			req.headers["Authorization"] = token ? `Bearer ${token}` : "";
			return req;
		})
	);
};

export default instance;
