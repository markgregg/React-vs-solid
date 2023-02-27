import React, { FC, useEffect, useState } from "react";
import { RootState } from "./store";
import GroupedField from "./GroupedField";

interface SingleFieldProperties {
  index: number;
  field1: number;
  field2: number;
  field3: number;
}

const SetOfFields: FC<SingleFieldProperties> = ({index, field1,field2,field3}) => {
  console.log(`SetOfFields ${index} recalc`);

  const fieldGetter = (state: RootState, field: number) => {
    const valuesObject: any = state.values;
    return valuesObject[`field${field}`] as string;
  }

  return (
    <div>
      <GroupedField index={index*10+1} getter={state => fieldGetter(state, field1)} />
      <GroupedField index={index*10+2} getter={state => fieldGetter(state, field2)} />
      <GroupedField index={index*10+3} getter={state => fieldGetter(state, field3)} />
    </div>
  );
};

export default SetOfFields;
