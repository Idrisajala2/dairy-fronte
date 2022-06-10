import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiTwotoneDelete } from "react-icons/ai";
import pix from "./gg.jpg";
import axios from "axios";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const [getData, setGetData] = useState([]);
  const user = useSelector((state) => state.currentUser);

  const onGetData = async () => {
    try {
      const url = "http://localhost:1400/api/user/saved";

      await axios.get(url).then((res) => {
        setGetData(res.data.data);
      });

      console.log(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {getData &&
          getData?.map((props) => (
            <div>
              {/* {user._id === props._id ? ( */}
              <div key={props._id}>
                {props.diary.map((props) => (
                  <Card key={props._id}>
                    <ImageHolder>
                      <Image src={props.image} />
                    </ImageHolder>

                    <TextHolder>
                      <Holder>
                        <Title>{props.title}</Title>
                        {/* <Icon /> */}
                      </Holder>
                      <Message>{props.message}</Message>
                    </TextHolder>
                  </Card>
                ))}
              </div>
              {/* ) : null} */}
            </div>
          ))}
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top-left-radius: 5px;
`;
// const Icon = styled(AiTwotoneDelete)`
//   color: red;
//   font-size: 25px;
//   transition: all 350ms;
//   transform: scale(1);
//   transform-origin: center;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.01);
//   }
// `;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Message = styled.div`
  color: gray;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
`;

const TextHolder = styled.div`
  padding: 5px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const Card = styled.div`
  margin: 30px;
  width: 390px;
  min-height: 320px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px 10px 0 0;
  /* overflow: hidden; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
  width: 90%;
  /* align-items: center; */
  /* background-color: green; */
`;

const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  min-height: calc(100vh - 70px);
  height: 100%;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
