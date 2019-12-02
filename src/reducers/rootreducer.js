const initState = {
    categories: [
        {
            id: 1,
            name: "hellotest",
            body: "asdasdasdasdasd"
        },
    ],
    items: []
}

const rootreducer = (state = initState, action) => {
    return state;
}

export default rootreducer;