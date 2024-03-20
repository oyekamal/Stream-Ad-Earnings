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

export interface AddAdsGroupsDetails {
    loading: boolean;
    error: boolean;
  }

  export interface EditAdsGroupsDetails {
    loading: boolean;
    error: boolean;
  }

  export interface DeleteAdsGroupsDetails {
    loading: boolean;
    error: boolean;
  }


export interface AdsGroupState {
    AdsGroupsDetails: AdsGroupsDetails;
    AddAdsGroupsDetails: AddAdsGroupsDetails;
    EditAdsGroupsDetails: EditAdsGroupsDetails;
    DeleteAdsGroupsDetails: DeleteAdsGroupsDetails;
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
    },
    AddAdsGroupsDetails:
    {
        loading: false,
        error: false,
    },
    EditAdsGroupsDetails:
    {
        loading: false,
        error: false,
    },
    DeleteAdsGroupsDetails:
    {
        loading: false,
        error: false,
    },
};

const AdsGroupsSlice = createSlice({
    name: "AdsGroups",
    initialState,
    reducers: {
        // GET api
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
        //  POST api
        AddAdsGroups: (state) => {
            state.AddAdsGroupsDetails.loading = true;
        },
        AddAdsGroupsSuccess: (state) => {
            state.AddAdsGroupsDetails.loading = false;
        },
        AddAdsGroupsFailed: (state) => {
            state.AddAdsGroupsDetails.loading = false;
            state.AddAdsGroupsDetails.error = true;
        },
        // END POST api
        // PUT api
        EditAdsGroups: (state) => {
            state.EditAdsGroupsDetails.loading = true;
        },
        EditAdsGroupsSuccess: (state) => {
            state.EditAdsGroupsDetails.loading = false;
        },
        EditAdsGroupsFailed: (state) => {
            state.EditAdsGroupsDetails.loading = false;
            state.EditAdsGroupsDetails.error = true;
        },
        // END PUT api
        // DELETE api
        DeleteAdsGroups: (state) => {
            state.EditAdsGroupsDetails.loading = true;
        },
        DeleteAdsGroupsSuccess: (state) => {
            state.EditAdsGroupsDetails.loading = false;
        },
        DeleteAdsGroupsFailed: (state) => {
            state.EditAdsGroupsDetails.loading = false;
            state.EditAdsGroupsDetails.error = true;
        },
        // END DELETE api
    },
});

export const {
    GetAdsGroups,
    AdsGroupsSuccess,
    AdsGroupsFailed,
    AddAdsGroups,
    AddAdsGroupsSuccess,
    AddAdsGroupsFailed,
    EditAdsGroups,
    EditAdsGroupsSuccess,
    EditAdsGroupsFailed,
    DeleteAdsGroups,
    DeleteAdsGroupsSuccess,
    DeleteAdsGroupsFailed,
} = AdsGroupsSlice.actions;

export default AdsGroupsSlice.reducer;
