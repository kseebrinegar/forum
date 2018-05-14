
class CheckIncomingDataValues {

    isValid(values) {
        
        for (let key in values) {
            // this is checking object for false value
            // if so, return false
            if (values[key] === false) {
               return false;
            }
        }

        return true;
    }

    checkUserNameValue(userName) {

        var userName = userName.trim().toLowerCase(); // trims off all whitespace from username

        return (userName.length >= 3 && userName.length <= 15 && userName.match(/[\W +\_]/g) === null) ? userName : false;
    }

    checkEmailValue(email) {

        var email = email.trim().toLowerCase(); // trims off all whitespace from email

        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) ? email : false;
    }

    checkPasswordValue(password) {

        return password.length >= 6 ? password : false;
    }

    checkAuthTokenValue(authToken) {
      
        return authToken !== undefined && authToken.length >= 1 ? authToken : false;
        
    }

}

module.exports = CheckIncomingDataValues;