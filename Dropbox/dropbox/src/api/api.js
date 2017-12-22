const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
         body: JSON.stringify(payload)

    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const dosignup = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const douploadfile = (payload) =>
    fetch(`${api}/users/fileupload`, payload ).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const folder = (payload) =>
    fetch(`${api}/users/createdirectory`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const view = (payload) =>
    fetch(`${api}/users/list`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const viewfiles = (payload) =>
    fetch(`${api}/users/listfiles`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const star = (payload) =>
    fetch(`${api}/users/star`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const sharefolder = (payload) =>
    fetch(`${api}/users/createdirectoryshare`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updatestar = (payload) =>
    fetch(`${api}/users/updatestar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const childview = (payload) =>
    fetch(`${api}/users/childlist`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const childviewfile = (payload) =>
    fetch(`${api}/users/childfiles`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const downloadfiles = (payload) =>
    fetch(`${api}/users/updateuseractivity2`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const fileshare = (payload) =>
    fetch(`${api}/users/fileshare`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res.status);
        return res.status;
    })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const useractivity = (payload) =>
    fetch(`${api}/users/useractivity`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updateuseractivity = (payload) =>
    fetch(`${api}/users/updateuseractivity`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });

export const activity = (payload) =>
    fetch(`${api}/users/activity`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function(resp) { return resp.json(); })

        .catch(error => {
            console.log("This is error");
            return error;
        });