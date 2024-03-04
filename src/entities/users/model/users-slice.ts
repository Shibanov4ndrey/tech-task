import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@app/store";
import { User, usersApi } from "@shared";

interface InitialState {
	users: User[] | null;
	filter: string;
	filterDate: string;
}

const initialState: InitialState = {
	users: null,
	filter: "",
	filterDate: "",
};

const slice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setFilter: (
			state,
			{payload}: PayloadAction<{ value: string }>,
		) => {
			return {
				...state,
				filter: payload.value,
			};
		},
		setFilterDate: (
			state,
			{payload}: PayloadAction<{ value: string }>,
		) => {
			return {
				...state,
				filterDate: payload.value,
			};
		},
		deleteUser: (
			state,
			{payload}: PayloadAction<{ value: User }>,
		) => {
			return {
				...state,
				users: state.users ? state.users.filter((user) => user.email !== payload.value.email ) : null,
			};
		},
		logout: () => initialState,
	},
	extraReducers: (build) => {
		build.addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, action) => {
			state.users = action.payload.results;
		});
	},
});

export default slice.reducer;

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilter = (state: RootState) => state.users.filter;
export const selectFilterDate = (state: RootState) => state.users.filterDate;

export const userSliceActions = slice.actions;

export const usersSelectors = {
	selectUsers,
	selectFilter,
	selectFilterDate
};