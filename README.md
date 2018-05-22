# serverless-hello-world

> 🚀 Serverless Hello World example that runs every 2 minutes

# 1. Set-Up

Make sure you have Node.js installed and run:

`$ npm i serverless -g`

You can use `serverless` & `sls` interchangeably

Then, check the version to make sure you are using V1.16.0, or later:

`$ sls -v`

# 2. Login

First, log in to the serverless platform in via the CLI

`$ sls login`

After logging into the platfrom via the serverless framework CLI every deploy will be published to the Serverless Platform.

# 3. Create new service

Create a new service using the Node.js template, specifying a unique name and an optional path for your service.

`$ sls create --template aws-nodejs --path my-service`

Change directory to the new service

`$ cd my-service`

# 4. Deploy the service

Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.

Give it a try with a new service, or an existing service:

`$ sls deploy -v`

# 5. Invoke the Function

Invokes a Function and returns logs.

`$ sls invoke -f hello -l`

# 6. Fetch the Function Logs

Open up a separate tab in your console, set your Provider Credentials and stream all logs for a specific Function using this command.

`$ sls logs -f hello -t`

# 7. Remove the Function

If at any point, you no longer need your service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.

`$ sls remove`

> To learn more about Serverless, checkout [Serverless Framework](https://serverless.com), [The Power of Serverless](https://thepowerofserverless.info), [Awesome Serverless](https://github.com/anaibol/awesome-serverless) & [Serverless Stack](https://serverless-stack.com)
