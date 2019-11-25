import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetch(this.state.query)
    event.target.reset()
  }

  render() {
    return(
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Enter a search term to find gifs"
            size="50"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
