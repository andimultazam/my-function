import { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`)
  const response = {
    statusCode: 200,
    body: JSON.stringify('Updated handler with typescript!'),
  };
  return response;
}