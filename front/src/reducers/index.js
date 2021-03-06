import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import track from './track'
import player from './player'
import signup from './auth.signup'
import login from './auth.login'
import stream from './stream'
import header from './header'
import subscribe from './header.subscribe'
import loader from './loader'
import artist from './artist'
import { reducer as notifReducer } from 'redux-notifications'

export default combineReducers({
  auth,
  subscribe,
  track,
  signup,
  login,
  header,
  player,
  stream,
  loader,
  artist,
  notifs: notifReducer,
  routing: routerReducer
})
