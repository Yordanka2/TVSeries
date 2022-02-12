
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {useTV} from "../tvseries/TVContext";
import "react-datepicker/dist/react-datepicker.css";





function FilterByDate(props) {

    const {startDate, setStartDate, endDate, setEndDate} = useTV();

    

      return (
        <Form.Group 
        className="mb-3" 
        controlId="filterForm.ControlDate1">
        <Form.Label>Избери преди коя дата на излъчване </Form.Label>
        <div className="d-flex align-items-center">
            <DatePicker 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                selected={endDate} 
                onChange={(date) => setEndDate(date)} />
        </div>
        <Form.Label>Избери след коя дата на излъчване </Form.Label>
        <div className="d-flex align-items-center">
            <DatePicker 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                selected={startDate} 
                onChange={(date) => setStartDate(date)} />
        </div>
    </Form.Group>
    )
}
export default FilterByDate;


