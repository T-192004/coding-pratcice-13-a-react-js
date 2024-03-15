import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const filteredList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeCapitalId,
    )
    const {country} = filteredList[0]
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-title">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capital" className="question">
              is capital of which country?
            </label>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
