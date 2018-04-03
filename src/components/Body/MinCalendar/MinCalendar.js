import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Calendar from 'react-calendar';
import { updateSelectedDate } from '../../../actions/index';


class MinCalendar extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    state = {
        selectedDate: new Date(),
    }

    onChange = date => this.props.updateSelectedDate(date);

    render(){
        return(
            <Calendar
            onChange={this.onChange}
            value={this.state.selectedDate}
          />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateSelectedDate }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(MinCalendar);