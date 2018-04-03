import React, { Component } from 'react';
import FilterListItem from './FilterListItem'
import './FilterList.css';

class FilterList extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        console.log(event);
    }

    renderFilters(filtersData){
        return(
                <li className="col">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                    />
                    <label>{ filtersData.name }</label>
                </li>
        );
    }

    render() {
        return(
            <div className="filter-item">
                <ul className="filter-container">
                    {this.props.filters.map(el => <FilterListItem key={el.id} filter={el}/>)}
                </ul>
            </div>
        );
    }
}

export default FilterList;