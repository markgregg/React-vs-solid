import { configureStore } from '@reduxjs/toolkit'
import valuesReducer from './valuesSlice';


const store = configureStore({
  reducer: {
    values: valuesReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;