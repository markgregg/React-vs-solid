import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import SetOfFields from "./SetOfFields";
import SingleField from "./SingleField";
import { updateField, updateValues } from "./valuesSlice";

interface Count {
  counter: number;
}
const App = () => {
  const dispatch = useDispatch();
  const count = useMemo<Count>(() => { return {counter:0}},[]);
  const valueFields = [0,1,2,3];

  const update = () => {
    count.counter = count.counter + 1;
    dispatch(updateField({field: 1, value: "new value " + count.counter}))
    dispatch(updateValues(["value1", "value2", "new value3", "value4"]));
  }
  
  console.log(`App recalc ${count.counter}`);
  return (
    <div className="fields">
      <SetOfFields index={1} field1={1} field2={2} field3={3}/>
      <SetOfFields index={2} field1={4} field2={5} field3={6}/>
      {
        valueFields.map(index => <SingleField key={30+index} index={index}/>)
      }
      <button onClick={update}>Update</button>
    </div>
  );
};

export default App;
