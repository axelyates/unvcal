import axios from 'axios';
import {
    FETCH_GROUPS,
    ROOT_URL,
} from './index';

/**
 *  TODO: Make this more efficient
 *        Is there a way to export the date parameter from BigCalendar Module to limit event pull to only the currently viewed date.
 *        Gotta figure that out, no big
 */
export function loadGroups(){
    const groupsData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/groups`)
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++){ 
                groupsData.push({
                    id: response.data.data[i].id,
                    type: response.data.data[i].type,
                    description: response.data.data[i].attributes['description'],
                    events: response.data.data[i].attributes['events'],
                    managers: response.data.data[i].attributes['managers'],
                    name: response.data.data[i].attributes['name'],
                    parentGroups: response.data.data[i].attributes['parent-groups'],
                    subGroups: response.data.data[i].attributes['sub-groups'],
                });
            }
            dispatch(updateGroups(groupsData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function updateGroups(groupsData){
    return {
        type: FETCH_GROUPS,
        groups: groupsData
    }
}