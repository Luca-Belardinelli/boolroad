// Importo Link per la navigazione tra le pagine
import { Link } from "react-router-dom";
// Importo lo stile di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Definisco il componente TravelsList che riceve la lista dei viaggi come prop
export default function TravelsList({ travels }) {

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-light">Destinazioni di Viaggio</h2>
            <ul className="list-group">
                {travels.map((trip) => (
                    <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border">
                        <strong>Viaggio:</strong> {trip.citta}  <strong>Date:</strong>{trip.dataPartenza} - {trip.dataArrivo}
                        <Link to={`/travel/${trip.id}`} className="btn btn-primary">Dettagli</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}