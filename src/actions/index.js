import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE"


export const getCharacters = () => dispatch => {
    dispatch({type: FETCHING});
    axios
        .get("https://swapi.co/api/peoplse/")
        .then(response => {
            dispatch({
                type: SUCCESS, 
                payload: response.data.results
            })
        }
        )
        .catch(err => {
            console.log("err", err)
            dispatch({ 
            type: FAILURE,
            payload: err
        })}
    )
}

