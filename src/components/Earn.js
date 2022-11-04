import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import earn1 from "../img/earn-1.png";
import earn2 from "../img/earn-2.png";
import earn3 from "../img/earn-3.png";
import earn4 from "../img/earn-4.png";

const Earn = () => {
  return (
    <Wrapper>
      <div className="main">
        <p className="main-top large">Cash or card, you earn Stars</p>
        <p>
          {" "}
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="upper">
        <div className="dollar">
          <p className="large">
            1 <FontAwesomeIcon icon={faStar} className="star" /> per dollar
          </p>
          <p>Pay as you go</p>
        </div>
        <div className="section">
          <img src={earn1} alt="" />
          <div>
            <p className="small">Scan and pay separately</p>
            <p>Use cash or credit/debit card at the register</p>
          </div>
        </div>
        <div className="section">
          <img src={earn2} alt="" />
          <div>
            <p className="small">Save payment in the app</p>
            <p>
              Check-out faster by saving a credit/debit card or PayPal to your
              account. You'll be able to order ahead or scan and pay at the
              register in one step.
            </p>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="lower">
        <div className="dollar">
          <p className="large">
            2 <FontAwesomeIcon icon={faStar} className="star" /> per dollar
          </p>
          <p>Add funds in the app</p>
        </div>
        <div className="section">
          <img src={earn3} alt="" />
          <div>
            <p className="small">Preload</p>
            <p>
              To save time and earn Stars twice as fast, add money to your
              digital Starbucks Card using any payment option. Scan and pay in
              one step or order ahead in the app.
            </p>
          </div>
        </div>
        <div className="section">
          <img src={earn4} alt="" />
          <div>
            <p className="small">Register your gift card</p>
            <p>
              Then use it to pay through the app. You can even consolidate
              balances from multiple cards in one place.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f3f1e7;
  padding: 5% 15%;
  .main {
    text-align: center;
    margin-bottom: 50px;
  }
  .main-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  hr {
    margin: 50px 0;
  }
  .upper,
  .lower {
    display: flex;
  }
  .section {
    display: flex;
    justify-content: center;
    width: 25%;
    margin-right: 10%;
  }
  img {
    width: 125px;
    height: 125px;
    margin-right: 5%;
  }
  .dollar {
    width: 25%;
  }
`;

export default Earn;
