export const signUp = (email, password) => {
    return fetch('http://localhost:5000/sign-up', {
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
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson.activation_url;
    }).catch((error) => console.warn(error))
};

export const activate = (activationKey) => {
    return fetch(`http://localhost:5000/activate/${activationKey}`)
        .then((response) => response.json())
        .then((responseJson) => true)
        .catch((error) => false);
};

export const login = (email, password) => {
    return fetch('http://localhost:5000/token', {
        method: 'POST',
        headers: {'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent( email + ":" + password)))}
    })
    .then((response) => response.json())
    .then((responseJson) => {
        localStorage.setItem('token', responseJson.token);
        return true;
    });
};

