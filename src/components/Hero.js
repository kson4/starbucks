import styled from "styled-components";
import star from "../img/star.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero-msg">
          <p>FREE COFFEE</p>
          <p>IS A TAP AWAY</p>
        </div>

        <p className="hero-msg-2">Join now to start earning Rewards.</p>
        <button>Join now</button>
        <p>Or join in the app for the best experience</p>
      </div>
      <img src={star} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 58vh;
  width: 100vw;
  background-color: #d4e9e2;
  font-weight: bold;
  .hero {
    padding-left: 12vw;
  }
  .hero > p {
    font-size: 1.1rem;
    width: 500px;
  }
  img {
    position: relative;
    object-fit: contain;
    left: 7.5vw;
  }

  .hero-msg {
    font-size: 2.25rem;
  }
  .hero-msg-2 {
    padding: 2.25vh 0;
  }
  button {
    width: 100px;
    height: 30px;
    border-radius: 25px;
    border: none;
    background-color: #008248;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1.5vh;
  }
`;

export default Hero;
