import React, { Component } from 'react';
import { addToFavorite, removeFromFavorite } from '../actions';
import { connect } from 'react-redux';
// import { addToFavorite } from '../actions';

const urlComponent = 'https://image.tmdb.org/t/p/w342';
const movieUrl = 'https://www.themoviedb.org/movie/';

class MovieItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: false
        }
    }
    addToFavorite() {
        this.setState({ favorite: !this.state.favorite })
        this.props.addToFavorite(this.props.movie)
    }
    removeFavorite() {
        this.setState({ favorite: !this.state.favorite })
        this.props.removeFromFavorite(this.props.movie)
    }
    displayFav() {
        if (!this.state.favorite) {
            return <span className="glyphicon glyphicon-heart-empty"
                onClick={() => this.addToFavorite()}
            ></span>
        } else {
            return <span className="glyphicon glyphicon-heart"
            onClick={() => this.removeFavorite()}
            ></span>
        }
    }
    render() {
        return (
            <div className="col-sm-12 col-sm-4">
                <div className="thumbnail">
                    <a href={movieUrl + this.props.movie.id} target='_blank'><img src={urlComponent+this.props.movie.poster_path} alt={this.props.movie.title + 'Image'} /> </a>
                <div className="caption">
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <p>Release Date - {this.props.movie.release_date}</p>
                        <p>Ratings - <span className='badge badge-default'>{ ' ' }<span className="glyphicon glyphicon-star" aria-hidden="true">{ ' ' }{this.props.movie.vote_average}</span></span></p>
                        <p>{this.props.showButton ? this.displayFav() : null}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {addToFavorite, removeFromFavorite}) (MovieItem);