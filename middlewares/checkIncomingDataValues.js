
// just checking Incoming data to make sure
// the user is sending the appropriate values
// to backend
module.exports = (models) => {
  
    return (req, res, next) => {
       
        // This first checks to see if the values even exisit. If so 
        // methods will get called to check and validate the data
        // filteredData is an object that has data or 'false' values
        // if object keys have 1 false value, that means user entered Invalid data.
        const filteredData = {
            userName: req.body.userName !== undefined ? models.CheckIncomingDataValues.checkUserNameValue(req.body.userName) : req.body.userName,
            password: req.body.password !== undefined ? models.CheckIncomingDataValues.checkPasswordValue(req.body.password) : req.body.password,
            email: req.body.email !== undefined ? models.CheckIncomingDataValues.checkEmailValue(req.body.email) : req.body.email
        };
        
        // checks if filteredCredValues has 1 false value if so we have invlaid creds
        const isValid = models.CheckIncomingDataValues.isValid(filteredData);
       
        if (!isValid) {

            res.status(401).send('Invalid credentials...');
            return;
        }

        res.locals.filteredData = filteredData;
        next();
    }

}