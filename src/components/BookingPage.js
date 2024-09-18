import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom"
import { fetchAPI, submitAPI } from "../APIs/hmm";

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
    // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            return fetchAPI(new Date(action.date));
        case 'UPDATE_DATE':
            return fetchAPI(new Date(action.payload))
        default:
            return state;
    }
}

const BookingPage = () => {
    const [ availableTimes, dispatch ] = useReducer(updateTimes, initializeTimes());
    const [ selectedDate, setSelectedDate ] = useState(new Date().toISOString().split('T')[0]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'INITIALIZE' });
    }, []);

    useEffect(() => {
        dispatch({ type: 'UPDATE_DATE', payload: selectedDate });
    }, [selectedDate]);

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate('/confirmed');
        } else {
            alert("Booking Failed!")
        }
    }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <div style={{ display: 'flex' }}>
                <h3>Available Times:</h3>
                <ul className="res-times-table">
                    {availableTimes.map( resTime => <li>{resTime}</li> )}
                </ul>
            </div>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                submitForm={submitForm}
            />
        </>
    );
}

export default BookingPage;