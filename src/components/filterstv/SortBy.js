import {Form} from "react-bootstrap";
import {useTV} from "../tvseries/TVContext"

function SortBy(props) {
       const {selectedSortBy,setSelectedSortBy} =useTV();
    const options = [
   
        {
            value: "popularity.desc",
            title: "С най-висок рейтинг",
        },
        {
            value: "popularity.asc",
            title: "С най-нисък рейтинг",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
                    key={option.value}
                    value={option.value}>
                {option.title}
            </option>
        })
    }

    return (
        <Form.Group 
        
            className="mb-4" 
            controlId="filterForm.ControlSelect1">
            
            <Form.Label>Подреди по</Form.Label>
            <Form.Select
                value={selectedSortBy}
                onChange={e=> setSelectedSortBy(e.target.value)}>
                 {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default SortBy;

