import { StyledSearchButton, StyledSearchForm, StyledSearchbar, StyledSerchFormInput } from "./Searchbar.styled";

export const Searchbar = (props) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={event => {
        event.preventDefault();

        if (event.target.elements.query.value.trim() === '') {
          alert('Input some thing ...');
          return;
        }
        
        props.onSubmit(event.target.elements.query.value);
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
