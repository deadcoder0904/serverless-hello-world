const env = process.env;

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      env,
      input: event
    })
  };

  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);

  callback(null, response);
};
