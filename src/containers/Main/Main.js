import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from '../../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';

class Main extends Component {
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <NavBar />
                    <Body events={this.props.events}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Main);