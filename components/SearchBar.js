import { useRouter } from 'next/router';
import styled from 'styled-components';
import { SearchIcon } from '../icons';
import { Container } from '../styles/SharedStyles';

const StyledSearchBar = styled.div`
  margin: 1rem 0 1.5rem;

  @media (min-width: 768px) {
    margin: 1rem 0 1.8rem;
  }

  @media (min-width: 1024px) {
    margin: 1.25rem 0 2.3rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  button {
    cursor: pointer;
    display: grid;
    svg {
      color: #fff;
      flex-shrink: 0;
      width: 1.4rem;
      height: 1.4rem;

      @media (min-width: 600px) {
        width: 1.6rem;
        height: 1.6rem;
      }

      @media (min-width: 768px) {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
  }

  input {
    border: none;
    background-color: transparent;
    color: white;
    font-size: clamp(0.95rem, 2.8vw, 1.4rem);
    width: 100%;
    padding: 0.4em 0;
    font-weight: 300;
    caret-color: ${({ theme }) => theme.colors.red};

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyishBlue};
      margin-bottom: -1px;
    }
  }
`;

const SearchBar = () => {
  const router = useRouter();

  return (
    <StyledSearchBar>
      <Container>
        <button>
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder={`Search for ${
            router.pathname === '/movies'
              ? 'Movies'
              : router.pathname === '/tvseries'
              ? 'TV Series'
              : router.pathname === '/bookmarks'
              ? 'Bookmarks'
              : 'Movies or TV series'
          }`}
        />
      </Container>
    </StyledSearchBar>
  );
};

export default SearchBar;
