import TVList from "../components/tvseries/TVList";
import Filterstv from "../components/filterstv/Filterstv";
import {Col} from "react-bootstrap";
import {TVProvider} from "../components/tvseries/TVContext";




function TV(props) {


    return (
        <TVProvider>
            <Col md={3} >
                <Filterstv/>
            </Col>
            <Col>
                <TVList/>
            </Col>
        </TVProvider>
    )
}
export default TV;




