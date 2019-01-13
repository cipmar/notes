aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 7b5ric7lurl41ua5uhergi709o \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 7b5ric7lurl41ua5uhergi709o \
    --username marius.ropotica+2@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_PW4NfqaTO \
    --username marius.ropotica+1@gmail.com

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_PW4NfqaTO \
    --username marius.ropotica+2@gmail.com