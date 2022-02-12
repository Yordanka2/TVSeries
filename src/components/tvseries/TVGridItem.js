import moment from "moment";
import constantstv from "../../constantstv";

function TVGridItem({title,overview, rating,poster}) {

  
    function getPoster() {
        return `${constantstv.imageBaseUrl}${poster}`;
    }

    return (
        <>
             <div className="col-md-4">
                <div className="grid-tv-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="tv-poster w-50" 
                        src={getPoster()} alt={title}/>
                        <div className="px-2">
                            <div className="movie-vote badge rounded-pill bg-primary">{rating}</div>
                            <div className="fw-bold tv-title py-1">{title}</div>
                         
                        </div>
                    </div>
                    <div className="tv-overview pt-3">
                        {overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TVGridItem;
