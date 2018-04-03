import axios from 'axios';
import {
    FETCH_LOCATIONS,
    ROOT_URL,
} from './actionTypes';

/**
 *  TODO: Make this more efficient
 *        Is there a way to export the date parameter from BigCalendar Module to limit event pull to only the currently viewed date.
 *        Gotta figure that out, no big
 */
export function loadLocations(){
    const locationsData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/locations`)
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++){ 
                locationsData.push({
                    id: response.data.data[i].id,
                    type: response.data.data[i].type,
                    address: response.data.data[i].attributes['address'],
                    description: response.data.data[i].attributes['description'],
                    geolocation: response.data.data[i].attributes['geolocation'],
                    locationType:  response.data.data[i].attributes['location-type'],
                    managers:  response.data.data[i].attributes['manager'],
                    name: response.data.data[i].attributes['name'],
                    rooms: response.data.data[i].attributes['rooms'],
                });
            }
            dispatch(updateLocations(locationsData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function updateLocations(locationsData){
    return {
        type: FETCH_LOCATIONS,
        locations: locationsData
    }
}