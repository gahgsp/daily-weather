import React from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/WeatherContext';
import SummaryCard from '../SummaryCard/SummaryCard';

const SummarySliderContainer = styled.section`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding: 2rem 0;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

/**
 * The slider component that is responsible to show to the user the cards of the hourly forecasts.
 * It's behavior is similar to a carousel.
 */
class SummarySlider extends React.Component {
  static contextType = WeatherContext;

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

  /**
   * Configures the mouse listeners to the application in order to scroll between the forecast cards shown by the slider.
   */
  configureScrollListeners() {
    window.addEventListener('mousedown', (event) => {
      if (!this.containerReference.current) {
        return;
      }
      this.isMouseDown = true;
      this.xStart = event.pageX - this.containerReference.current.offsetLeft;
      this.scrollLeft = this.containerReference.current.scrollLeft;
    });

    window.addEventListener('mousemove', (event) => {
      if (!this.isMouseDown || !this.containerReference.current) {
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

  /**
   * Builds a list of summary forecast cards that will be used as the children components of the slider.
   * @returns A list of summary forecast cards components to be shown in the slider.
   */
  renderWeatherSummaryCards() {
    return this.context.forecasts.map((forecast) => {
      return <SummaryCard forecast={forecast} key={forecast.id} />;
    });
  }

  render() {
    return <SummarySliderContainer ref={this.containerReference}>{this.renderWeatherSummaryCards()}</SummarySliderContainer>;
  }
}

export default SummarySlider;
