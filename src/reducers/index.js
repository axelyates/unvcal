import {
    FETCH_EVENTS,
    FETCH_ACCOUNTS,
    FETCH_GROUPS,
    FETCH_FILTERS,
    ADD_FILTER,
    REMOVE_FILTER,
    FETCH_LOCATIONS,
    FETCH_SINGLE_ACCOUNT,
    FETCH_SINGLE_GROUP,
    FETCH_SINGLE_LOCATION,
    SET_DATE
} from '../actions';

let defaultState = {
    events: [],
    filters: [],
    accounts: [],
    groups: [],
    locations: [],
    singleAccounts: [],
    singleGroup: [],
    singleLocation: [],
    selectedEvent: '',
    selectedFilters: [],
    selectedDate: new Date(),
    error: false,
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_ACCOUNTS:
        return {
            ...state,
            accounts: action.accounts
        }
        case FETCH_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case FETCH_FILTERS:
            return {
                ...state,
                filters: action.filters
            }
        case ADD_FILTER:
            return {
                ...state,
                filter: state.selectedFilters.concat(action.singleFilter)
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filter: state.selectedFilters.filter((item, index) => index !== action.index) // this needs to be throughly tested
            }
        case FETCH_GROUPS:
            return {
                ...state,
                groups: action.groups
            }
        case FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            }
        case FETCH_SINGLE_ACCOUNT:
            return {
                ...state,
                singleAccount: action.singleAccount
            }
        case FETCH_SINGLE_GROUP:
            return {
                ...state,
                singleGroup: action.singleGroup
            }
        case FETCH_SINGLE_LOCATION:
            return {
                ...state,
                singleLocation: action.singleLocation
            }
        case SET_DATE:
            return {
                ...state,
                selectedDate: action.selectedDate
            }
        default: 
            return {
                ...state
            }
    }
}

export default mainReducer;