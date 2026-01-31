export function movieReducer(state = [{ id: 1, name: "Book" }], action) {
	if (action.type == "ADD") {
		return [...state, { id: 2, name: "Pen" }];
	}
	return state;
}
