
module.exports = (models, req, res) => {
   
    // 1. looks in database to find username that came from the client
    // 2. if we find a match returns user account info, and makes a new authToken(jwt)
    // 3. now finally we will log the user in by sending the authToken back and
    // rendering home page
    const filteredCredValues = res.locals.filteredData;

    return models.User.findUserByUserName(filteredCredValues.userName).then((user) => {

        models.User.comparePasswords(filteredCredValues.password, user[0].user_password);
        return user;

    }).then((user) => {

        return models.User.generateAuthToken(user[0].user_id);

    }).then((authToken) => {

        res.header('x-auth', authToken).render('home.hbs');

    }).catch((e) => {
        
        res.status(400).send('Email or password is incorrect');

    });

}