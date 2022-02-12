import { Card,Form, Button} from "react-bootstrap";
import SortBy from "./SortBy";
import FilterByDate from "./FilterByDate";
import Genres from "./Genres";
import {useTV} from "../tvseries/TVContext";
import {useEffect} from 'react';
import moment from 'moment';

const checkboxes = [
    {
        value: 10759,
        label: "Екшън и приключенски",
        id: "action",
    },
    {
        value: 35,
        label: "Комедия",
        id: "comedy",
    },
    {
        value: 99,
        label: "Документален",
        id: "documention",
    },
    {
        value: 16,
        label: "Анимация",
        id: "animation",
    },
]
   function Filterstv(props){

    const {
        selectedSortBy,
        startDate,
        endDate,
        checkedState,
        fetchTV,
    } = useTV();

        useEffect(() => {
            getTV();
        }, []);

        

   function filtersOnSubmit(e){
    e.preventDefault();
    getTV();

          
    
}



function getTV() {
    fetchTV('discover/tv', {
        "air_date.gte": getDate(startDate),
        "air_date.lte": getDate(endDate),
        "with_genres" :getCheckedOptions(),
        "sort_by": selectedSortBy,
        

       });

     }


     function getDate(date){
        return moment(date).format('YYYY-MM-DD');
     
 }


 function getCheckedOptions() {
         
      const checkedOptions = checkedState.reduce((acc, curr, index) => {
            if(curr){
                return [...acc, checkboxes[index].value]
            }
            return acc
        }, [])
        return checkedOptions.toString();
        
    }



    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                 <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <FilterByDate/>
                    <Genres checkboxes={checkboxes}/>
                    <Button 
                        variant="primary" 
                        type="submit">
                        Намери
                    </Button>
               </Form>
               
            </Card.Body>
        </Card>
    )
}
export default Filterstv;


