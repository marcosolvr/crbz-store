import React, { ReactNode } from "react";

import Rating1 from '../../../../assets/rating-1.svg';
import Rating2 from '../../../../assets/rating-2.svg';
import Rating3 from '../../../../assets/rating-3.svg';
import Rating4 from '../../../../assets/rating-4.svg';

export default function Rating({ stars }: { stars: number }): JSX.Element {
  function handleRatingStars(): ReactNode {
    switch (stars) {
      case 1:
        return <Rating1 />
      case 2:
        return <Rating2 />
      case 3:
        return <Rating3 />
      case 4:
        return <Rating4 />
      default:
        return <></>
    }
  }

  return (
    <div className="rating">
      {handleRatingStars()}
    </div>
  );
}