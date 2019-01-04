var AWS = require("aws-sdk");
var resp = require("./response-lib.js");

exports.handler = (event, context, callback) => {
    var data = JSON.parse(event.body);

    const params = {
        TableName: "notes",
        Key: {
            "userId": event.requestContext.identity.cognitoIdentityId,
            "noteId": event.pathParameters.id
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":content": data.content || null,
            ":attachment": data.attachment || null
        },
        ReturnValues: "ALL_NEW"
    };

    var dynamoDb = new AWS.DynamoDB.DocumentClient();    

    dynamoDb.update(params, function(err, data) {
        const response = err 
                ? resp.failure({status: false, error: err})
                : resp.success({status: true});
                
        callback(null, response);
    });
};