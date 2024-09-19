// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prev => ({
      count: prev.count+(Math.floor(Math.random() * 100)),
    }))
  }
  render() {
    const {count} = this.state
    const countText=count %2==0 ? "Even" : "Odd"
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="header">Count is {countText}</p>
        <div className="btnContainer">
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
        <p className="header wj">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
