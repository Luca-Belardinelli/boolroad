// TravelDetailCard.jsx

// Importo i file CSS e JS di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importo il componente SearchBar per la ricerca tra i partecipanti
import SearchBar from "./SearchBar";

// Importo Link per gestire la navigazione
import { Link } from "react-router-dom"

// Importo il form per aggiungere una nuova persona
import FormPersona from "./FormPersona";

// IMPORTO USESTATE  di React per gestire stati locali
import { useState } from 'react';

export default function TravelsDetailCard({ travel, onAddPersona }) {

    // Se non ricevo un viaggio valido, mostro un messaggio di errore
    if (!travel) {
        return <p>Viaggio non trovato.</p>;
    }

    // Stato per gestire il valore della barra di ricerca
    const [search, setSearch] = useState("");

    // Funzione di filtro applicata direttamente nella map
    const filteredPeople = search
        ? travel.persone.filter(person =>
            person.nome.toLowerCase().includes(search.toLowerCase()) ||
            person.cognome.toLowerCase().includes(search.toLowerCase())
        )
        : travel.persone;

    return (

        <div className="travel_detail_card">
            <strong className="mb-5">Partecipanti al viaggio : {travel.citta}</strong>

            <SearchBar search={search} setSearch={setSearch} />

            <div className="accordion" id="accordionGroup">
                {filteredPeople.map((persona) => {
                    const collapseId = `collapse-${persona.id}`;

                    return (
                        <div className="accordion-item" key={persona.id}>
                            <h2 className="accordion-header" id={`heading-${persona.id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded="false"
                                    aria-controls={collapseId}
                                >
                                    {persona.nome} {persona.cognome}
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionGroup"
                            >
                                <div className="accordion-body">
                                    <span> <strong>Età :</strong> {persona.eta}</span>
                                    <span> <strong>Email:</strong> {persona.email}</span>
                                    <span><strong>Numero:</strong> {persona.numeroTelefonico}</span>
                                    <span> <strong>C.F:</strong> {persona.codiceFiscale}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-success mt-3">
                    Torna alla lista dei viaggi
                </Link>
            </div>
            <FormPersona onAddPersona={onAddPersona} persone={travel.persone} />
        </div>


    );
}
