/**
 * Created by Welington on 30/01/2019.
 */


/**
 * @api {GET} /api/messages Get All Messages
 * @apiGroup Sms
 * @apiversion 1.0.0
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * [
        {
            "_id": "5c5375dd5001be3274e3e7c8",
            "userID": "5be031d249edd40014019e2c",
            "message": "ola mundo",
            "to": "12988121269",
            "from": "12988121269",
            "dateTime": "2019-01-31T22:25:33.284Z"
        }
 ]
 */

/**
 * @api {POST} /api/message Create sms message
 * @apiGroup Sms
 * @apiversion 1.0.0
 * @apiParam {string{1..255}} message
 * @apiParamExample {json} input
 * {
 *	"message": "ola mundo"
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
        "_id": "5c5375dd5001be3274e3e7c8",
        "userID": "5be031d249edd40014019e2c",
        "message": "ola mundo",
        "to": "12988121269",
        "from": "12988121269",
        "dateTime": "2019-01-31T22:25:33.284Z"
   }
 */


