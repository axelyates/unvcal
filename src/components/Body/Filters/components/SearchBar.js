import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadFilters, searchFilters } from '../../../../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
        this.props.searchFilters(this.state.term);
        console.log(this.state.term);
    }

    render(){
        return(
            <form className="input-group">
                <input 
                    placeholder="Search Filters..."
                    className="Form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadFilters, searchFilters }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);