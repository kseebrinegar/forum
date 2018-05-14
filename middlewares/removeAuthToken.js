
// just removes old authToken from the users tables based on
// logging out or if another user trys to login in
module.exports = (models) => {
 
    return (req, res, next) => {
      
        const doesAuthTokenExistOrValid = models.CheckIncomingDataValues.checkAuthTokenValue(req.body.authToken);

        if (doesAuthTokenExistOrValid) {

            models.User.findByAuthToken(req.body.authToken).then((results) => {
                next();
            }).catch((e) => {
                console.log(e)
            });

        } else {
          
            next();
        }

    }
}
