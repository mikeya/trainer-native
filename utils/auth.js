import Base64 from 'base-64';

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
    console.log(Base64.encode(email + ":" + password))
    return fetch('https://www.surewhynotokay.com/token', {
        headers: {'Authorization': 'Basic ' + Base64.encode(email + ":" + password)}
    })
    .then((response) => response.json());
};

