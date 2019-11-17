import React, { Component } from 'react';

class MovieList extends Component {

  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...';  
    }
    return text;
  }

  renderMovies() {
    const { movies } = this.props;

    return movies.map(({ name, description, image, rating }) => 
      (
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={image} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{name}</a>
              </h4>
              <p className="card-text">{this.shorten(description,45)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{rating}</small>
            </div>
          </div>
        </div>
      )
    )
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        {this.renderMovies()}
      </>
    )
  }
}

export default MovieList;
