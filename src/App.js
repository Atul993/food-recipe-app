import styled from "styled-components";

import {
  Header,
  AppNameComp,
  AppIcon,
  SearchComp,
  SearchIcon,
  SearchInput,
} from "./Components/HeaderComponent";

import {
  RecipeListComp,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientText,
  SeeMoreTest,
} from "./Components/RecipeComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComp>
          <AppIcon src="hamburger-icon.svg" alt="hamburger" />
          Recipe Finder
        </AppNameComp>
        <SearchComp>
          <label htmlFor="search_input">
            <SearchIcon src="search-icon.svg" alt="search-icon" />
          </label>
          <SearchInput id="search_input" placeholder="Search Recipe" />
        </SearchComp>
      </Header>
      <RecipeListComp>
        <RecipeContainer>
          <CoverImage src="hamburger-icon.svg" />
          <RecipeName>Paneer</RecipeName>
          <IngredientText>Ingredients</IngredientText>
          <SeeMoreTest>See Complete Recipe</SeeMoreTest>
        </RecipeContainer>
      </RecipeListComp>
    </Container>
  );
}

export default App;
