aws cognito-idp sign-up \
    --region eu-west-1 \
    --client-id 53isf62mv59jd9mqer47oo6nse \
    --username marius.ropotica+1@gmail.com \
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
    --user-pool-id eu-west-1_ki9CmtEJE \
    --username marius.ropotica+1@gmail.com