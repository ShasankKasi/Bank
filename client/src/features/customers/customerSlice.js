// import { createStore } from 'redux';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return { payload: { fullName, nationalID } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.natioalId;
        state.createdAt = new Date().toISOString();
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { updateName, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case "customer/createCustomer":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalID: action.payload.nationalID,
//                 createdAt: action.payload.createdAt
//             };
//         case "customer/updateName":
//             return { ...state, fullName: action.payload };
//         default:
//             return state;
//     }
// }

// // const store = createStore(customerReducer);

// // store.dispatch({ type: 'customer/createCustomer', payload: { fullName: "John Doe", nationalID: "12345", createdAt: new Date().toISOString() } });
// // store.dispatch({ type: 'customer/updateName', payload: "Jane Doe" });

// // console.log("Redux it is");

// export function createCustomer(fullName, nationalID) {
//     return {
//         type: "customer/createCustomer",
//         payload: { fullName, nationalID, createdAt: new Date().toISOString() }
//     };
// }

// export function updateName(fullName) {
//     return {
//         type: "customer/updateName",
//         payload: fullName
//     };
// }
