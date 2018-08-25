exports.handler = (event, context, callback) => {
  console.log('Handling event: %j', event)
  const result = {
    message: 'My first Lambda API'
  }
  const response = { body: JSON.stringify(result) }
  console.log('Sending response %j', response)
  callback(null, response)
}