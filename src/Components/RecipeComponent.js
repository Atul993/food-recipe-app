import styled from "styled-components";

export const RecipeListComp = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px #aaa;
`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
`;

export const IngredientText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoreTest = styled(IngredientText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
