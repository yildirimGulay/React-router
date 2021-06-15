/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    itemList();
    console.log("match:", match);
  }, []);

  const itemList = async () => {
    const response = await axios.get(
      `https://fortnite-api.com/v1/playlists/${match.params.id}`
    );

    console.log("itemdetail:", response.data.data);
    setItem(response.data.data);
  };

  console.log("item:", item);
  console.log("item.images:", item.images.showcase);
  return (
    <div>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <img src={item.images.showcase} alt="" />
    </div>
  );
};

export default ItemDetail;
