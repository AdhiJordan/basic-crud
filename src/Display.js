import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeStatusAction, deleteTaskId} from './actions/index';
import DisplayTask from './DisplayTask'

class Display extends Component{

  state = {
    getTaskDetails: []
  }

  componentWillReceiveProps(newProps){
    console.log("new", newProps)
    if(newProps.taskDetails){
      this.setState({
        getTaskDetails: newProps.taskDetails
      })
    }
  }

  changeStatus(data, index){
    console.log("check--->", data, index)
    let obj = {};
    if(data.status === "active"){
      obj['status'] = "inactive";
    }else{
      obj['status'] = "active";
    }
    obj['data'] = data.data;
    this.props.changeStatusAction(obj, index);
  }

  deleteTask(id){
    this.props.deleteTaskId(id);
  }

  render(){
    const {getTaskDetails} = this.state;
        return (
            <div>
            {(getTaskDetails.map((task, index) => {
                  return(
                    <DisplayTask
                    key={index}
                    id={index}
                    totalTask={task}
                    taskData={task.data}
                    taskStatus={task.status}
                    setChangestatus={this.changeStatus.bind(this)}
                    setDeleteTask={this.deleteTask.bind(this)}
                    />
                  )
                }))}
            </div>
        ); 
  }
}

const mapStateToProps = (state) => {
    return{taskDetails: state.tasks.task}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({changeStatusAction: changeStatusAction,deleteTaskId: deleteTaskId}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
