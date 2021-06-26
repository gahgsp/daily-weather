import React from 'react';
import styled from 'styled-components';
import SummaryCard from '../SummaryCard/SummaryCard';

const SummarySliderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

class SummarySlider extends React.Component {
  constructor(props) {
    super(props);

    this.containerReference = React.createRef();
    this.isMouseDown = false;
    this.xStart = 0;
    this.scrollLeft = 0;
    this.scrollSpeed = 0.7;
  }

  componentDidMount() {
    this.configureScrollListeners();
  }

  configureScrollListeners() {
    window.addEventListener('mousedown', (event) => {
      this.isMouseDown = true;
      this.xStart = event.pageX - this.containerReference.current.offsetLeft;
      this.scrollLeft = this.containerReference.current.scrollLeft;
    });

    window.addEventListener('mousemove', (event) => {
      if (!this.isMouseDown) {
        return;
      }
      event.preventDefault();
      const xPos = event.pageX - this.containerReference.current.offsetLeft;
      const scroll = (xPos - this.xStart) * this.scrollSpeed;
      this.containerReference.current.scrollLeft = this.scrollLeft - scroll;
    });

    window.addEventListener('mouseleave', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });
  }

  render() {
    return (
      <SummarySliderContainer ref={this.containerReference}>
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </SummarySliderContainer>
    );
  }
}

export default SummarySlider;
