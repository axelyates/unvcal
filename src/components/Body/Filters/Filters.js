import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index';

import SearchBar from './components/SearchBar';
import FilterList from './components/FilterList';
class Filters extends Component {

    componentWillMount(){
        this.props.loadFilters();
    }

    render(){
        return(
            <div>
                <SearchBar />
                <br />
                <FilterList filters={this.props.filters} />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Filters);