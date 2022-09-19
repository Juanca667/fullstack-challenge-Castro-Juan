import Char from './Char'
import { getCharacters } from '../service'
import { useEffect, useState } from 'react'

const CharList = () => {
const [charList, setCharList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [image, setImage] = useState('')

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

return (
  <div className='page'>
  {isLoading && <span className='loading-text'>Loading</span>}
  <div>
    <img src={image} alt="No hay imagen" />
  </div>

  {charList.map((char) => (
    <Char
      key={char.id}
      name={char.name}
      status={char.status}
      species={char.species}
      imageUrl={char.image}
      setImage={setImage}
    />
  ))}
</div>
)
}

export default CharList