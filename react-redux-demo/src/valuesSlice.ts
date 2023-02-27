import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

// Define a type for the slice state
export interface Values {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  values: string[];
}

// Define the initial state using that type
const initialState: Values = {
  field1: "initial value 1",
  field2: "initial value 2",
  field3: "initial value 3",
  field4: "initial value 4",
  field5: "initial value 5",
  field6: "initial value 6",
  values: ["value1", "value2", "value3", "value4"]
};

interface UpdateFieldValue {
  field: number;
  value: string;
}

export const valuesSlice = createSlice({
  name: 'values',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateField: (state, action: PayloadAction<UpdateFieldValue>) => {
      const anyState: any = state;
      const fieldName =  `field${action.payload.field}`;
      if( fieldName in anyState ) {
        console.log(`updating ${fieldName}`)
        anyState[fieldName] = action.payload.value;
      }
    },
    updateValues: (state, action: PayloadAction<string[]>) => {
      state.values = action.payload;
    },
  },
})

export const { updateField, updateValues } = valuesSlice.actions

export default valuesSlice.reducer