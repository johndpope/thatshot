import * as actionTypes from '../constants/actionTypes';

const initialState = {
  savantTracks: [],
  userTracks: [],
  upVoteHover: false
}

export default function(state = initialState, action) {
  switch (action.type){
    case actionTypes.TRACKS_SET_SAVANT: return setSavantTracks(state, action);
    case actionTypes.TRACKS_SET_USER: return setUserTracks(state, action)
    case actionTypes.UPVOTE_TRACK: return upVoteTrack(state, action);
    case actionTypes.ALREADY_UPVOTED: return alreadyUpvoted(state, action)
    case actionTypes.MOUSE_ENTER_UPVOTE: return mouseEnterUpvote(state, action)
    case actionTypes.MOUSE_LEAVE_UPVOTE: return mouseLeaveUpvote(state, action)
  }
  return state;
}

function setSavantTracks(state, action) {
  const savantTracks = action.tracks;
  return { ...state, savantTracks };
}

function setUserTracks(state, action) {
  let userTracksInAction = action.tracks;
  if(Array.isArray(userTracksInAction)) {
    let userTracks = userTracksInAction
    return {...state, userTracks}
  }
  else {
    let userTracksArr = state.userTracks.slice();
    userTracksArr.push(userTracksInAction)
    let userTracks = userTracksArr;
    return { ...state, userTracks };
  }

}

function upVoteTrack(state, action){

  const newUpvotes = action.track.upvotes;
  const upvoted = Object.assign({}, action.track, {
    upvotes: newUpvotes
  })
  console.log(Object.assign({}, state, {
    savantTracks: state.savantTracks.map(track => track.id === upvoted.id ? upvoted : track),
    userTracks: state.userTracks.map(track => track.id === upvoted.id ? upvoted : track)
  }));
  return Object.assign({}, state, {
    savantTracks: state.savantTracks.map(track => track.id === upvoted.id ? upvoted : track),
    userTracks: state.userTracks.map(track => track.id === upvoted.id ? upvoted : track)
  })
}

function alreadyUpvoted(state, action){
  console.log('already upvoted lol');
  return {...state}
}

function mouseEnterUpvote(state, action){
  return Object.assign({}, state, action.upVoteHover);
}

function mouseLeaveUpvote(state, action){
  return Object.assign({}, state, action.upVoteHover);
}
