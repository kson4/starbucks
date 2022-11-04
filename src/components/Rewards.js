import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import rewards1 from "../img/rewards-1.png";
import rewards2 from "../img/rewards-2.png";
import rewards3 from "../img/rewards-3.png";
import rewards4 from "../img/rewards-4.png";
import rewards5 from "../img/rewards-5.png";

const Rewards = () => {
  const [focused, setFocused] = useState(0);
  const title = [
    "Customize your drink",
    "Brewed hot coffee, bakery item or hot tea",
    "Handcrafted drink, hot breakfast or parfait",
    "Salad, sandwich or protein box",
    "Select merchandise or at-home coffee",
  ];
  const summary = [
    "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
    "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
    "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
    "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
    "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
  ];
  const images = [rewards1, rewards2, rewards3, rewards4, rewards5];
  return (
    <Wrapper>
      <div className="top">
        <p className="main large">Get your favorites for free</p>
        <div className="stars">
          <div
            // className={"large option " + highlight}
            className={focused == 0 ? "large option highlight" : "large option"}
            onClick={() => setFocused(0)}
          >
            25
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div
            className={focused == 1 ? "large option highlight" : "large option"}
            onClick={() => setFocused(1)}
          >
            50
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div
            className={focused == 2 ? "large option highlight" : "large option"}
            onClick={() => setFocused(2)}
          >
            150
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div
            className={focused == 3 ? "large option highlight" : "large option"}
            onClick={() => setFocused(3)}
          >
            200
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div
            className={focused == 4 ? "large option highlight" : "large option"}
            onClick={() => setFocused(4)}
          >
            400
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <img src={images[focused]} alt="" />
        <div>
          <p className="large title">{title[focused]}</p>
          <p>{summary[focused]}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f1f8f6;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main {
    padding-top: 3%;
    margin-bottom: 4%;
  }
  .stars {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .star {
    font-size: 0.75rem;
    color: #d4af37;
  }
  .bottom {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #d4e9e2;
    transition: 0.5s;
  }
  img {
    width: 300px;
    margin-right: 50px;
  }
  .bottom > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
  }
  .title {
    padding-bottom: 15px;
  }
  .option {
    cursor: pointer;
    width: 100px;
    text-align: center;
  }
  .highlight {
    border-bottom: 3px solid #1e3932;
  }
`;

export default Rewards;
