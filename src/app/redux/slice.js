"use client";
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  leftsidetoglemenue:false,
  arrayofLitags:[],
  explanationAndInpQna:false,
  preview:false,
  searchLibrari:true
};

const Slice = createSlice({
  name: "adduser",
  initialState,
  reducers: {
    LeftTogleMenue(state, action) {
      state.leftsidetoglemenue = !state.leftsidetoglemenue;
    },
    IncreaseQuestions(state,action){
           state.arrayofLitags.push(1)
    },
    ExplAndInpQna(state,action){
      state.explanationAndInpQna=!state.explanationAndInpQna
    },
    previewTogle(state,action){
      state.preview=!state.preview
    },
    searchLib(state,action){
      state.searchLibrari=!state.searchLibrari
      console.log("okkkkkkkk")
    }
  },
});

export const { LeftTogleMenue,IncreaseQuestions,ExplAndInpQna,previewTogle,searchLib } = Slice.actions;
export default Slice.reducer;
