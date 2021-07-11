import styled from "styled-components";

export const Header = styled.div`
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0#555;
`;

export const AppNameComp = styled.div`
  display: flex;
  align-items: center;
`;
export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const SearchComp = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10 px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
