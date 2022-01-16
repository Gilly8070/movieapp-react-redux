import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';

class FavoriteMovieList extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <h4>My Favorites Movies</h4>
                {this.props.favorites.map(movie => {
                    return <MovieItem key={movie.id} movie={movie} showButton={false} />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('favorite - ', state);
    return {
        favorites: state.favorites

    }
}

export default connect(mapStateToProps, null)(FavoriteMovieList);