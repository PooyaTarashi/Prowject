import { useState } from "react";
import { submitAPI } from "../APIs/hmm";

const BookingForm = ({ availableTimes, dispatch, selectedDate, setSelectedDate, submitForm }) => {
    const style = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    };

    // const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState(availableTimes[0]);
    const [ number, setNumber ] = useState(1);
    const [ occasion, setOccasion ] = useState('Birthday');

    const [ touched, setTouched ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`${time}\n${number}\n${occasion}`);

        const formData = {
            date: selectedDate,
            time: time,
            number: number,
            occasion: occasion
        };

        const success = submitAPI(formData);
        if (success) {
            alert(`${selectedDate}${time}\n${number}\n${occasion} RESERVED SUCCESSFLLY!`);
        } else {
            alert("Failed!")
        }

        submitForm(formData);

        // clearForm();
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
        // dispatch({ type: 'UPDATE_DATE', date: newDate })
    }

    const clearForm = () => {
        /////////////////////////////////////////
        setTime('17:00');
        setNumber(1);
        setOccasion('Birthday');
    }

    const buttonActivated = () => {
        return (
            // typeof selectedDate === 'string' &&
            touched &&
            (time === '17:00' || time === '18:00' || time === '19:00' || time === '20:00' || time === '21:00' || time === '22:00') &&
            number > 0 &&
            number < 10 &&
            nameValid === true
        );
    }

    const [ nameValid, setNameValid ] = useState(false);

    const handleNameValidation = (e) => {
        const nameLen = e.target.value.length;
        if (nameLen < 5) {
            setNameValid('MINVIOLATED');
        } else if (nameLen > 30) {
            setNameValid('MAXVIOLATED');
        } else {
            setNameValid(true);
        }
    }

    const nameErrorStyle = {
        color: '#ee0000'
    }

    return (
        <form class="reservation-form" onSubmit={ handleSubmit }>
            <h1>Book Now!</h1>

            <div class="form-group">
                <label htmlFor="name">Reservation Name</label>
                <input type="text" id="name" class="input-field" minLength={5} maxLength={31} onChange={ handleNameValidation } aria-label="Input for the name" data-testid="reservation-name-input" />
                { nameValid === 'MINVIOLATED' && <p data-testid="error-min-text" class="error-text">Name is shorter than required (5 characters)</p> }
                { nameValid === 'MAXVIOLATED' && <p class="error-text">Name is longer than required (30 characters)</p> }
            </div>

            <div class="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" class="input-field" aria-label="Input for choosing the date of the reservation" onChange={ handleDateChange } onFocus={ () => setTouched(true) } value={ selectedDate } />
            </div>

            <div class="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" class="input-field" aria-label="Dropmenu to select reservation time" onChange={ e => setTime(e.target.value) } value={time}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                </select>
            </div>

            <div class="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" class="input-field" aria-label="Choose the number of people" placeholder="1" min="1" max="10" onChange={ e => setNumber(Number(e.target.value)) } value={number} />
            </div>

            <div class="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" class="input-field" aria-label="Choose occasion" value={occasion} onChange={ e => setOccasion(e.target.value) } required>
                <option>Birthday</option>
                <option>Anniversary</option>
                </select>
            </div>

            <input type="submit" class="submit-button" aria-label="Button to submit the form" disabled={!buttonActivated()} value="Make Your Reservation" />
            </form>

    );
}

export default BookingForm;