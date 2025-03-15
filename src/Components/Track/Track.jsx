import { useState } from "react";

/* displays each song with details such as name, artist and album. When display it should also show a button for adding/removing */

const songList = [
    {
      id: "1",
      name: "California Dreamin'",
      artist: "The Mamas & The Papas",
      album: "If You Can Believe Your Eyes And Ears",
    },
    {
      id: "2",
      name: "luther(with sza)",
      artist: "Kendrick Lamar" + "sza",
      album: "GNX",
    },
    {
      id: "3",
      name: "HONEST",
      artist: "Baby Keem",
      album: "DIE FOR MY BITCH",
    },
  ];

  const Track = () => {
    const [list, setList] = useState(songList);

    function removeTrack(id) {
        const newList = list.filter((song) => song.id !== id);

        setList(newList);
    }

    
    return (
        <>
        <ul>
            {list.map((song) => (
                <li key={song.id}>
                    <span>{song.name}</span>
                    <span>{song.artist}</span>
                    <span>{song.album}</span>
                    <button type="button" onClick={() => removeTrack(song.id)}>-</button>
                </li>
            ))}
        </ul>
        </>
    );
  };
  export default Track;