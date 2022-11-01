
function wrapPromise(promise) {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        async res => {
            status = 'success';
            response = await res.json();
        },
        err => {
            status = 'error';
            response = err;
        },
    );

    const handler = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw response;
        },
        success: () => {
            console.log(response)
            return response
        },
        default: () => {
            throw suspender;
        },
    };

    const read = () => {
        console.log(status);
        const result = handler[status] ? handler[status]() : handler.default();
        console.log(result);
        return result;
    };
    const reset = () => {
        status = 'pending';
        response = undefined;

    }

    return { read, reset };
}

export default wrapPromise;