import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
// import FavoriteMovieList from './FavoriteMovieList';
import { Link } from 'react-router-dom';

class MovieResults extends Component {
    render() {
        return (
            <div>
                <Link to='/fav'>Favorite</Link>
                <hr/>
                <Search />
                {this.props.movies.map(item => {
                    return <MovieItem key={item.id} movie={item} showButton={true} />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        movies: state.movies

    }
}

export default connect(mapStateToProps)(MovieResults);
