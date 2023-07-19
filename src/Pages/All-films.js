import { Link, useLocation } from "react-router-dom";
import { useData } from "../component/Content_cards/main";
import "./Pages.css"
import PaginationControlled from "./pagination";
import { useEffect } from "react";


export const AllFilms = () => {

  const location = useLocation()


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
    


    const maxTitleLength = 18;
    const value = useData()
    console.log(value)
    return(
      <div className="marg">
          <p className="description_main">All Films</p>
        <div className="main">
          {value.map((item) => (
            <div className="card" key={item.row_idx}>
              <Link to={`${item.row_idx}`}>
                <img
                  className="card_img"
                  alt={item.row.genres}
                  src={`https://image.tmdb.org/t/p/original${item.row.poster_path}`}
                />
              </Link>
              <p className="card_title">{item.row.title.slice(0, maxTitleLength)}</p>
              <p className="card_title2">{item.row.release_date}</p>
            </div>
          ))}
        </div>
        <PaginationControlled />
        <div className="main_all">
          <div className="all_advert">
            <img className="img_advert" src="https://imageio.forbes.com/specials-images/imageserve/644740dcd70af14cc0a821c1/netflix-ad-supported-tiers/960x0.jpg?format=jpg&width=960"/>
          </div>
        </div>
      </div>
    )
}