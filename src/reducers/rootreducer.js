const initState = {
    categories: [
        {
            id: 1,
            name: "hellotest",
            body: "asdasdasdasdasd"
        },
        {
            id: 1,
            name: "hello",
            body: "asdasdasdasdasd"
        },
        {
            id: 1,
            name: "mackenna",
            body: "asdasdasdasdasd"
        },
    ],
    items: [],
    cart: []
}

const rootreducer = (state = initState, action) => {
    return state;
}

export default rootreducer;