aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 5r18p7b2kd8vss1fcaj949dnh5 \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_KwPtm93tM \
    --username marius.ropotica+1@gmail.com