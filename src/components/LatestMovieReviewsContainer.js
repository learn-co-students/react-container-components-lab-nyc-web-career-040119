import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { API_KEY } from '../apiKey'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
