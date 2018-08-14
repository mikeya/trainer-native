export const signUp = (email, password) => {
    return fetch('https://www.surewhynotokay.com/sign-up', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then((response) => response.json());
};

export const activate = (activationKey) => {
    return fetch(`https://www.surewhynotokay.com/activate/${activationKey}`)
        .then((response) => response.json())
};

export const login = (email, password) => {
    return fetch('https://www.surewhynotokay.com/token', {
        method: 'POST',
        headers: {'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent( email + ":" + password)))}
    })
    .then((response) => response.json())
    .then((responseJson) => {
        localStorage.setItem('token', responseJson.token);
        return true;
    });
};

