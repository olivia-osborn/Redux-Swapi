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
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h4>Wait while we fetch your star wars data!</h4>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getCharacters
  }
)(CharacterListView);
