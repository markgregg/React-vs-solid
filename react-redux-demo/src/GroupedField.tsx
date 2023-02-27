import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Values } from "./valuesSlice";

interface GroupedFieldProperties {
  index: number;
  getter: (state: RootState) => string;
}

const GroupedField: FC<GroupedFieldProperties> = ({index, getter}) => {
  const value = useSelector(getter);
  console.log(`SingleField-${index} recalc`);
  return (
    <div>
      <p>{index}={value}</p>
    </div>
  );
};

export default GroupedField;
