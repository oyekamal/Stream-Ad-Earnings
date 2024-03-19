import { createSlice } from "@reduxjs/toolkit";


export interface AdsGroupsData {
    result: [],
    pervious: String,
    next: String,
    count: Number
}
export interface AdsGroupsDetails {
    AdsGroupsData: AdsGroupsData;
    loading: boolean;
    error: boolean;
}

export interface AdsGroupState {
    AdsGroupsDetails: AdsGroupsDetails;
}

export const initialState: AdsGroupState = {
    AdsGroupsDetails: {
        AdsGroupsData: {
            result: [],
            pervious: "",
            next: "",
            count: 0
        },
        loading: false,
        error: false,
    }
};

const AdsGroupsSlice = createSlice({
    name: "AdsGroups",
    initialState,
    reducers: {
        GetAdsGroups: (state) => {
            state.AdsGroupsDetails.loading = true;
        },
        AdsGroupsSuccess: (state, action) => {
            state.AdsGroupsDetails.AdsGroupsData = action.payload;
        },
        AdsGroupsFailed: (state) => {
            state.AdsGroupsDetails.loading = false;
            state.AdsGroupsDetails.error = true;
        },
    },
});

export const {
    GetAdsGroups,
    AdsGroupsSuccess,
    AdsGroupsFailed,
} = AdsGroupsSlice.actions;

export default AdsGroupsSlice.reducer;
