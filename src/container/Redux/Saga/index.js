import { all } from "redux-saga/effects";
import Data from "./Data";

const rootSaga = function* rootSaga() {
    yield all([Data()]);
};

export default rootSaga;