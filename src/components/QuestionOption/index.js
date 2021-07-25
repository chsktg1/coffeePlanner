// Write your code here.
import {Component} from 'react'

import './index.css'

class QuestionOption extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {selectedOptionId: 'None'}
  //   }

  optionSelected = event => {
    // console.log(event.target)
    const {optionWasClicked} = this.props
    // console.log(event)
    console.log('being clicked')
    optionWasClicked(event.target.id)
  }

  render() {
    // const {selectedOptionId} = this.state
    // console.log('present', selectedOptionId)
    const {eachOption, classNameForAct} = this.props
    const {id, optionTitle, description} = eachOption
    return (
      <div
        role="button"
        className={`options ${classNameForAct}`}
        id={`optionNum${id}`}
        onClick={this.optionSelected}
        tabIndex={0}
      >
        <div className="titleAndImageHolder">
          <p className="optionTitle">{optionTitle}</p>
          <div>
            <img
              className="blueCup"
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
              alt="blue cup"
            />
          </div>
        </div>
        <p>{description}</p>
      </div>
    )
  }
}

export default QuestionOption
