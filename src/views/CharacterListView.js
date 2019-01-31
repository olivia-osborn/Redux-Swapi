import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
    //call our action
  }

render() {

  return (
    <div>
      <h1>Star Wars Characters:</h1>
      {this.props.isFetching && (
        <h4>Wait while we retrieve your data...</h4>
      )}
      {this.props.characters && (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      )}
      {this.props.error && (
        <h4>{`${this.props.error}`}</h4>
      )}
    </div>  
  )
}
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getCharacters
  }
)(CharacterListView);
