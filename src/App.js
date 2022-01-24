import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from "./components/MovieRow/MovieRow";

export default() => {
  //para ser exibida a lista
  const [movieList, setMovieList] = useState([]);

  useEffect(() =>{
  //executa esse bloco ao carregar
  const loadAll = async () =>{
    //Pegando a lista TOTAL
    let list = await Tmdb.getHomeList();
    //console.log(list);
    setMovieList(list);
  }

  loadAll();
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
};