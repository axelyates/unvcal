import axios from 'axios';
import {
    FETCH_FILTERS,
    REMOVE_FILTER,
    ADD_FILTER,
    ROOT_URL,
} from './index';

/**
 *  TODO: Make this more efficient
 *        Is there a way to export the date parameter from BigCalendar Module to limit event pull to only the currently viewed date.
 *        Gotta figure that out, no big
 */
export function loadFilters(){
    const filtersData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/groups`)
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++){ 
                filtersData.push({
                    id: response.data.data[i].id,
                    name: response.data.data[i].attributes['name'],
                });
            }
            dispatch(updateFilters(filtersData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function searchFilters(term){
    const filtersData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/groups`)
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++){ 
                if(response.data.data[i].attributes['name'].includes(term)){
                    filtersData.push({
                        id: response.data.data[i].id,
                        name: response.data.data[i].attributes['name'],
                    });
                }
            }
            dispatch(updateFilters(filtersData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function addFilter(filter){
    console.log(filter);
    return {
        type: ADD_FILTER,
        singleFilter: filter
    }
}

export function removeFilter(filter){
    console.log(filter);
    return {
        type: REMOVE_FILTER,
        singleFilter: filter
    }
}


export function updateFilters(filtersData){
    return {
        type: FETCH_FILTERS,
        filters: filtersData
    }
}