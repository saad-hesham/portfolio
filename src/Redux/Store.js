

import { configureStore, createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
    name: "posts",
    initialState: {
        openSlide: false,
        skills: [
            { name: "HTML", per: 90 },
            { name: "CSS", per: 85 },
            { name: "Javascript", per: 75 },
            { name: "Bootstrap", per: 85 },
            { name: "React js", per: 75 },
            { name: "Jquery", per: 65 },
            { name: "Redux", per: 90 },
            { name: "SASS", per: 65 },

        ]
        
    },
    reducers: {
        toggleSlider: function (state) {
            if (state.openSlide == true) {
                state.openSlide = false;
                document.querySelector("html").style.overflow="scroll";


            }
            else {
                state.openSlide = true;
                document.querySelector("html").style.overflow="hidden";


            }

        },
        
        
    }

})

export const store = configureStore({ reducer: posts.reducer });
export const actions = posts.actions