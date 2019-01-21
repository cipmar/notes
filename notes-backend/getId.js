var AWS = require("aws-sdk");
var resp = require("response-lib");

exports.handler = (event, context, callback) => {
    const params = {
        TableName: "notes",
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };
    
    var dynamoDb = new AWS.DynamoDB.DocumentClient();
    
    dynamoDb.get(params, function(err, data) {
        const response = err 
                ? resp.failure({status: false, error: err})
                : resp.success(data.Item);

        callback(null, response);
    });
};