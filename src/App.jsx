import { Menu } from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { EventListPage } from "./pages/EventListPage";
import { TicketPaymentPage } from "./pages/TicketPaymentPage";

export function AppRouter() {
  return (
    <>
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
          <Route
            path="/events/:eventId/tickets/:priceId"
            element={<TicketPaymentPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
