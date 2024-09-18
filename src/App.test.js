import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.mock('./components/BookingPage', () => ({
  ...jest.requireActual('./components/BookingPage'),
  fetchAPI: jest.fn()
}));

test ('Renders the Booking Form heading', () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={jest.fn()} selectedDate={""} setSelectedDate={jest.fn()} />);
  const headingElement = screen.getByRole('heading', { name: /Book Now!/i });
  // const headingElement = screen.getByText("Book");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same times as provided in the state when no action is dispatched', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const newState = updateTimes(initialState, { type: '' });
  expect(newState).toEqual(initialState);
});

test('updateTimes returns the same times when UPDATE_DATE action is dispatched', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_DATE', date: '2024-09-17' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});

test("User gives 3 characters input to the name field and error message should be shown", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={jest.fn()} selectedDate={""} setSelectedDate={jest.fn()} />);
  const testName = "Ali";
  // const textInput = screen.getByLabelText(/Reservation Name/i);
  const textInput = screen.getByTestId('reservation-name-input');

  fireEvent.change(textInput, { target: { value: testName } });
  // const errorMin = screen.getByRole('p', { name: /Name is shorter than required (5 characters)/i });
  const errorMin = screen.getByTestId('error-min-text');
  expect(errorMin).toBeInTheDocument();
});