import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { databs } from "../Fire/Fire";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Views = () => {
  const [snapuser, setSnapuser] = useState([]);

  const snapping = async () => {
    const datas = await collection(databs, "birthdaydata");
    onSnapshot(datas, (mysnaps) => {
      const using = [];
      mysnaps.forEach((ele) => {
        using.push({ ...ele.data(), id: ele.id });
      });
      setSnapuser(using);
    });
  };

  useEffect(() => {
    snapping();
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Haeder>
        <h4>Happy Birthday! Sylvia😍</h4>
        <img src="/1.jpg" />
      </Haeder>
      <Wrapper>
        <Hold>
          {snapuser?.map((props) => {
            return (
              <Card data-aos="fadeup">
                <Cardwrap>
                  <Name>{props.yourname}</Name>
                  <Texts>{props.yourwish}</Texts>
                </Cardwrap>
                <p> Thanks I love you😘</p>
              </Card>
            );
          })}
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Views;
const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  height: 100%;
  min-height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
  }
`;
const Hold = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 20px;
  margin-left: 20px;
  grid-gap: 25px;
  grid: 25px;
  @media (min-width: 330px) and (max-width: 430px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: 0px;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: 0px;
  }
`;
const Cardwrap = styled.div`
  height: 130px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  /* margin-right:40px ; */
`;
const Card = styled.div`
  width: 300px;
  margin-top: 20px;
  padding: 10px 10px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 10px;
    font-weight: bold;
    margin-left: 150px;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 300ms;
  }
  @media (max-width: 320px) {
    width: 250px;
  }
`;

const Name = styled.div`
  font-weight: bold;
`;
const Texts = styled.div`
  font-weight: 500px;
`;
const Haeder = styled.div`
  width: 100%;
  height: 70px;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  background: #2d62f0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (min-width: 330px) and (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
