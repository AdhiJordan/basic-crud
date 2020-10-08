const TaskReducer = (state = {task: []}, action) => {
	switch(action.type){
		case "ADD_TASK":
		return {task: [...state.task.concat(action.payload)]}
		break;

		case "UPDATE_TASK":
		let oldArray = [...state.task];
		const findIndexToUpdate = oldArray.findIndex((data, id) => {
			console.log(id);
			console.log(action.payload.updatedId);
			return id === action.payload.updatedId;
		})
		console.log("findIndexToUpdate", findIndexToUpdate)
		return {task: [...state.task.slice(0, findIndexToUpdate), action.payload.newUpdatedData, ...state.task.slice(findIndexToUpdate + 1)]}
		break;

		case "DELETE_TASK":
		return {task: [...state.task.slice(0, action.payload), ...state.task.slice(action.payload + 1)]}
		break;

		default: 
		return state;
	}
}

export default TaskReducer;

