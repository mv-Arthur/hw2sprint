import { UserType } from "../HW8";

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
	// need to fix any
	switch (action.type) {
		case "sort": {
			// by name
			return action.payload === "up"
				? [
						...state.sort((a: UserType, b: UserType) => {
							if (a.name.toLowerCase() < b.name.toLowerCase()) {
								return -1;
							}

							if (a.name.toLowerCase() > b.name.toLowerCase()) {
								return 1;
							}

							return 0;
						}),
				  ]
				: [
						...state.sort((a: UserType, b: UserType) => {
							if (a.name.toLowerCase() < b.name.toLowerCase()) {
								return 1;
							}

							if (a.name.toLowerCase() > b.name.toLowerCase()) {
								return -1;
							}

							return 0;
						}),
				  ]; // need to fix
		}
		case "check": {
			return state.filter((el) => el.age > 18); // need to fix
		}
		default:
			return state;
	}
};
