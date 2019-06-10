import React from "react"

const MovieReviews = (props) => {
  const allReviews = props.reviews.map(review => {
    return (
      <div className='review' key={review.display_title}>
        <h2>{review.display_title}</h2>
        <p>{review.summary_short}</p>
        <a href={review.link.url}>Read full review</a>
      </div>
    )
  })
  return (
    <div className="review-list">
      {allReviews}
    </div>
  )
}

export default MovieReviews
