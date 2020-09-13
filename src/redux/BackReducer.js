const GlobalState = {
    detail: false
}

export default (state = GlobalState, { type }) => {
    switch (type) {
        case "Home":
            return { ...GlobalState, detail: false }
        case "Detail":
            return { ...GlobalState, detail: true }
        default:
            return state
    }
}
