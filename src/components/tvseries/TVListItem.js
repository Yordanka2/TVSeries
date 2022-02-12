import moment from "moment";
import constantstv from "../../constantstv";




function TVListItem({ title,overview, rating,poster}) {
  
    

    function getPoster() {
           return `${constantstv.imageBaseUrl}${poster}`;
          }

    return (
        <>
            <div className="d-flex py-1">
                <img className="TV-poster" src={getPoster()} alt={title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold tv-title">{title}</div>
                            
                        </div>
                        <span className="tv-vote badge rounded-pill bg-primary ms-auto">
                            {rating}
                        </span>
                    </div>
                    <div className="tv-overview pt-3">
                        {overview}
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}

export default TVListItem;



