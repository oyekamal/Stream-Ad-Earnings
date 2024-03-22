import { createSlice } from "@reduxjs/toolkit";


export interface AdsData {
    result: [],
    pervious: String,
    next: String,
    count: Number
}
export interface AdsDetails {
    AdsData: AdsData;
    loading: boolean;
    error: boolean;
}

export interface AddAdsDetails {
    loading: boolean;
    error: boolean;
  }

  export interface EditAdsDetails {
    loading: boolean;
    error: boolean;
  }
  export interface DeleteAdsDetails {
    loading: boolean;
    error: boolean;
  }

  export interface CurrentAdGroup {
    currentAdArray: [];
  }


export interface Adstate {
    AdsDetails: AdsDetails;
    AddAdsDetails: AddAdsDetails;
    EditAdsDetails: EditAdsDetails;
    DeleteAdsDetails: DeleteAdsDetails;
    CurretAds: CurrentAdGroup;
}

export const initialState: Adstate = {
    AdsDetails: {
        AdsData: {
            result: [],
            pervious: "",
            next: "",
            count: 0
        },
        loading: false,
        error: false,
    },
    AddAdsDetails:
    {
        loading: false,
        error: false,
    },
    EditAdsDetails:
    {
        loading: false,
        error: false,
    },
    DeleteAdsDetails:
    {
        loading: false,
        error: false,
    },
    CurretAds: {
        currentAdArray: []
    }
};

const AdsSlice = createSlice({
    name: "Ads",
    initialState,
    reducers: {
        // GET api
        GetAds: (state) => {
            state.AdsDetails.loading = true;
        },
        AdsSuccess: (state, action) => {
            state.AdsDetails.AdsData = action.payload;
        },
        AdsFailed: (state) => {
            state.AdsDetails.loading = false;
            state.AdsDetails.error = true;
        },
        //  POST api
        AddAds: (state) => {
            state.AddAdsDetails.loading = true;
        },
        AddAdsSuccess: (state) => {
            state.AddAdsDetails.loading = false;
        },
        AddAdsFailed: (state) => {
            state.AddAdsDetails.loading = false;
            state.AddAdsDetails.error = true;
        },
        // END POST api
        // PUT api
        EditAds: (state) => {
            state.EditAdsDetails.loading = true;
        },
        EditAdsSuccess: (state) => {
            state.EditAdsDetails.loading = false;
        },
        EditAdsFailed: (state) => {
            state.EditAdsDetails.loading = false;
            state.EditAdsDetails.error = true;
        },
        // END PUT api
        // DELETE api
        DeleteAds: (state) => {
            state.EditAdsDetails.loading = true;
        },
        DeleteAdsSuccess: (state) => {
            state.EditAdsDetails.loading = false;
        },
        DeleteAdsFailed: (state) => {
            state.EditAdsDetails.loading = false;
            state.EditAdsDetails.error = true;
        },
        CurrentAd: (state, action) => {
            const {item} = action.payload;
            state.CurretAds.currentAdArray = item;
        },
        // END DELETE api
    },
});

export const {
    GetAds,
    AdsSuccess,
    AdsFailed,
    AddAds,
    AddAdsSuccess,
    AddAdsFailed,
    EditAds,
    EditAdsSuccess,
    EditAdsFailed,
    DeleteAds,
    DeleteAdsSuccess,
    DeleteAdsFailed,
    CurrentAd
} = AdsSlice.actions;

export default AdsSlice.reducer;
