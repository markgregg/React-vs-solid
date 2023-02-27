import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Values } from "./valuesSlice";

interface SingleFieldProperties {
  index: number;
}

const SingleField: FC<SingleFieldProperties> = ({index}) => {
  const value = useSelector((state: RootState) => state.values.values[index]);

  console.log(`SingleField-${index} recalc`);
  return (
    <div>
      <p>{index}={value}</p>
    </div>
  );
};

export default SingleField;
