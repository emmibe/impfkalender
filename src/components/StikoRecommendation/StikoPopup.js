import React from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const formatMonthNumber = (dateNumber) => {
    // dateNumber in Jahren angeben
    if (dateNumber > 12) {
        // Jahre + restliche Monate angeben
        return `${Math.round(dateNumber / 12)}. Jahr`;
    }
    // dateNumber in Monaten angeben
    else return `${dateNumber}. Monat`;
}

// toString für Zeitraum
const dateRange = (from, to) => {
    if (from === to) return `im ${formatMonthNumber(from)}`;
    else return `vom ${formatMonthNumber(from)} bis zum ${formatMonthNumber(to)}`;
}

// schöne Date-Ausgabe
const date_toString = (date) => {
    const temp = date.split('-');
    return [temp[2], temp[1], temp[0]].join(".");
}

const patientAge = (infos, patient) => {
    switch (new Date(infos.date).getFullYear() - new Date(patient.birthdate).getFullYear()) {
        case 0:
            return new Date(infos.date).getMonth() - new Date(patient.birthdate).getMonth() + " Monate"
        case 1:
            return "1 Jahr und " + new Date(infos.date).getMonth() - new Date(patient.birthdate).getMonth() + " Monate"
        default:
            return new Date(infos.date).getFullYear() - new Date(patient.birthdate).getFullYear() + " Jahre"
    }
}

const StikoPopup = ({ showPopUp, switchPopUp, infos, colors, element, patient }) => {
    return (
        <div className='StikoPopup'>
            <Modal show={showPopUp} onHide={() => switchPopUp()} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {infos.pathogen + ": " + (colors === "orange"
                            ? "verspätet"
                            : "rechtzeitig") + " verimpft"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="stiko_popup">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Erreger:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {infos.pathogen}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfstoff:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {infos.vaccine}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Status:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                               {infos.status}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Immunisierungsgrad:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {infos.immun} 
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfdatum:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {date_toString(infos.date)}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Alter des Patienten zum Impfzeitpunkt:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {patientAge(infos, patient)}
                            </Col>
                        </Form.Group>

                        {/* "empfohlener Zeitraum" wird nur bei verspäteter Impfung angezeigt */}
                        {colors === "orange" ?
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3} md={5} lg={5}>
                                    empfohlener Zeitraum:
                                </Form.Label>
                                <Col sm={3} md={5} lg={5}>
                                    {dateRange(element.r_start, element.r_end)}
                                </Col>
                            </Form.Group> : null
                        }

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfstelle:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                               {infos.site}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Dosis in ml:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {infos.dose}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfgrund:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                               {infos.reason}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Bemerkung:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                {infos.note}
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={() => switchPopUp()}>Schließen</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default StikoPopup;