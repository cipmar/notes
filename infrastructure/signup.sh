aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 3dcc66b5e2lm1t5k4069tg7f91 \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_w7d0PcP3c \
    --username marius.ropotica+1@gmail.com