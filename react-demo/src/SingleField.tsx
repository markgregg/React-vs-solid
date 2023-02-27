import React, { FC } from "react";

interface SingleFieldProperties {
  index: number;
  value: string;
}

const SingleField: FC<SingleFieldProperties> = ({index, value}) => {

  console.log(`SingleField-${index} recalc`);
  return (
    <div>
      <p>{index}={value}</p>
    </div>
  );
};

export default SingleField;
