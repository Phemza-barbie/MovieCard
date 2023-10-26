import { useState } from 'react'
import Movies from './components/Movies'
import "./App.css"


function App() {
  const films = [
    {
      fname: "Power",
      director: "Courtney A.Kemp",
      image: "https://stz1.imgix.net/web/contentId/67912/type/KEY/dimension/1536x2048/lang/en-US?auto=compress,format",
      description: "Power is an American crime drama",
      ratings: "5.0",
    },
    {
      fname: "Fatal seduction",
      director: "Steven Pillemer Femi",
      image: "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-tv/fatal-seduction.jpg",
      description: "A married woman goes on a dangerous weekend trip away from home that sparks desire but ends tragically, making her wonder if the people close to her are telling the truth",
      ratings: "4.98",
    },
    {
      fname: "  Top boy",
      director: "Myriam Raja",
      image: "https://images.thedirect.com/media/article_full/top-boy-cast-characters-actors-in-all-5-seasons.jpg",
      description: "Drama sets in London about two friends and their gang trying to get rich the only way they know how; selling drugs",
      ratings: "5.0",
    },
    {
      fname: "Force",
      director: "Courtney A.Kemp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYr2_lWzFlPxDRfTXrl8bkGcteUHcvBjKhA&usqp=CAU",
      description: "Tommy Egan leaves New York behind and plans to go to Chicago, using his outsider status to break all the local rules and rewrite them on his own quest to become the biggest drug dealer in the city",
      ratings: "4.99",
    }, 
  ]

  return (
    <>
      <h3>Phemovies</h3>
      <div className='container'>
        {films.map(({fname, description, image, director, ratings}, index) =>(
          <Movies
          key={index}
          name={fname}
          maker={director}
          image={image}
          description={description}
          rating={ratings}
          />
        ))}
      </div>
    </>
  )
};

export default App
