import {combineReducers, configureStore } from '@reduxjs/toolkit'
import  BookSlice  from '../features/bookSlice';
//import { createWrapper } from 'next-redux-wrapper'
import CategorySlice from '../features/CategorySlice';


import PageSlice from '../features/PageSlice';
import priceFilter from '../features/priceFilter'
import Rate from '../features/rateSlice'
import scrollTo from '../features/scrollTo';
import searchSlice from '../features/searchSlice';
import sortSlice from '../features/sortSlice';
import limitNumberSlice from '../features/limitNumberSlice';
import FavoraiteListSlice from '../features/favoraiteListSlice'

import storage from 'redux-persist/lib/storage'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  
}

const reducer =combineReducers({
  category:CategorySlice,
  page:PageSlice,
  books:BookSlice,
  price:priceFilter,
  tag:scrollTo,
  rate:Rate,
  sort:sortSlice,
  search:searchSlice,
  limitNumber:limitNumberSlice,
  favoriteList:FavoraiteListSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
      reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
       serializableCheck: {
       // Ignore these action types
       ignoredActions: ['your/action/type'],
       // Ignore these field paths in all actions
       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
       // Ignore these paths in the state
       ignoredPaths: ['items.dates'],
     },
   }),

  });

//   export const makeStore =()=>{
// configureStore({
//   reducer:combineReducers,
// })
//   }
//   export const wrapper=createWrapper(makeStore)
  

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch