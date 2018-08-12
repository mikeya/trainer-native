import React, { Component } from 'react';


class createUser extends React.Component {
  newUser (email, password, callback) {
    fetch('http://127.0.0.1:5000/sign-up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'email',
        password: 'password',
      }).then(function(response) {
            console.log(response)
            callback(response)
        }).catch(function(error){
            console.log(error);
        });
    });
  }
};


// export default createUser