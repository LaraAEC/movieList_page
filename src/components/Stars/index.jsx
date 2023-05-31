import {IoStar, IoStarOutline  } from 'react-icons/Io';

import { FiveStars, FourStars, ThreeStars, TwoStars, OneStars } from './styles';

export function Stars({value}) {
  if(value  == "5") {
    return(
      <FiveStars>
        <div className="grade">
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
        </div>
      </FiveStars>
    );
  } else if (value == "4") {
    return (
      <FourStars>
        <div className="grade">
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStar /> </p>
          <p> <IoStarOutline /> </p>
        </div>
      </FourStars>
    );
  } else if(value == "3") {
      return (
        <ThreeStars>
          <div className="grade">
            <p> <IoStar /> </p>
            <p> <IoStar /> </p>
            <p> <IoStar /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
          </div>
        </ThreeStars>
      );
    } else if(value == "2") {
      return(
        <TwoStars>
          <div className="grade">
            <p> <IoStar /> </p>
            <p> <IoStar /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
          </div>
        </TwoStars>
      );
    } else if(value == "1") {
      return(
        <OneStars>
          <div className="grade">
            <p> <IoStar /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
            <p> <IoStarOutline /> </p>
          </div>
        </OneStars>
      );
    }
  }