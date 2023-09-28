// Instance

// Third Party
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { ILogin, IUpdateUser } from "./types";
import instance, { updateInstanceAuthorization } from "../../services";

//Login Function
const login = (data: ILogin) => {
	return instance.post("/auth/signin", { ...data });
};

export const useLogin = () => {
	return useMutation(login);
};

//Logout function with instance
const logout = () => {
	return instance.delete("/auth/signout");
};
export const useLogout = () => {
	return useMutation(logout);
};

// Validation function with instance
const getValidateUser = () => {
	updateInstanceAuthorization();
	console.log(instance.defaults.headers);
	return instance.get("/auth/validate");
};

export const useGetValidation = (token: string | null) => {
	return useQuery(["/auth/validate", token], getValidateUser, {
		enabled: token !== null && token?.length > 0,
		retry: 1,
		onError: async (error: { request: { status: number } }) => {
			return error.request.status;
		},
		// networkMode: "offlineFirst",
	});
};

// User information update
const updateUserInfo = ({ data }: { data: IUpdateUser | any }) => {
	return instance.patch(`/auth/update`, {
		...data,
	});
};

export const useUpdateUserInfo = () => {
	const query = useQueryClient();
	return useMutation([], updateUserInfo, {
		onSuccess: () => {
			query.invalidateQueries(["/auth/validate"]);
		},
	});
};

// User password reset
const updatePassword = (data: {
	current_password?: string;
	new_password?: string;
}) => {
	return instance.patch(`/admin/reset-password`, {
		...data,
	});
};

export const useUpdatePassword = () => useMutation(updatePassword);
