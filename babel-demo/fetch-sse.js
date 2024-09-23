const fetchSSE = () => {
    fetch(url, {
        method: 'POST',
        headers: {
            token: authToken,
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: {
            // ...
        },
    })
        .then((response) => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            const readChunk = () => {
                return reader.read().then(appendChunks);
            };

            const appendChunks = (result) => {
                const chunk = decoder.decode(result.value || new Uint8Array(), {
                    stream: !result.done,
                });
                const parseData = JSON.parse(chunk);
                // do something with parseData

                if (!result.done) {
                    return readChunk();
                }
            };

            return readChunk();
        })
        .then(() => {
            // when it's done
        })
        .catch((e) => {
            // error
        });
};