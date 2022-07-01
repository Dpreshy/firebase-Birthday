import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { databs } from "../Fire/Fire";

const Create = () => {
  const navigateme = useNavigate();
  const [yourname, setYourname] = useState("");
  const [yourwish, setYourwish] = useState("");

  const submmit = async () => {
    await addDoc(collection(databs, "birthdaydata"), {
      yourname,
      yourwish,
    });
    setYourname("");
    setYourwish("");
    navigateme("/Views");
    alert("successful!");
  };
  return (
    <Container>
      <Wrapper>
        <h3>Send Me A birthday Wish😌</h3>
        <Name
          placeholder="Enter your name"
          value={yourname}
          onChange={(e) => {
            setYourname(e.target.value);
          }}
        />

        <Wish
          placeholder="Enter your wish"
          value={yourwish}
          onChange={(e) => {
            setYourwish(e.target.value);
          }}
        />

        <button onClick={submmit}>Submit</button>
      </Wrapper>
    </Container>
  );
};

export default Create;

const Container = styled.div`
  background-image: url("/happy.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;
  background: white;
  border-radius: 10px;
  button {
    padding: 13px 50px;
    margin-top: 30px;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #2d62f0;
    color: white;
    opacity: 0.8;
    :hover {
      opacity: 1;
      cursor: pointer;
      transform: scale(1.05);
      transition: all 300ms;
    }
  }
  :hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
  @media (min-width: 330px) and (max-width: 430px) {
    padding: 30px 30px;
  }
  @media (max-width: 320px) {
    padding: 20px 20px;
  }
`;
const Name = styled.input`
  width: 300px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: none;
  outline: none;
  border-radius: 5px;
  :hover {
    transform: scale(1.1);
    transition: all 300ms;
  }
  @media (min-width: 330px) and (max-width: 430px) {
    width: 250px;
  }
  @media (max-width: 320px) {
    width: 230px;
  }
`;
const Wish = styled.input`
  width: 300px;
  height: 200px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: none;
  outline: none;
  :hover {
    transform: scale(1.1);
    transition: all 300ms;
  }
  @media (min-width: 330px) and (max-width: 430px) {
    width: 250px;
  }
  @media (max-width: 320px) {
    width: 230px;
  }
`;
