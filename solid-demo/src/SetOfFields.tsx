import { Component } from "solid-js";
import SingleField from "./SingleField";

interface SingleFieldProperties {
  index: number;
  value1: string;
  value2: string;
  value3: string;
}

const SetOfFields: Component<SingleFieldProperties> = (props: SingleFieldProperties ) => {

  console.log(`SetOfFields ${props.index} recalc`);
  return (
    <div>
      <SingleField index={props.index*10+1} value={props.value1} />
      <SingleField index={props.index*10+2} value={props.value2} />
      <SingleField index={props.index*10+3} value={props.value3} />
    </div>
  );
};

export default SetOfFields;
