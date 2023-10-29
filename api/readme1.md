Deploy express api Using serverless-http  from local Machine code in zip format

I have a simple Express API that I want to deploy using Serverless Framework and the serverless-http plugin. 

Step 1 - Create your API 

Step 2 - Install serverless-http and modify code for serverless deploy
npm i serverless-http

step 3- Login to aws and go to lamda  and create a lamda function with configuration , choose nodejs for runtime environment

step 4 - Configure Trigger - here we will use API gateway 
Why API gateway ?
API Gateway is an AWS service used to manage web traffic, construct APIs, and secure dev/test/prod environments. 

step 5 - Deploy and test 
