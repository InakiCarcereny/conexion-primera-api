import { useEffect, useState } from "react";

const CAT_ENDPOINT = 'https://catfact.ninja/fact'

export function Main () {

  const [catFact, setCatFact] = useState('')

  useEffect(() => {
    fetch (CAT_ENDPOINT)
    .then (res => res.json())
    .then (data => setCatFact(data.fact))
  }, [])

  //useEffect(() => {
  //  async function fetchCatFact() {
  //    const res = await fetch(CAT_ENDPOINT)
  //    const data = await res.json()
  //    setCatFact(data.fact)
  //  }

  //  fetchCatFact()
  //}, []) 

  return (
    <main className="flex flex-col gap-6">
      <h1>Cat Facts</h1>
      <p>{catFact}</p>
    </main>
  )
}