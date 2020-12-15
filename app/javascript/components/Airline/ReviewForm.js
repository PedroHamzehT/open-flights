import React from 'react'

const ReviewForm = () => {
  return(
    <div className="wrapper">
      <form>
        <div>Have an experience with with [Airline name]? Share your review!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review title"/>
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review description"/>
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this Airline</div>
            [Star Rating goes here]
          </div>
        </div>
        <button type="submit">Submit your review!</button>
      </form>
    </div>
  )
}

export default ReviewForm
