import styled from "@emotion/styled";

const WarpperOut = styled.div`
  width: 100%;
  /* height: */
  /* height: 1100px; */
  border-top: 1px solid gainsboro;
  bottom: 0%;
`;

const WarpperIn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 80px;
`;

const WarpperTop = styled.div`
  width: 100%;
  padding-bottom: 2%;
`;

const WarpperMiddle = styled.div`
  width: 100%;
  margin-left: 20px;
  color: #a9a9a9;
  font-family: "HallymGothic-Regular";
  font-size: 1.7rem;
`;

const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 1.5%;
`;

const WrapperOuterBottom = styled.div`
  width: 100%;

  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;
// const WarpperImg = styled.div`
//   display: flex;
// `;
// const WarpperPhone = styled.img``;
// const WarpperEmail = styled.img``;

// const WarpperImgPhone = styled.div`
//   display: flex;
// `;
// const WarpperImgEmail = styled.div`
//   display: flex;
// `;

// const WarpperCall = styled.div`
//   font-family: "HallymGothic-Regular";
// `;
// const WarpperPhoneNumber = styled.div`
//   font-family: "HallymGothic-Regular";
// `;
// const WarpperPhoneBox = styled.div`
//   display: column;
//   justify-content: center;
//   margin: auto;
//   color: #a9a9a9;
//   padding-left: 10px;
//   font-size: 2rem;
// `;

// const WarpperEmailAddress = styled.div`
//   font-family: "HallymGothic-Regular";
// `;
// const WarpperEmailAnswer = styled.div`
//   font-family: "HallymGothic-Regular";
// `;
// const WarpperEmailBox = styled.div`
//   display: column;
//   justify-content: center;
//   margin: auto;
//   color: #a9a9a9;
//   padding-left: 10px;
//   font-size: 2rem;
// `;
// const Space = styled.div`
//   width: 150px;
// `;

export const WrapperBottomIn = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: 
  align-items: center;
  font-size: 2.2rem;
`;
export const WrapperBottomCategory = styled.div``;
export const WrapperBottomArrow = styled.div``;
export const WrapperReserverd = styled.div`
  margin-left: 20px;
  font-size: 1.5rem;
  padding-bottom: 5%;
`;

export default function Footer() {
  return (
    <>
      <WarpperOut>
        <WarpperIn>
          {/* <WarpperTop></WarpperTop> */}
          <WarpperMiddle>
            이사가는 곳 인프라를 한눈에 보고싶은 당신을 위한 서비스
          </WarpperMiddle>
          <WrapperOuterBottom>
            <WrapperBottom>
              <WrapperBottomIn>
                <WrapperBottomCategory>이용약관</WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
              <WrapperBottomIn>
                <WrapperBottomCategory>
                  위치기반서비스이용약관
                </WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
              <WrapperBottomIn>
                <WrapperBottomCategory>개인정보처리방침</WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
              <WrapperBottomIn>
                <WrapperBottomCategory>이용약관</WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
              <WrapperBottomIn>
                <WrapperBottomCategory>권리침해신고안내</WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
              <WrapperBottomIn>
                <WrapperBottomCategory>Contact Us</WrapperBottomCategory>
                <WrapperBottomArrow>⌄</WrapperBottomArrow>
              </WrapperBottomIn>
            </WrapperBottom>

            <WrapperReserverd>
              @Slipper Corp. All rights reserved.
            </WrapperReserverd>
          </WrapperOuterBottom>
        </WarpperIn>
      </WarpperOut>
    </>
  );
}
