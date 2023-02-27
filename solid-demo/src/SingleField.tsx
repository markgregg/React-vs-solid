import { Component } from "solid-js";

interface SingleFieldProperties {
  index: number;
  value: string;
}

const SingleField: Component<SingleFieldProperties> = (props: SingleFieldProperties) => {

  console.log(`SingleField-${props.index} recalc`);
  return (
    <div>
      <p>{props.index}={props.value}</p>
    </div>
  );
};

export default SingleField;
