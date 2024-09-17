import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state;
    }
}

const BookingPage = () => {
    const [ availableTimes, dispatch ] = useReducer(updateTimes, initializeTimes());
    const [ selectedDate, setSelectedDate ] = useState('');

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        />
    );
}

export default BookingPage;