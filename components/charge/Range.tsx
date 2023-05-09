import { useState } from "react";

const Range = () => {
  const [value, setValue] = useState(0)
  return (
    <div className="relative">
      <input
        type="range"
        min="0"
        max="100"
        className="custom-range w-full my-2"
      />{" "}
      <label className="absolute left-0 -top-4 dark:text-white">10</label>
      <label className="absolute right-0 -top-4 dark:text-white">10000</label>
    </div>
  );
};
export default Range;
