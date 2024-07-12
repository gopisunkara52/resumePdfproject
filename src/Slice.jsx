import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jump: {},
  signupdataa:{},
  educationdata:[],
  experiencedata:[],
  oBjectivedata:{},
  PersonalData:{},
  projectsData:[],
  referenceData:[],
  skillsData:[],
  languagesknowns:[],
  pdfUrl:[],

};
const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setJump: (state, action) => {
      state.jump = action.payload;
    },
    setSignupdataa:(state,action)=>{
      state.signupdataa = action.payload;
    },
    setEducationdata:(state,action)=>{
      state.educationdata = action.payload;
    },
    setExperiencedata:(state,action)=>{
      state.experiencedata = action.payload;
    },
    setOBjectivedata:(state,action)=>{
      state.oBjectivedata = action.payload;
    },
    setPersonalData:(state,action)=>{
      state.PersonalData = action.payload;
    },
    setProjectsData:(state,action)=>{
      state.projectsData =action.payload;
    },
    setReferenceData:(state,action)=>{
      state.referenceData = action.payload;
    },
    setSkillsData:(state,action)=>{
      state.skillsData= action.payload;
    },
    setLanguagesknowns:(state,action)=>{
      state.languagesknowns= action.payload;
    },
    setPdfUrl:(state,action)=>{
      state.pdfUrl=action.payload;
    },


  },
});
export const { 
    setJump ,
    setSignupdataa,
    setEducationdata,
    setExperiencedata,
    setOBjectivedata,
    setPersonalData,
    setProjectsData,
    setReferenceData,
    setSkillsData,
    setLanguagesknowns,
    setPdfUrl,



} = authslice.actions;
export default authslice.reducer;
