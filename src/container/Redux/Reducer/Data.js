
export default function reducer(
    state = {
        Status: "uninitiated",
        result: [],
    },
    action
) {
    switch (action.type) {
        case "DO_DATA_INITIATED": {
            return { ...state, Status: "initiated" };
        }
        case "DO_DATA_SUCCESS": {
            return { ...state, Status: "success", result: action.payload };
        }
        case "DO_DATA_FAILED": {
            return { ...state, Status: "failed", result: action.payload };
        }
        default: {
            return state;
        }
    }
}