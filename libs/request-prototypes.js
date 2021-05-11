const fetch = require('isomorphic-unfetch');


const POSTrequest = async ({ endpoint, params }) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        return await response.json()  //we only get here if there is no error
    })
    .then( json => json)
    .catch( err => Promise.reject(err));
};

const POSTrequestWithToken = async ({ endpoint, params, token }) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(params),
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        return await response.json()  //we only get here if there is no error
    })
    .then( json => json)
    .catch( err => Promise.reject(err));
};


const POSTrequestForFileWithToken = async ({ endpoint, params, token }) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(params)
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        // Special mod for testing, not returning data just making sure its ok
        return {ok: response.ok, blob: response.blob()}  //we only get here if there is no error
    })
    .catch( err => Promise.reject(err));
};


const GETrequest = async ({ endpoint }) => {
    return fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        return await response.json()  //we only get here if there is no error
    })
    .then( json => json)
    .catch( err => Promise.reject(err));
};

const GETrequestWithToken = async ({ endpoint, token }) => {
    return fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        return await response.json()  //we only get here if there is no error
    })
    .then( json => json)
    .catch( err => Promise.reject(err));
};

const DELETErequestWithToken = async ({ endpoint, params, token }) => {
    return fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(params), 
    })
    .then(async response => {
        if (!response.ok) { throw await response.json() }
        return await response.json()  //we only get here if there is no error
    })
    .then( json => json)
    .catch( err => Promise.reject(err));
};


module.exports = { POSTrequest, POSTrequestWithToken, POSTrequestForFileWithToken, GETrequest, GETrequestWithToken, DELETErequestWithToken };
