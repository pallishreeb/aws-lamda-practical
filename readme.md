## What is AWS Lamda?

- It is  serverless compute service

- Run code without managing servers (AWS will take care of your server , where you will deploy , which machine what configuration and all)

-And the main part is run the code whenever you need only 

-It allows running your code without provisioning or managing servers

-You pay for what you use.
## What are some of its advantages over other cloud services like EC2, ECS and Fargate ?
- You don't have to worry about scaling up/down instances as it scales automatically based on demands
- No maintenance required
- Cost effective
- Highly scalable

# How does Lambda work underneath?
Lambda runs your code in response to triggers such as HTTP requests via Amazon API Gateway, modifications to objects in Amazon S3 buckets, database operations
- The lambda function runs in a container that gets created when we create our first lamdba function
- This container contains all the dependencies needed by this particular function
- When we invoke the lambda function, an event object will be passed which can contain any data related to the invocation request (e.g., API )
- Whenever an event triggers, it executes the relevant code within the function
- When the execution completes successfully then the response is sent back to the caller
- If there is any error during the process, retries can be done for certain types of errors upto three times
- After maximum attempts, the invocation fails and no further attempt will be made
- There may also be cases where the timeout period expires before the function finishes executing
- In such case, the request will fail with a time out exception
- We can configure how long should the lambda wait until timing out using configuration settings
- For example if we set the value to 10 seconds,then after 10 seconds the lambda will stop waiting and return a failure message

## When should you deploy to lamda

- event based triggers 
- Batch processing jobs (for example: data transformation)
- Real time file processing (like real time image uploads being processed)
- Need one function to  quickly develop and deploy 
- For backend utilities which do not require constant CPU usage
- To reduce costs, if the application includes resources that are only used infrequently or are expensive to run.


Step 1 -
Create a new lambda function
Step 2- 
Choose runtime environment
Step 3-
Write the code
Step 4-
Configure the trigger
Step 5-
Deploy



