import styled from "styled-components";
import logo from "../img/starbucks-logo.png";

const Header = () => {
  return (
    <Wrapper className="header">
      <div className="top">
        <div className="left">
          <img className="logo" src={logo} alt="" width="50px" />
          <a href="#">MENU</a>
          <a href="#">REWARDS</a>
          <a href="#">GIFT CARDS</a>
        </div>
        <div className="right">
          <p className="find">Find a store</p>
          <button className="sign-in">Sign in</button>
          <button className="join-now">Join now</button>
        </div>
      </div>
      <div className="bottom">
        <p>STARBUCKS REWARDS</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  .top {
    display: flex;
    justify-content: space-between;
    ${"" /* height: 10vh; */}
    margin: 2.3vh 9.5vh;
  }
  .logo {
    margin-right: 2vw;
  }
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .left > a {
    text-decoration: none;
    color: black;
    margin-right: 1vw;
  }
  .right {
    margin-right: 5vw;
  }
  .find {
    margin-right: 3vw;
  }
  .sign-in {
    background-color: white;
    border: 1px solid black;
    border-radius: 15px;
    width: 75px;
    height: 30px;
  }
  button {
    font-weight: bold;
  }
  .join-now {
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 15px;
    width: 100px;
    height: 30px;
  }
  .bottom {
    display: flex;
    align-items: center;
    padding-left: 12.2vw;
    background-color: #1e3932;
    color: white;
    height: 50px;
  }
`;

export default Header;
