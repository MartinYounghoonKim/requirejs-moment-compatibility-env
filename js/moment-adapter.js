define('moment-adapter', ['moment'], function(moment) {
    // Set the global.
    window.moment = moment;

    return moment;
});