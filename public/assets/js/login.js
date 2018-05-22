//sign up submit
var signUpSubmitButton = document.querySelector('#su_submit');

signUpSubmitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    let localUri = 'http://localhost:8080/users/';
    let productionUri = 'https://fast-sierra-15363.herokuapp.com/users/';
    let su_email = document.querySelector('#su_email').value.trim();
    let su_password = document.querySelector('#su_password').value.trim();
    fetch(localUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: su_email,
            pass: su_password
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
});

//login submit
var loginSubmitButton = document.querySelector('#li_submit');

loginSubmitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    let localUri = 'http://localhost:8080/users/login';
    let productionUri = 'https://fast-sierra-15363.herokuapp.com/users/login';
    let li_email = document.querySelector('#li_user_name').value.trim();
    let li_password = document.querySelector('#li_password').value.trim();
    fetch(localUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: li_email,
            pass: li_password
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
});

//github button
var githubButton = document.querySelector('#gitLogo');
var githubToken;
var githubUser;
var serverResponse;
githubButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    OAuth.initialize('CZqVop1givjJzfVWLm4K3YCalTg');
    OAuth.popup('github').then(github => {
        githubToken = github;
        githubToken.me()
            .then((user) => {
                githubUser = user;
                console.log(githubUser);
                fetch('https://fast-sierra-15363.herokuapp.com/users/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        githubID: githubUser.id
                    }),
                    // mode: 'cors',
                    // cache: 'default'
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        console.log(githubToken);
        // Retrieves user data from oauth provider

    });
});