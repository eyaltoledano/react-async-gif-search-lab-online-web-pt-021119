import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetch = query => {
    fetch(('https://api.giphy.com/v1/gifs/search?q=' + {query} + '&api_key=D8KnCkMCRSSDl1fmuoMD0RMrudUWD9vt&rating=g'))
    .then(response => response.json())
    .then(data =>
      this.setState({
        gifs: [
          data.data[0].images.original.url,
          data.data[1].images.original.url,
          data.data[2].images.original.url
        ]
      })
    )
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <GifSearch fetch={event => this.fetch(event) } />
          </div>
          <div className="col">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    )
  }
}
