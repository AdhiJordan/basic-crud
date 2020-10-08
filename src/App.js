import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createData} from './actions/index';
import Display from './Display';

class Home extends Component{

  state = {
    getData: ""
  }

  handleChange(event){
    this.setState({
      getData: event.target.value
    })
  }

  submitHandler(event){
    event.preventDefault();
    let obj = {};
    obj['data'] = this.state.getData;
    obj['status'] = "active";
    this.props.createData(obj);
    this.setState({
      getData: ""
    })
  }

  render(){
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                  <input type="text" value={this.state.getData} onChange={this.handleChange.bind(this)} placeholder="Enter task..." />
                  <button type="submit">Create</button>
                </form>
                <Display />
            </div>
        ); 
  }
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({createData: createData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
