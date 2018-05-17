var OAuth = require('oauthio');

app.get('/oauth/redirect', oauth.redirect(function(result, req, res) {
    //todo
}));
app.get('/signin', oauth.auth(provider, 'http://your-app.com/oauth/redirect'));