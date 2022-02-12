import React, { useContext, useState } from "react";
import axios from 'axios';
import constantstv from '../../constantstv';
import moment from "moment";

const TVContext = React.createContext();



export function useTV() {
    return useContext(TVContext);
}
export function TVProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");
    const startFrom = moment().subtract(1, 'years').toDate();
    const [startDate, setStartDate] = useState(startFrom);
    const [endDate, setEndDate] = useState(new Date());
    


    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [listView, setListView] = useState(true);





    const [tv, setTV] = useState([]);

    const fetchTV = (path, params) => {
        axios.get(`${constantstv.baseUrl}${path}` , {
            params: {...params, api_key: constantstv.apiKey}
        })
        .then(response => {
            setTV(response.data.results);
        })
    }

    return (
        <TVContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                startDate, 
                setStartDate,
                endDate, 
                setEndDate,
                checkedState,
                setCheckedState,
                tv,
                setTV,
                fetchTV,
                listView,
                setListView,
            }}>
            {props.children}
        </TVContext.Provider>
    )
}