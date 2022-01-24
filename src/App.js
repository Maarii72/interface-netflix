import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from "./components/MovieRow/MovieRow";
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';


export default() => {
  //para ser exibida a lista
  const [movieList, setMovieList] = useState([]);
  //para o destaque ser exibido
  const[featuredData, setFeaturedData] = useState(null);

  useEffect(() =>{
  //executa esse bloco ao carregar
  const loadAll = async () =>{
    //Pegando a lista TOTAL
    let list = await Tmdb.getHomeList();
    //console.log(list);
    setMovieList(list);

    //mostrando o filme em destaque (featured)
    let originals = list.filter(i=>i.slug === 'originals');//pegar o item do array originals
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
    
  }

  loadAll();
  }, []);

  return(
    <div className="page">

    {featuredData &&
      <FeaturedMovie item={featuredData} />
    }

      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
};