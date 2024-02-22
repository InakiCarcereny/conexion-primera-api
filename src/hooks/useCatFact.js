import { useState, useEffect } from "react"
import { CAT_ENDPOINT } from "../data/constantes.js"

export function useCatFact () {
  const [catFact, setCatFact] = useState()

    useEffect(() => {
      fetch (CAT_ENDPOINT)
      .then (res => res.json())
      .then (data => setCatFact(data.fact))
    }, [])
    
  return { catFact }
}