module.exports = {
    // just an example of what it would look like
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    mongoURI: process.env.MONGODB_URI,
    redirectDomain: process.env.REDIRECT_DOMAIN,
    devOrProd: process.env.ENV
};