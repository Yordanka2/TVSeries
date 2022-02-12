
import TVListItem from "./TVListItem";
import TVGridItem from "./TVGridItem";
import {useTV} from "../tvseries/TVContext";
import NoResults from "./NoResults";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';


function TVList(props) {


    const {tv, listView, setListView} = useTV();
   
    //const renderTV = () => {
        function renderTV() {
                  if (!tv.length) {
                return <NoResults/>
        } 
        
        return listView ? getTVListItems() : getTVGridItems();
    }

    function getTVListItems() {
        return tv.map(tv => {
            return <TVListItem 
                key={tv.id}
                title={tv.name}
                overview={tv.overview}
                poster={tv.poster_path}
                rating={tv.vote_average}
                >
            </TVListItem>
        })
    }


    
    function getTVGridItems() {
        return tv.map(tv => {
                return <TVGridItem 
                    key={tv.id}
                    title={tv.name}
                    overview={tv.overview}
                    poster={tv.poster_path}
                    rating={tv.vote_average}
                    >
                </TVGridItem>
            })
        }
        
    

    return (
      
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултат</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary': 'outline-primary'}
                            onClick={()=> setListView(true)}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-primary': 'primary'}
                               onClick={()=> setListView(false)}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
               
                <div className="row" >
                    {renderTV()}
                
                </div>
            </Card.Body>
        </Card>

    )
}
export default TVList;