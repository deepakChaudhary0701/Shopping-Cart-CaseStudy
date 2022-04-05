
import { createSlice } from "@reduxjs/toolkit";

const categoryInitialState = {
    categories: []
};

const CategorySlice = createSlice({
    name: 'category',
    initialState: categoryInitialState,
    reducers: {
        addCategories(state,action){
           const allCategories = action.payload;
           state.categories = [...allCategories];
        }
    }
});

export const categoryActions = CategorySlice.actions;

export default CategorySlice;