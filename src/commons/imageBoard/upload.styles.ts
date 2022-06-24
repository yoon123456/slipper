import styled from "@emotion/styled";

export const UploadImage = styled.img`
  object-fit: cover;
  width: 40%;
  height: 190px;
  outline: none;
  cursor: pointer;
  /* padding: 2%; */
  /* margin: 2%; */
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='gainsboro' stroke-width='4' stroke-dasharray='18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
  border-radius: 10px;
  /* border: 0.5px solid lightgray; */
`;
export const UploadButton = styled.div`
  width: 33%;
  height: 180px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 9%;
  margin: 2%;
  border-radius: 10px;
`;
export const UploadIcon = styled.img`
  width: 50%;
  height: 90%;
`;
export const UploadFileHidden = styled.input`
  display: none;
`;
