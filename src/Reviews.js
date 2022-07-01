import { useState, useEffect } from "react";
import data from "./data";
import Review from "./Review";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const Previous = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const Next = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const RandomReview = () => {
    const randIndex = Math.floor(Math.random() * data.length);
    randIndex !== index ? setIndex(randIndex) : RandomReview();
  };

  useEffect(() => {
    const interval
  
    return () => {
      second
    }
  } )
  

  return (
    <section>
      <Review key={data[index].id} {...data[index]} />
      <div className="btn-container">
        <span className="previous" onClick={Previous}>
          <FaChevronLeft />
        </span>
        <span className="next" onClick={Next}>
          <FaChevronRight />
        </span>
        <button onClick={RandomReview}>Surprise ME</button>
      </div>
    </section>
  );
};

export default Reviews;
