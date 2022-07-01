import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <Container>
      <Wrap>
        {/* <Textx>
          I am not holding back any joy today. i will love every minute of today
          and laugh as much as possible its my day🎁💖
        </Textx> */}
        <Link to="/Views">
          <View>View wishes</View>
        </Link>

        <Link to="/Create">
          <Create>wish me</Create>
        </Link>

        <Textx>
          I am not holding back any joy today. i will love every minute of today
          and laugh as much as possible its my day🎁💖
        </Textx>
      </Wrap>
    </Container>
  );
};

export default Landingpage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #d5d5d5;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("/33.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 330px) and (max-width: 430px) {
    height: 100vh;

    background-size: cover;
  }
  @media (max-width: 320px) {
    height: 100vh;
    background-size: cover;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 330px) and (max-width: 430px) {
  }
`;

const Textx = styled.div`
  width: 300px;
  text-align: center;
  font-weight: bolder;
  font-family: cursive;
  color: white;
  font-size: 20px;
  /* margin-top: 150px; */
`;
const View = styled.button`
  padding: 13px 25px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: black;
  color: white;
  margin-top: 250px;
  :hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
`;
const Create = styled.button`
  padding: 13px 25px;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  background: black;
  color: white;
  :hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
`;
