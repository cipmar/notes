aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 4h1k29vlp8l618ac7h3jeu6too \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 4h1k29vlp8l618ac7h3jeu6too \
    --username marius.ropotica+2@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_BF39j7DZW \
    --username marius.ropotica+1@gmail.com

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_BF39j7DZW \
    --username marius.ropotica+2@gmail.com