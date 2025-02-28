import {Component} from 'react'
import {FiTrash} from 'react-icons/fi'
import './index.css'

class Musicsection extends Component {
  onClickDelete = () => {
    const {id, onDeleteSong} = this.props
    onDeleteSong(id)
  }

  render() {
    const {eachsongitem} = this.props
    const {name, imageUrl, genre, duration} = eachsongitem
    return (
      <li className="music-section">
        <div className="image-section">
          <img src={imageUrl} alt="track" className="song-image" />
          <div className="song-content">
            <h1 className="song-name">{name}</h1>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-section">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={this.onClickDelete}
          >
            <FiTrash className="delete-icon" size={18} />
          </button>
        </div>
      </li>
    )
  }
}

export default Musicsection
