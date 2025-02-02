import Reservations from './Reservations';
import ReservationsBanner from './Reservations-banner';

const ReservationsPage = () => {
    return (
        <div>
            <ReservationsBanner />
            <Reservations />
        </div>
    );
};

export default ReservationsPage;