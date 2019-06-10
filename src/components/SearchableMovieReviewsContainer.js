import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { API_KEY } from '../apiKey'

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${API_KEY}`)
      .then(r => r.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <input type="submit" value="Search" />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
