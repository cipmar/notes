var AWS = require("aws-sdk");
var resp = require("./response-lib.js");

exports.handler = (event, context, callback) => {
    const params = {
        TableName: "notes",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };
    
    var dynamoDb = new AWS.DynamoDB.DocumentClient();
    
    dynamoDb.query(params, function(err, data) {
        const response = err 
                ? resp.failure({status: false, error: err}) 
                : resp.success(data.Items);

        callback(null, response);
    });
};