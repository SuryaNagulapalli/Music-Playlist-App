import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Musicsection from '../Musicsection'
import './index.css'

class Topsection extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = props
    this.state = {
      searchInput: '',
      songsList: initialTracksList,
    }
  }

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleDeleteSong = id => {
    this.setState(prevState => ({
      songsList: prevState.songsList.filter(song => song.id !== id),
    }))
  }

  render() {
    const {searchInput, songsList} = this.state
    console.log(searchInput)

    const filterSongsList = songsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="top-section-bg-container">
        <div className="name-section">
          <h1 className="name">Ed Sheeran</h1>
          <p className="role">Singer</p>
        </div>
        <div className="music-section-bg-container">
          <div className="heading-and-search-container">
            <h1 className="music-heading">Songs Playlist</h1>
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeUserInput}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          {filterSongsList.length === 0 ? (
            <p className="no-songs-heading">No Songs Found</p>
          ) : (
            <ul className="songs-item-container">
              {filterSongsList.map(eachSong => (
                <Musicsection
                  key={eachSong.id}
                  eachsongitem={eachSong}
                  id={eachSong.id}
                  onDeleteSong={this.handleDeleteSong}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Topsection
