import styled from 'styled-components';

export const Container = styled.div`
  grid-area: rating;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const RatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;

  & + div {
    border-left: 1px solid var(--black);
  }
  div {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-left: 8px;
      font-size: 1.2rem;
    }
  }

  img {
    width: 100%;
    max-width: 120px;
  }
`;
export const Separator = styled.div`
  width: 1px;
  height: 100%;
`;
