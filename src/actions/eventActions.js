import axios from 'axios';
import {
    FETCH_EVENTS,
    SET_DATE,
    ROOT_URL
} from './index';

/**
 *  TODO: Make this more efficient
 *        Is there a way to export the date parameter from BigCalendar Module to limit event pull to only the currently viewed date.
 *        Gotta figure that out, no big
 */
export function loadEvents(){
    const eventsData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/events`)
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++){ 
                eventsData.push({
                    id: response.data.data[i].id,
                    type: response.data.data[i].type,
                    title: response.data.data[i].attributes['name'], // Big Calendar only reads the attibute 'title' not 'name'
                    cohosts: response.data.data[i].attributes['cohosts'],
                    costToAttend: response.data.data[i].attributes['cost-to-attend'],
                    creator: response.data.data[i].attributes['creator'],
                    group: response.data.data[i].attributes['group'],
                    location: response.data.data[i].attributes['location'],
                    start: new Date(response.data.data[i].attributes['start-time']),
                    end: new Date(response.data.data[i].attributes['end-time']),
                    description: response.data.data[i].attributes['description'],
                    externalLink: response.data.data[i].attributes['external-link'],
                    eventIconURL: response.data.data[i].attributes['event-icon-url'],
                    eventBannerURL: response.data.data[i].attributes['event-banner-url'],
                    isPrivate: response.data.data[i].attributes['is-private'],
                    eventType: response.data.data[i].attributes['event-type'],
                    targetAudience: response.data.data[i].attributes['target-audience'],
                });
            }
            dispatch(updateEvents(eventsData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function updateEvents(eventsData){
    return {
        type: FETCH_EVENTS,
        events: eventsData
    }
}

export function updateSelectedDate(selectedDate){
    return {
        type: SET_DATE,
        selectedDate: selectedDate
    }
}