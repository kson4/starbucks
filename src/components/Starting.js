import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

const Starting = () => {
  return (
    <Wrapper>
      <div className="main">
        <p className="main-top">Getting Started is easy</p>
        <p>Earn stars and get rewarded in a few easy steps</p>
      </div>

      <div className="steps">
        <div className="step">
          <FontAwesomeIcon icon={fa1} className="number-size" />
          <p className="medium">Create an account</p>
          <p>
            to get started, join now. You can also join in the app to get access
            to the full range of Starbucks Rewards benefits.
          </p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={fa2} className="number-size" />
          <p className="medium">Order and pay how you'd like</p>
          <p>
            Use cash, credit/debit card to save some time and pay right through
            the app. You'll collect Stars all ways. Learn how
          </p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={fa3} className="number-size s3" />
          <p className="medium">Earn Stars, get Rewards</p>
          <p>
            As you earn Stars, you can redeem them for Rewards - like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100vw;

  .main {
    text-align: center;
    margin-bottom: 50px;
  }
  .main-top {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .steps {
    display: flex;
  }
  .step {
    width: 25vw;
    text-align: center;
    margin: 0 5%;
  }
  .number-size {
    font-size: 1.25rem;
    color: #008248;
    border: 1px solid #008248;
    border-radius: 10000px;
    padding: 10px 15px;
    margin-bottom: 5%;
  }
  .s3 {
    padding: 10px 13px;
  }
  .medium {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 5%;
  }
`;

export default Starting;
