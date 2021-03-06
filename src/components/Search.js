import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { API_KEY } from '../secrets';
import { movies } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
        // console.log('clicked', this.state);
        // console.log(url);
        fetch(url, {
            method: 'GET'
        }).then(resp => resp.json())
            .then(jsonObj => { this.props.movies(jsonObj.results) });

    }
    render() {
        return (
            <div>
                <Form inline className="col-md-12 col-md-offset-4">
                    <FormGroup>
                        <FormLabel>Search</FormLabel>
                        {' '}
                        <FormControl
                            type='text'
                            placeholder='wonder woman'
                            onChange={(e) => this.setState({query: e.target.value})}
                        />
                        { ' ' }
                        <Button 
                            onClick={() => this.search()}
                        >
                            Submit
                        </Button>
                    </FormGroup>
                
                </Form>
            </div>
        )
    }
}

export default connect(null, {movies})(Search);