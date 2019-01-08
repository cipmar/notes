aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 3vct6ajua5g22i75fp2a34t4vs \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_JOjyGHXkw \
    --username marius.ropotica+1@gmail.com