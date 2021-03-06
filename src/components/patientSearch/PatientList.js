import React, { useContext } from 'react';
import { Link, Navigate } from "react-router-dom"
import { Table, Button, Container } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState"

// schöne Date-Ausgabe
const date_toString = (date) => {
    const temp = date.split('-');
    return [temp[2], temp[1], temp[0]].join(".");
}

const PatientList = ({ patients }) => {
    let key = 0;

    const { fhirFetch } = useContext(GlobalContext);

    if (patients.total === 1) {
        fhirFetch(patients.entry[0].resource)
    }

    const globalizeObject = (patient) => {
        fhirFetch(patient)
    }

    return (
        <>
            {patients.total === 1
                ? <Navigate to='/patienten-uebersicht' />
                : <Container fluid="xl" className="rounded-2 mt-5 " style={{height: "90vh"}}>
                    <h1>
                        <span>Patientensuche</span>
                    </h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="text-center">Geburtsdatum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.entry.map((patient) =>
                                <tr key={key++}>
                                    <td>
                                        <Link
                                            to="/patienten-uebersicht"
                                        >
                                            <Button
                                                variant="light"
                                                id="patient_overview_button"
                                                onClick={() => globalizeObject(patient.resource)}
                                                type="submit"
                                            >
                                                {patient.resource.name[0].text}
                                            </Button>
                                        </Link>
                                    </td>
                                    <td className="col-lg-2 text-center">
                                        {date_toString(patient.resource.birthDate)}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            }
        </>
    )
}

export default PatientList;