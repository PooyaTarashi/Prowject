import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../APIs/hmm";

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
    // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            return fetchAPI(new Date(action.date));
        default:
            return state;
    }
}

const BookingPage = () => {
    const [ availableTimes, dispatch ] = useReducer(updateTimes, initializeTimes());
    const [ selectedDate, setSelectedDate ] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        dispatch({ type: 'UPDATE_DATE', date: selectedDate });
    }, [selectedDate])

    return (
        <>
            <br/>
            <br/>
            <ul>
                {availableTimes.map( resTime => <li>{resTime}</li> )}
            </ul>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
        </>
    );
}

export default BookingPage;