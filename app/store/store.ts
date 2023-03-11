import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
})

export type TypeRootStore = ReturnType<typeof store.getState>
