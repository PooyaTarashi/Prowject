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
        <form style={style} onSubmit={ handleSubmit }>
            <br/>
            <br/>
            <h1>Book Now!</h1>

            <label htmlFor="name">Reservation Name</label>
            <input type="text" id="name" minLength={5} maxLength={31} onChange={ handleNameValidation } data-testid="reservation-name-input" />
            { (nameValid === 'MINVIOLATED') && <p data-testid="error-min-text" style={ nameErrorStyle }>Name is shorter than required (5 characters)</p> }
            { (nameValid === 'MAXVIOLATED') && <p style={ nameErrorStyle }>Name is longer than required (30 characters)</p> }


            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={ handleDateChange } onFocus={ () => setTouched(true) } value={ selectedDate } />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={ e => setTime(e.target.value) } value={time}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={ e => setNumber(Number(e.target.value)) } value={number} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={ e => setOccasion(e.target.value) } required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" disabled={!buttonActivated()} value="Make Your reservation" onChange={ e => setOccasion(e.target.value) } />
        </form>
    );
}

export default BookingForm;