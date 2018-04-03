import axios from 'axios';
import {
    FETCH_ACCOUNTS,
    ROOT_URL,
} from './index';

/**
 *  TODO: Make this more efficient
 *        Is there a way to export the date parameter from BigCalendar Module to limit event pull to only the currently viewed date.
 *        Gotta figure that out, no big
 */
export function loadAccounts(){
    const accountsData = []
    return(dispatch)=>{
        return axios.get(`${ROOT_URL}/accounts`)
        .then(response => {
            console.log(response.data);
            for(let i = 0; i < response.data.data.length; i++){ 
                accountsData.push({
                    id: response.data.data[i].id,
                    type: response.data.data[i].type,
                    accountType: response.data.data[i].attributes['account-type'],
                    apiKeys: response.data.data[i].attributes['api-keys'],
                    email: response.data.data[i].attributes['email'],
                    euid:  response.data.data[i].attributes['et1617'],
                    name: response.data.data[i].attributes['name'],
                });
            }
            dispatch(updateAccounts(accountsData));
        }).catch(error => {
            console.log(error);
        });
    }
}

export function updateAccounts(accountsData){
    console.log(accountsData);
    return {
        type: FETCH_ACCOUNTS,
        accounts: accountsData
    }
}