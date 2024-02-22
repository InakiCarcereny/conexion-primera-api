import { useState, useEffect } from "react";
import { CAT_ENDPOINT_IMAGE } from "../data/constantes.js";

export function useCatImage () {
  const [catImage, setCatImage] = useState()
  
    useEffect (() => {
      fetch (CAT_ENDPOINT_IMAGE)
      .then (res => res.json())
      .then (data => setCatImage(data.url))
    },[])

  return { catImage }
}