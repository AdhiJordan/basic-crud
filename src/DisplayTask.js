import React, {Component} from 'react'


export default class DisplayTask extends Component{

	changeStatus(task, index){
		console.log("11111", task, index)
		this.props.setChangestatus(task, index)
	}

	deleteTask(id){
		this.props.setDeleteTask(id)
	}

	render(){
		console.log("props", this.props)
		return(
			 <div key={this.props.id}>
	            <p>{this.props.taskData}</p>
	            <p>{this.props.taskStatus}</p>
	            <button onClick={this.changeStatus.bind(this, this.props.totalTask, this.props.id)}>Status</button>
	            <button onClick={this.deleteTask.bind(this, this.props.id)}>Delete</button>
	        </div>
		)		
	}
}