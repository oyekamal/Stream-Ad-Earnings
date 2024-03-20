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


export function* postAdsGroups({ token, payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads_group/`;
    try {
        const data = yield call(() =>
            fetch(requestUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `token ${token}`,
                },
                body: JSON.stringify(payload),
            })
        );
        const parsedData = yield data.json();
        // yield put(AdsGroupsSuccess(parsedData));
        message.success("Ads groups successfully added");
    } catch (err) {
        // yield put(AdsGroupsFailed());
    }
}


export function* putAdsGroups({ token, payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads_group/${payload.id}`;
    try {
        const data = yield call(() =>
            fetch(requestUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `token ${token}`,
                },
                body: JSON.stringify(payload),
            })
        );
        const parsedData = yield data.json();
        // yield put(AdsGroupsSuccess(parsedData));
        message.success("Ads groups successfully Edit");
    } catch (err) {
        // yield put(AdsGroupsFailed());
    }
}

export function* deleteAdsGroups({ token, id }: any): any {

    const requestUrl = `http://localhost:8000/api/ads_group/${id}`;
    try {
        const data = yield call(() =>
            fetch(requestUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `token ${token}`,
                },
                // body: JSON.stringify(payload),
            })
        );
        const parsedData = yield data.json();
        // yield put(AdsGroupsSuccess(parsedData));
        message.success("Ads groups successfully Deleted");
    } catch (err) {
        // yield put(AdsGroupsFailed());
    }
}

function* adSaga() {
    yield takeEvery("AdsGroups/GetAdsGroups", getAdsGroups);
}

export default adSaga;
