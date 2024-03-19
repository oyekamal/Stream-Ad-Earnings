import { call, put, takeEvery } from "redux-saga/effects";
import { AdsGroupsSuccess, AdsGroupsFailed } from "./index";
import { message } from "antd";

export function* getAdsGroups({ payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads_group/`;
    try {
        const data = yield call(() =>
            fetch(requestUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `token ${payload.token}`,

                },
            })
        );
        const parsedData = yield data.json();
        yield put(AdsGroupsSuccess(parsedData));
    } catch (err) {
        yield put(AdsGroupsFailed());
    }
}

function* adSaga() {
    yield takeEvery("AdsGroups/GetAdsGroups", getAdsGroups);
}

export default adSaga;
