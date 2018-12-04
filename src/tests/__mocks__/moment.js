//import moment from 'moment'; //This is goint to fail as it leads to call the function itself and being so it will raise stack trace and eventually fails because of out of memory at some point

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}