import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProductFilter {
  status: boolean;
  priceRange: number;
}
const initialState: IProductFilter = {
  priceRange: 150,
  status: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange, toggleState } = productSlice.actions;
export default productSlice.reducer;
