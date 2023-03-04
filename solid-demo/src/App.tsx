import { createMemo, createSignal, For } from "solid-js";
import SetOfFields from "./SetOfFields";
import SingleField from "./SingleField";

interface Count {
  counter: number;
}
const App = () => {
  const [field1,setField1] = createSignal<string>("initial value 1");
  const [field2,setField2] = createSignal<string>("initial value 2");
  const [field3,setField3] = createSignal<string>("initial value 3");
  const [field4,setField4] = createSignal<string>("initial value 4");
  const [field5,setField5] = createSignal<string>("initial value 5");
  const [field6,setField6] = createSignal<string>("initial value 6");
  const [values,setValues]= createSignal<string[]>(["value1", "value2", "value3", "value4"]);
  const count = createMemo<Count>(() => { return {counter:0}});

  const update = () => {
    count().counter = count().counter + 1;
    setField1("new value " + count().counter);
    setValues(["value1", "value2", "new value" + count().counter, "value4"]);
  }
  
  console.log(`App recalc ${count().counter}`);
  return (
    <div class="fields">
      <SetOfFields index={1} value1={field1()} value2={field2()} value3={field3()}/>
      <SetOfFields index={2} value1={field4()} value2={field5()} value3={field6()}/>
      <For each={values()}>
        { (value,index) => <SingleField index={30+index()} value={value}/>}
      </For>
      <button onClick={update}>Update</button>
    </div>
  );
};

export default App;
