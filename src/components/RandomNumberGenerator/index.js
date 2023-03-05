// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onIncrement = () => {
    this.setState(() => ({
      number: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p>{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
