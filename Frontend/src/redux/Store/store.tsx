import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../RootSaga";
import userReducer from "../Slice/authSlice/index";
import adGroupReducer from "../Slice/AdGroupSlice/index";
import adReducer from "../Slice/AdSlice/index";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    AdsGroups: adGroupReducer,
    Ads: adReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
