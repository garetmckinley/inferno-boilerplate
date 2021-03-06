import Inferno from 'inferno';
import Component from 'inferno-component';

import Input from '../../components/Input';
import List from '../../components/List';
import MovieRow from '../../components/MovieRow';
import Spinner from '../../components/Spinner';
import { setMoviesQuery } from '../../actions/movies';


/**
 * The home page component containing the search functions
 *
 * @export
 * @class HomePage
 * @extends {Component}
 */
export default class HomePage extends Component {
  render() {
    const store = this.context.store;
    const state = store.getState();
    const movies = state.movies.results.map((movie) => {
      return <MovieRow data={ movie }/>;
    });
    return (
      <div>
        <Input
          onChange={ (e) => store.dispatch(setMoviesQuery(e.target.value)) }
          placeholder='enter a movie title'/>

        { state.ajax.callsInProgress === 0
          ? <List items={ movies }/>
          : <Spinner/> }
      </div>
    );
  }
}
