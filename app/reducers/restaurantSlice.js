import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';

  export const getRestaurant = createAsyncThunk(
    'restaurant/get',
    async (value,{rejectWithValue}) => {
        console.log("Called Thunk");
        
        console.log("Token",value);
        try{
            const data = await axios({
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value
                },
                url: 'http://192.168.1.37:5000/restaurant/get'
            });
            console.log("Restaurant Data:",data);
            return data;
    
        }   catch(err) {
            return rejectWithValue(err);
        }        
    }
  )

  const restaurantSlice = createSlice({
      name: "Restaurant",
      initialState: {
        restaurantData: {},
        status: "idle",
        error: null,
        refreshed: true,
      },
      reducers:{

      },
      extraReducers:{
        [getRestaurant.pending]: (state, action) => {
            state.status = "loading";
        },
        [getRestaurant.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.restaurantData = action.payload;
            console.log(action.payload);
        },
        [getRestaurant.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
            console.log("failed");
            // console.log(action.error);
            // window.location.reload();
          }
      }

  })

  export default restaurantSlice.reducer;