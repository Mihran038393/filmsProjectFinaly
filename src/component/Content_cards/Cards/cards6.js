import { Link } from "react-router-dom";
import { useData } from "../main";

export const Card6 = () => {

    const value = useData()
    const displayedCards6 = value.slice(35, 41);
    const maxTitleLength = 18; 

    return(
        <>
        <p className="title_main">Movies in 4K UHD</p>
        <div className="main">
            {displayedCards6.map((item) => (
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
        </>
    )
}