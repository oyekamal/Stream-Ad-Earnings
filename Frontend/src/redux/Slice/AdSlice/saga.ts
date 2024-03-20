import { call, put, takeEvery } from "redux-saga/effects";
import { AdsSuccess, AdsFailed, AddAdsSuccess, AddAdsFailed, EditAdsSuccess, EditAdsFailed, DeleteAdsSuccess, DeleteAdsFailed } from "./index";
import { message } from "antd";

export function* getAds({ payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads/`;
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
        yield put(AdsSuccess(parsedData));
    } catch (err) {
        yield put(AdsFailed());
    }
}


export function* postAds({ token, payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads/`;
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
        yield put(AddAdsSuccess());
        message.success("Ad successfully added");
    } catch (err) {
        yield put(AddAdsFailed());
    }
}


export function* putAds({ token, payload }: any): any {

    const requestUrl = `http://localhost:8000/api/ads/${payload.id}`;
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
        yield put(EditAdsSuccess());
        message.success("Ad successfully Edit");
    } catch (err) {
        yield put(EditAdsFailed());
    }
}

export function* deleteAds({ token, id }: any): any {

    const requestUrl = `http://localhost:8000/api/ads/${id}`;
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
        yield put(DeleteAdsSuccess());
        message.success("Ad successfully Deleted");
    } catch (err) {
        yield put(DeleteAdsFailed());
    }
}

function* adSaga() {
    yield takeEvery("Ads/GetAds", getAds);
    yield takeEvery("Ads/AddAds", postAds);
    yield takeEvery("Ads/EditAds", putAds);
    yield takeEvery("Ads/DeleteAds", deleteAds);
}

export default adSaga;
