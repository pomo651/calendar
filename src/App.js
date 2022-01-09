import React, { Component } from 'react'

import { getCalendarByMonth } from './util.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    const today = new Date();
    // const arr = getCalendarByMonth(year, month);
    // console.log(arr);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.state = {
      year : today.getFullYear(),
      month : today.getMonth()
    }
  }

  onClickPrev() {
    this.setState({
      year : (this.state.month === 0) ? this.state.year - 1 : this.state.year,
      month : (this.state.month === 0) ? 11 : this.state.month - 1
    });
  }

  onClickNext() {
    this.setState({
      year : (this.state.month === 11) ? this.state.year + 1 : this.state.year,
      month : (this.state.month === 11) ? 0 : this.state.month + 1
    });
  }

  render() {
    let arr = getCalendarByMonth(this.state.year, this.state.month);
    return ( 
      <div className="calendar-container">
        <div> { this.state.month+1 } , { this.state.year } </div>
        <div className="calendar-button">
          <button onClick={this.onClickPrev}>prev</button>
          <button onClick={this.onClickNext}>next</button>
        </div>
        <div className="calendar-table">
          <div className="head-week">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="calendar-days">
            {
              arr.map((item, index) => {
                return (
                  <div className="single-day" key={index}> 
                    {item} 
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;

