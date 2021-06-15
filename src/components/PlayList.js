/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlayList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    playList();
  }, []);

  const playList = async () => {
    const response = await axios.get("https://fortnite-api.com/v1/playlists");
    /* const items=await response.json(); */
    console.log("items:", response.data.data);
    setItems(response.data.data);
  };

  return (
    <div>
      {items
        .filter(
          (x) =>
            x.id !== "Playlist_ItemTest_NoBuild" &&
            x.description !== null &&
            x.images.showcase !== null
        )
        .slice(0, 10)
        .map((item) => (
          <h3 key={item.id}>
            PlayList Name: <Link to={`/playlist/${item.id}`}>{item.name}</Link>{" "}
          </h3>
        ))}
    </div>
  );
};

export default PlayList;
