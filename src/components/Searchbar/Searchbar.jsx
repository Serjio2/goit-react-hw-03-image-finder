import { StyledSearchButton, StyledSearchForm, StyledSearchbar, StyledSerchFormInput } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={event => {
        event.preventDefault();
        onSubmit(event.target.elements.query.value);
        event.target.reset();
      }}>
        <StyledSearchButton type="submit">
          <span>Search</span>
        </StyledSearchButton>

        <StyledSerchFormInput type="text" name="query" placeholder="Search images and photos" />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
