import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import BookingPage from "./BookingPage"
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/menu" element={<HomePage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
        </Routes>
      </main>
    );
}

export default Main;