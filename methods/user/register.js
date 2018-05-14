

module.exports = (models, req, res) => {

    // first I hash the password, then I will store the new user creds
    // into the database, next I make a jwt token and send a header with newly
    // created jwt token
    const filteredCredValues = res.locals.filteredData;
  
    return models.User.hashPassword(filteredCredValues.password).then((hashedPassword) => {

        return hashedPassword;

    }).then((password) => {

        return models.User.registerUser(filteredCredValues.userName, filteredCredValues.email, password)

    }).then((id) => {

        return models.User.generateAuthToken(id);

    }).then((authToken) => {

        res.header('x-auth', authToken).send('User created!');

    }).catch((e) => {

        res.status(500).send(e);

    });

}