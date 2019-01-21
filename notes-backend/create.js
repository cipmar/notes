var AWS = require("aws-sdk");
var uuid = require("uuid");
var resp = require("response-lib");

exports.handler = (event, context, callback) => {
    var data = JSON.parse(event.body);

    const params = {
        TableName: "notes",
        Item: {
            "userId": event.requestContext.identity.cognitoIdentityId,
            "noteId": uuid.v1(),
            "content": data.content,
            "attachment": data.attachment,
            "createdAt": Date.now()
        }
    };

    var dynamoDb = new AWS.DynamoDB.DocumentClient();

    dynamoDb.put(params, function(err, data) {
        const response = err 
                ? resp.failure({status: false, error: err}) 
                : resp.success(params.Item);

        callback(null, response);
    });
};