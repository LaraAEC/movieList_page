import { AiFillStar, AiOutlineStar  } from 'react-icons/Ai';

import { FiveStars, FourStars, ThreeStars, TwoStars, OneStars } from './styles';

export function Stars({value}) {
  if(value  == "5") {
    return(
      <FiveStars>
        <div className="grade">
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
        </div>
      </FiveStars>
    );
  } else if (value == "4") {
    return (
      <FourStars>
        <div className="grade">
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiFillStar /> </p>
          <p> <AiOutlineStar /> </p>
        </div>
      </FourStars>
    );
  } else if(value == "3") {
      return (
        <ThreeStars>
          <div className="grade">
            <p> <AiFillStar /> </p>
            <p> <AiFillStar /> </p>
            <p> <AiFillStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
          </div>
        </ThreeStars>
      );
    } else if(value == "2") {
      return(
        <TwoStars>
          <div className="grade">
            <p> <AiFillStar /> </p>
            <p> <AiFillStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
          </div>
        </TwoStars>
      );
    } else if(value == "1") {
      return(
        <OneStars>
          <div className="grade">
            <p> <AiFillStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
            <p> <AiOutlineStar /> </p>
          </div>
        </OneStars>
      );
    }
  }