import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rewards = () => {
  return (
    <Wrapper>
      <div className="top">
        <p className="main large">Get your favorites for free</p>
        <div className="stars">
          <div className="large">
            25
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="large">
            50
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="large">
            150
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="large">
            200
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="large">
            400
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="large">Customize your drinks</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo beatae
          similique neque laborum laudantium voluptate, corrupti, corporis a
          accusantium il
        </p>
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
    gap: 50px;
  }
  .star {
    font-size: 0.75rem;
    color: #d4af37;
  }
  .bottom {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d4e9e2;
  }
`;

export default Rewards;
