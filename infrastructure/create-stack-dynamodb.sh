aws cloudformation delete-stack \
    --stack-name dynamodb-table

aws cloudformation create-stack \
    --stack-name dynamodb-table \
    --template-body file://dynamodb-table.yaml \
    --parameters \
        ParameterKey=TableNameParam,ParameterValue=notesdev \
        ParameterKey=TableThroughputParam,ParameterValue=5 \
    --capabilities CAPABILITY_AUTO_EXPAND