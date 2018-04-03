import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import * as actionCreators from '../../actions/index';

import MainPanel from './MainPanel/MainPanel';
import Filters from './Filters/Filters';
import MinCalendar from './MinCalendar/MinCalendar';

class Body extends Component {
    componentWillMount(){
        this.props.loadEvents();
    }

    render(){
        return(
            <div className="container">
                <br/>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <MinCalendar />
                        <br />
                        <Filters />
                    </Grid>
                    <Grid item xs={9}>
                        <MainPanel selectedDate={this.props.selectedDate} events={this.props.events} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Body);