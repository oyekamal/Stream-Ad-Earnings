import { call, put, takeEvery } from "redux-saga/effects";
import { AdsGroupsSuccess, AdsGroupsFailed, AddAdsGroupsSuccess, AddAdsGroupsFailed, EditAdsGroupsSuccess, EditAdsGroupsFailed, DeleteAdsGroupsSuccess, DeleteAdsGroupsFailed } from "./index";
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
        yield put(AddAdsGroupsSuccess());
        message.success("Ads groups successfully added");
    } catch (err) {
        yield put(AddAdsGroupsFailed());
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
        // const parsedData = yield data.json();
        yield put(EditAdsGroupsSuccess());
        message.success("Ads groups successfully Edit");
    } catch (err) {
        yield put(EditAdsGroupsFailed());
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
        yield put(DeleteAdsGroupsSuccess());
        message.success("Ads groups successfully Deleted");
    } catch (err) {
        yield put(DeleteAdsGroupsFailed());
    }
}

function* adSaga() {
    yield takeEvery("AdsGroups/GetAdsGroups", getAdsGroups);
    yield takeEvery("AdsGroups/AddAdsGroups", postAdsGroups);
    yield takeEvery("AdsGroups/EditAdsGroups", putAdsGroups);
    yield takeEvery("AdsGroups/DeleteAdsGroups", deleteAdsGroups);
}

export default adSaga;
