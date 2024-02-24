"use client";
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  leftsidetoglemenue:false,
  arrayofLitags:[],
  explanationAndInpQna:false,
  preview:false,
  searchLibrari:false,
  dataArr:[],
  obj:{
    cropedImgForQnA:null,
    cropedImgExplanation:null,
    arrForOptions:[],
    textForQna:"",
    textForExplanation:""
  }

};

const Slice = createSlice({
  name: "adduser",
  initialState,
  reducers: {
    LeftTogleMenue(state, action) {
      state.leftsidetoglemenue = !state.leftsidetoglemenue;
    },
    IncreaseQuestions(state,action){
      if(state.obj.cropedImgForQnA && state.obj.arrForOptions[0] && state.obj.textForQna){
        state.arrayofLitags.push(state.obj)
      }
    },
    ExplAndInpQna(state,action){
      state.explanationAndInpQna=!state.explanationAndInpQna
    },
    previewTogle(state,action){
      state.preview=!state.preview
    },
    searchLib(state,action){
      state.searchLibrari=!state.searchLibrari
      
    },
    getCropedimgForQna(state,action){
      state.obj.cropedImgForQnA=action.payload
      console.log(state.obj.cropedImgForQnA)
      
    },
    getCropedimgForExplanation(state,action){
      state.obj.cropedImgExplanation=action.payload
      
    },
    textForQnaFunction(state,action){
      state.obj.textForQna=action.payload
      
    },
    textForExpFunction(state,action){
      state.obj.textForExplanation=action.payload
      
    },
    arrForOptions(state,action){
      state.obj.arrForOptions.push(action.payload)
    }
  },
});

export const { LeftTogleMenue,IncreaseQuestions,ExplAndInpQna,previewTogle,searchLib,getCropedimgForQna,getCropedimgForExplanation,textForExpFunction,textForQnaFunction,arrForOptions } = Slice.actions;
export default Slice.reducer;
