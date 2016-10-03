const CronJob = require('cron').CronJob
const runSavant = require('../funStuff/savant').runSavant
const Song = require('../db/models/song')
const User = require('../db/models/user')
const Promise = require('bluebird')

// const job = new CronJob('00 36 0 * * 0-6', () => persistToDb(), null, true, 'America/Los_Angeles')

function persistToDb() {
  Promise.all([runSavant(), User.findOne({where: {username: 'The Savant'}})])
  .spread((flames, user) => Promise.all(flames.map(song => user.createSong({
    artwork_url: song.artwork_url,
    duration: song.duration,
    genre: song.genre,
    trackId: song.id,
    permalink_url: song.permalink_url,
    reposts_count: song.reposts_count,
    title: song.title,
    artist: song.user.username,
    artist_uri: song.user.uri,
    playback_count: song.playback_count,
    artist_permalink: song.user.permalink_url,
    stream_url: song.stream_url,
    artist_id: song.user.id,
    waveform_url: song.waveform_url
  }))))
  .catch(err => console.log(err))

}
