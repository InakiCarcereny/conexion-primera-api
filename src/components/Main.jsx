import { CAT_IMG_PREFIX } from "../data/constantes.js";
import { useCatFact } from "../hooks/useCatFact.js";
import { useCatImage } from "../hooks/useCatImage.js";

export function Main () {

  const { catFact } = useCatFact()
  const { catImage } = useCatImage()

  return (
    <main className="flex flex-col justify-center items-center gap-6 mt-6 text-white font-bold text-3xl">
      <h1>Cat Facts</h1>
      <p>{catFact}</p>
      <img src={`${CAT_IMG_PREFIX}${catImage}`} alt="" />
    </main>
  )
}