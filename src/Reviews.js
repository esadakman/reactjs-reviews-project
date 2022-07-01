import { useState } from "react";
import data from "./data";
import Review from "./Review";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  return (
    <section>
      <Review key={data[index].id} {...data[index]} />
      <div className="btn-container"></div>
    </section>
  );
};

export default Reviews;
