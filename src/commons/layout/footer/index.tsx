import styled from "@emotion/styled";

const WarpperOut = styled.div`
  width: 100%;
  height: 240px;
  background-color: #f5f4f4;
`;

const WarpperIn = styled.div`
  width: 100%;
  height: 240px;
  padding-left: 20px;
`;

const WarpperTop = styled.div`
  width: 100%;
  height: 80px;
`;

const WarpperMiddle = styled.div`
  width: 100%;
  height: 80px;
  color: #a9a9a9;
`;
const WarpperBottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
const WarpperImg = styled.div`
  display: flex;
`;
const WarpperPhone = styled.img``;
const WarpperEmail = styled.img``;

const WarpperImgPhone = styled.div`
  display: flex;
`;
const WarpperImgEmail = styled.div`
  display: flex;
`;

const WarpperCall = styled.div``;
const WarpperPhoneNumber = styled.div``;
const WarpperPhoneBox = styled.div`
  display: column;
  justify-content: center;
  margin: auto;
  color: #a9a9a9;
  padding-left: 10px;
`;

const WarpperEmailAddress = styled.div``;
const WarpperEmailAnswer = styled.div``;
const WarpperEmailBox = styled.div`
  display: column;
  justify-content: center;
  margin: auto;
  color: #a9a9a9;
  padding-left: 10px;
`;
const Space = styled.div`
  width: 150px;
`;

export default function Footer() {
  return (
    <>
      <WarpperOut>
        <WarpperIn>
          <WarpperTop></WarpperTop>
          <WarpperMiddle>
            이사사는 곳 인프라는 한눈에 보고싶은 당신을 위한 서비스
          </WarpperMiddle>
          <WarpperBottom>
            <WarpperImg>
              <WarpperImgPhone>
                <WarpperPhone src="https://img.icons8.com/ios/50/000000/apple-phone.png" />
                <WarpperPhoneBox>
                  <WarpperCall>전화문의</WarpperCall>
                  <WarpperPhoneNumber>02-000-0000</WarpperPhoneNumber>
                </WarpperPhoneBox>
              </WarpperImgPhone>
              <Space></Space>
              <WarpperImgEmail>
                <WarpperEmail src="https://img.icons8.com/ios/50/000000/apple-mail.png" />
                <WarpperEmailBox>
                  <WarpperEmailAnswer>E-mail 문의</WarpperEmailAnswer>
                  <WarpperEmailAddress>Slipper@Slipper.com</WarpperEmailAddress>
                </WarpperEmailBox>
              </WarpperImgEmail>
            </WarpperImg>
          </WarpperBottom>
        </WarpperIn>
      </WarpperOut>
    </>
  );
}
