import styled from 'styled-components';

const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
`;

const Description = styled.h3`
  font-size: 2rem;
  color: hsl(234, 14%, 70%);
`;

const Error = ({ title, description }) => {
  return (
    <ErrorContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ErrorContainer>
  );
};

export default Error;
