import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncreaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="fruit"> {mango} </span>mangoes
            <span className="fruit"> {banana} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="avatar"
                alt="mango
              "
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="avatar"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
