exports.handler = async (event) => {
    // Extract parameters from the event
    const name = event.queryStringParameters.name;
    const number = event.queryStringParameters.number;

    // Check if both parameters are present
    if (!name || !number) {
        return {
            statusCode: 400, // Bad Request
            body: JSON.stringify({ error: "Both 'name' and 'number' query parameters are required." }),
        };
    }

    // Concatenate name and number to create the ID
    const id = name + number;

    return {
        statusCode: 200, // OK
        body: JSON.stringify({ id }),
    };
};

// api?name=abcd&number=123