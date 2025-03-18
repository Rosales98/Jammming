import { useCallback } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

/* Displays the added songs, will include the option to remove the songs */

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (e) => {
      props.onNameChange(e.target.value);
    },
    [props.onNameChange]
  );

  return (
    <>
      <div className="Playlist">
        <input onChange={handleNameChange} defaultValue={"New Playlist"} />
        <Tracklist
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
        <button className="Save-Btn">SAVE TO SPOTIFY</button>
      </div>
    </>
  );
};

export default Playlist;
