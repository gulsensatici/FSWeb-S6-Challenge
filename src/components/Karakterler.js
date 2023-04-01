// Karakter bileşeniniz buraya gelecek

import axios from 'axios';
import { useEffect, useState } from 'react';

import Filmler from 'C:\Users\Hp\FSWeb-S6-Challenge\Filmler.js';

const Karakterler = () => {
    const [characters, setCharacters] = useState([]);
    const [films, setFilms]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect ( ()=> {
       const charsPromis= axios("https://swapi.dev/api/people/");
       
       const filmsPromise= axios("https://swapi.dev/api/films/");
       const promise3 = new Promise((resolve, reject)=>{
        setTimeout(resolve, 1000, "foo");
       });
       
        Promise.all([charsPromis, filmsPromise, promise3]).then((values) => {
            console.log(values);
          setCharacters( values[0].data);
          setFilms( values[1].data[0].results);
          setLoading(false);
        })
    }, []);
    return (
        <div>
            {loading && <h2>Yükleniyor</h2>}
            
            {!loading &&
            characters.map((char, i)=>{
             return <Filmler char ={char} i={i} films={films} />;
            })}
            
            
            
  
        </div>
    
    );
    
}
export default Karakterler;
