import styled from 'styled-components';

const LoaderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const LoaderRoller = styled.div`
  width: 80px;
  height: 80px;

  div {
    animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }

  div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: hsl(234, 14%, 70%);
    margin: -4px 0 0 -4px;
  }

  div:nth-child(1) {
    animation-delay: -0.036s;
  }

  div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }

  div:nth-child(2) {
    animation-delay: -0.072s;
  }

  div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }

  div:nth-child(3) {
    animation-delay: -0.108s;
  }

  div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }

  div:nth-child(4) {
    animation-delay: -0.144s;
  }

  div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }

  div:nth-child(5) {
    animation-delay: -0.18s;
  }

  div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }

  div:nth-child(6) {
    animation-delay: -0.216s;
  }

  div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }

  div:nth-child(7) {
    animation-delay: -0.252s;
  }

  div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }

  div:nth-child(8) {
    animation-delay: -0.288s;
  }

  div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }

  @keyframes roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * The loader state component responsible for presenting a feedback to the user that the information is still being loaded.
 * @returns the loader state component.
 */
const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderRoller>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </LoaderRoller>
    </LoaderContainer>
  );
};

export default Loader;
