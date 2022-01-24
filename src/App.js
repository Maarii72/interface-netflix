import React, {useEffect, useEffect} from "react";
import Tmdb from './Tmdb';

export default() => {
  //para ser exibida a lista
  const [movieList, setMovieList] = useState([]);

  useEffect(() =>{
  //executa esse bloco ao carregar
  const loadAll = async () =>{
    //Pegando a lista TOTAL
    let list = await Tmdb.getHomeList();
    console.log(list);
  }

  loadAll();
  }, []);

  return(
    <div>
      olá mundo
    </div>
  );
};