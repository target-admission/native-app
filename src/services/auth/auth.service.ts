import AsyncStorage from "@react-native-async-storage/async-storage";

type Listner = (state: string | null) => void;

export class AuthService {
	private listners = new Set<Listner>();

	async getToken() {
		return await AsyncStorage.getItem("@app:jwt");
	}

	async setToken(token: string) {
		await AsyncStorage.setItem("@app:jwt", token);
		this.listners.forEach((listner) => listner(token));
	}

	async removeToken() {
		await AsyncStorage.removeItem("@app:jwt");
		this.listners.forEach((listner) => listner(null));
	}

	listen(listner: Listner) {
		this.listners.add(listner);
		return () => this.listners.delete(listner);
	}
}

export const authService = new AuthService();
