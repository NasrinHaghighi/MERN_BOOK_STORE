import {combineReducers, configureStore } from '@reduxjs/toolkit'
import  BookSlice  from '../features/bookSlice';
//import { createWrapper } from 'next-redux-wrapper'
import CategorySlice from '../features/CategorySlice';
import PageSlice from '../features/PageSlice';
import priceFilter from '../features/priceFilter'
import scrollTo from '../features/scrollTo';

export const store = configureStore({
      reducer: {
        category:CategorySlice,
        page:PageSlice,
        books:BookSlice,
        price:priceFilter,
        tag:scrollTo
      
   },
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