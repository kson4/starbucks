import styled from "styled-components";
import extras1 from "../img/extras-1.png";
import extras2 from "../img/extras-2.png";
import extras3 from "../img/extras-3.png";

const Extras = () => {
  return (
    <Wrapper>
      <div className="main">
        <p className="main-top large">Endless Extras</p>
        <p className="main-top">
          Joining Starbucks Rewards means unlocking access to exclusive
          benefits. Say hellow to easy ordering, tasty Rewards and - yes, free
          coffee.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={extras1} alt="" />
          <p className="small">Fun freebies</p>
          <p>
            Not only can you ear free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </p>
        </div>
        <div className="card">
          <img src={extras2} alt="" />
          <p className="small">Order & pay ahead</p>
          <p>
            Enjoy the convenience of in-store, curbside or drive-thru pickup at
            select stores.
          </p>
        </div>
        <div className="card">
          <img src={extras3} alt="" />
          <p className="small">Get to free faster</p>
          <p>
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  .main {
    margin: 5% 0;
  }
  .main-top {
    margin: auto;
    margin-bottom: 15px;
    width: 700px;
    text-align: center;
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }
  .card {
    width: 25vw;
    padding: 0 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Extras;
