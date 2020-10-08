export function createData(data){
	console.log("data", data);
	return{type: "ADD_TASK", payload: data}
}


export function changeStatusAction(data, id){
	console.log("update", data, id)
	return{type: "UPDATE_TASK", payload: {newUpdatedData: data, updatedId: id}}
}

export function deleteTaskId(id){
	console.log("delete id", id)
	return{type: "DELETE_TASK", payload: id}
}