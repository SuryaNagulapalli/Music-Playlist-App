# Music Playlist App

This project is a React-based music playlist application that allows users to view, search, and delete tracks from a playlist. The app demonstrates the use of **Lists and Keys** in React, along with dynamic rendering based on user interactions.

## Features

- **Display Tracks**: Initially, the app displays a list of tracks with their details (image, name, genre, duration) and a delete button for each track.
- **Search Functionality**: Users can search for tracks by typing in the search input. The app filters and displays tracks that match the search query (case-insensitive).
- **Delete Tracks**: Users can delete individual tracks by clicking the delete button. If all tracks are deleted or no tracks match the search query, a "No Songs Found" view is displayed.
- **Responsive Design**: The app is designed to work seamlessly across different screen sizes (mobile, tablet, and desktop).

## Project Structure

- **Components**:
  - `App.js`: The main component that manages the state and logic for the app.
  - `TrackItem.js`: A component that renders individual track items.
  - `NoSongsView.js`: A component that displays the "No Songs Found" view.
- **Data**:
  - `initialTracksList.js`: Contains the initial list of tracks with details like `id`, `imageUrl`, `name`, `genre`, and `duration`.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the App**:
   ```bash
   npm start
   ```

4. **Open the App**:
   - The app will open in your default browser at `http://localhost:3000`.

## Functionality

- **Display Tracks**:
  - The app initially renders all tracks from the `initialTracksList`.
  - Each track item includes an image, name, genre, duration, and a delete button.

- **Search Tracks**:
  - Users can type in the search input to filter tracks by name.
  - The search is case-insensitive.
  - If no tracks match the search query, the "No Songs Found" view is displayed.

- **Delete Tracks**:
  - Clicking the delete button removes the respective track from the list.
  - If all tracks are deleted, the "No Songs Found" view is displayed.

## Important Notes

- The `imageUrl` in each track item has an `alt` attribute set to **track**.
- The delete button in each track item has a `data-testid` attribute set to **delete**.

## Project Images

### Music Playlist View
![Music Playlist View](https://assets.ccbp.in/frontend/content/react-js/music-playlist-lg-output.png)

### No Songs Found View
![No Songs Found View](https://assets.ccbp.in/frontend/content/react-js/music-playlist-no-songs-found-lg-ouput.png)

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.

---

Developed by [Surya Nagulapalli](https://github.com/SuryaNagulapalli).  
For more projects, visit my [GitHub profile](https://github.com/SuryaNagulapalli).

--- 

Enjoy building and exploring the Music Playlist App! 🎶