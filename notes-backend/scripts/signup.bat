aws cognito-idp sign-up ^
    --region eu-west-1 ^
    --client-id 1e60d1j29i1am15tr8mdla4siu ^
    --username marius.ropotica+1@gmail.com ^
    --password Passw0rd!

aws cognito-idp admin-confirm-sign-up ^
    --user-pool-id eu-west-1_ugI2pSCyE ^
    --username marius.ropotica+1@gmail.com 