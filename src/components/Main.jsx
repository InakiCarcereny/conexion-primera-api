import { useEffect, useState } from "react";

const CAT_ENDPOINT = 'https://catfact.ninja/fact'

const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/ramon?fontSize=50&fontColor=red&json=true'

const CAT_IMG_PREFIX = 'https://cataas.com'


export function Main () {

  const [catFact, setCatFact] = useState()
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    fetch (CAT_ENDPOINT)
    .then (res => res.json())
    .then (data => setCatFact(data.fact))
  }, [])

  useEffect (() => {
    fetch (CAT_ENDPOINT_IMAGE)
    .then (res => res.json())
    .then (data => setCatImage(data.url))
  },[])

  //useEffect(() => {
  //  async function fetchCatFact() {
  //    const res = await fetch(CAT_ENDPOINT)
  //    const data = await res.json()
  //    setCatFact(data.fact)
  //  }

  //  fetchCatFact()
  //}, []) 

  return (
    <main className="flex flex-col justify-center items-center gap-6 mt-6 text-white font-bold text-3xl">
      <h1>Cat Facts</h1>
      <p>{catFact}</p>
      <img src={`${CAT_IMG_PREFIX}${catImage}`} alt="" />
    </main>
  )
}