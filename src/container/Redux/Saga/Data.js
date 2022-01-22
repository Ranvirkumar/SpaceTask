import { put, takeLatest, call } from "redux-saga/effects";
import ApiCaller from "./../../Utils/ApiCaller";

const callAPI = (payload) => {
    return ApiCaller(`v3/launches?limit=100${payload ? payload : ""}`, "get").then((response) => response);
};

export default function* watchRequest() {
    yield takeLatest("DO_DATA", function* performAction(action) {
        yield put({ type: "DO_DATA_INITIATED" });
        try {
            const data = yield call(callAPI.bind(this, action.payload));
            yield put({ type: "DO_DATA_SUCCESS", payload: data });
        } catch (error) {
            yield put({ type: "DO_DATA_FAILED", payload: error });
        }
    });
}