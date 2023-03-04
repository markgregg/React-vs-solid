import React, { useMemo, useState } from "react";
import SetOfFields from "./SetOfFields";
import SingleField from "./SingleField";

interface Count {
  counter: number;
}
const App = () => {
  const [field1,setField1] = useState<string>("initial value 1");
  const [field2,setField2] = useState<string>("initial value 2");
  const [field3,setField3] = useState<string>("initial value 3");
  const [field4,setField4] = useState<string>("initial value 4");
  const [field5,setField5] = useState<string>("initial value 5");
  const [field6,setField6] = useState<string>("initial value 6");
  const [values,setValues]= useState<string[]>(["value1", "value2", "value3", "value4"]);
  const count = useMemo<Count>(() => { return {counter:0}},[]);

  const update = () => {
    setField1("new value " + count.counter);
    setValues(["value1", "value2", "new value3", "value4"]);
  }
  count.counter = count.counter + 1;
  console.log(`App recalc ${count.counter}`);
  return (
    <div className="fields">
      <SetOfFields index={1} value1={field1} value2={field2} value3={field3}/>
      <SetOfFields index={2} value1={field4} value2={field5} value3={field6}/>
      {
        values.map((value, index) => <SingleField key={30+index} index={30+index} value={value}/>)
      }
      <button onClick={update}>Update</button>
    </div>
  );
};

export default App;
