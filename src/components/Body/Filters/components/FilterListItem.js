import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFilter, removeFilter } from '../../../../actions/index';


class FilterListItem extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event);
    }

    render(){
        return(
            <div>
                <li className="col" key={this.props.filter.id}>
                    <input 
                        type="checkbox" 
                        onChange={event => this.handleChange(event)}
                        className="custom-control-input" 
                    />
                    <label>{ this.props.filter.name }</label>
                </li>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addFilter, removeFilter }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(FilterListItem);