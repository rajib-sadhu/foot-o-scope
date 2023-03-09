const FunaService = require('@brianmmdev/faunaservice');

exports.handler = (event, context) =>{

    const service = new FunaService("")


    return{ 
        statusCode: 200,
        body: "Hello World"
    }
}