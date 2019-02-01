/**
 * Created by Welington on 29/01/2019.
 */

module.exports = loadRoutes;

async function loadRoutes(app) {
    require('../modules/message/message.route')(app);
    require('../modules/comment/comment.route')(app);
    require('../modules/notification/notification.route')(app);
}