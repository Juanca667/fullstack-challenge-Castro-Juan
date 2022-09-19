import { useState, useEffect } from 'react';
import Color from './Color';
import { getColors } from '../service';
import { colors } from './colors';

const ColorPicker = () => {
  const [colorList, setColorList] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // let isCancelled = false
    setIsLoading(true);
    // if(!isCancelled) {
    getColors()
      .then((data) => setColorList(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
    // }

    // return () => {
    //   isCancelled = true
    // }
  }, []);

  // useEffect(() => {
  //   setIsLoading(true)
  //   const timeOut = setTimeout(() => {
  //     setColorList(colors)
  //     setIsLoading(false)
  //   }, 2000)
  //   return () => {
  //     clearTimeout(timeOut)
  //   }
  // }, []);

  return (
      <div className='page' style={{ backgroundColor }}>
        {isLoading && <span className='loading-text'>Loading</span>}
        {colorList.map((color) => (
          <Color
            key={color.id}
            hex={color.hex}
            name={color.name}
            setBackgroundColor={setBackgroundColor}
          />
        ))}
      </div>
  );
};
export default ColorPicker;
