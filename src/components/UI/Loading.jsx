import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledLoading>
      <h1>Loading...</h1>
    </StyledLoading>
  );
};

export default Loading;

const StyledLoading = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.text};
    color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
`;
