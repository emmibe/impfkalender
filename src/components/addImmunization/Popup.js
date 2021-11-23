import React from "react";
import Immunization from './immunization'
import { postImmunization } from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.immunization = new Immunization(props.uuid, props.pid, props.perf, "", "");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch(event.target.name){
      case 'vaccine':
        this.immunization.vaccine = event.target.value;
        break;
      case 'status':
        this.immunization.status = event.target.value;
        break;
      case 'date':
        this.immunization.date = event.target.value;
        break;
      case 'site':
        this.immunization.site = event.target.value;
        break;
      case 'dose':
        this.immunization.dose = event.target.value;
        break;
      case 'note':
        this.immunization.note = event.target.value;
        break;
      case 'reason':
        this.immunization.reason = event.target.value;
        break;
      case 'disease':
        this.immunization.disease = event.target.value;
        break;
      case 'immun':
        this.immunization.immun = event.target.value;
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    let json = this.immunization.create();
    postImmunization(json);

    this.props.switchPopUp();
  }

  render() {
    return (
      <div className="popup">
        <div className='popup_button'>
          <button onClick={this.props.switchPopUp}>
            Abbrechen
          </button>
        </div>
        <div className='popup_form'>
          <form onSubmit={this.handleSubmit}>
            <select name='disease' defaultValue={"Erreger"} onChange={this.handleChange} required>
              <option value="Erreger" disabled hidden>Erreger</option>
              { this.immunization.diseaseData.map( (x, y) => <option key={y}>{x}</option>) }
            </select>
            <br/>
            <input type='text' placeholder='Impfstoff' name='vaccine' onChange={this.handleChange} required/>
            <br/>
            <select name='status' defaultValue={"Status"} onChange={this.handleChange} required>
              <option value="Status" disabled hidden>Status</option>
              <option value="completed">Abgeschlossen</option>
              <option value="uncompleted">Unvollendet</option>
            </select>
            <br/>
            <select name='immun' defaultValue={"Immunisierungsgrad"} onChange={this.handleChange} required>
              <option value="Immunisierungsgrad" disabled hidden>Immunisierungsgrad</option>
              <option value="G1">Grundimmunisierung 1</option>
              <option value="G2">Grundimmunisierung 2</option>
              <option value="G3">Grundimmunisierung 3</option>
              <option value="A1">Auffrischimpfung 1</option>
              <option value="A2">Auffrischimpfung 2</option>
              <option value="A3">Auffrischimpfung 3</option>
              <option value="S">Standardimpfung</option>
            </select>
            <br/>
            <input type='date' placeholder={new Date()} name='date' onChange={this.handleChange} required/>
            <br/>
            <input type='text' placeholder='Impfstelle' name='site' onChange={this.handleChange} required/>
            <br/>
            <input type='text' placeholder='Dosis in ml' pattern="[0-9]+((.|,)[0-9]+)?" name='dose'
                   onChange={this.handleChange} required/>
            <br/>
            <input type='text' placeholder='Impfgrund' name='reason' onChange={this.handleChange}/>
            <br/>
            <input type='text' placeholder='Bemerkung' name='note' onChange={this.handleChange}/>
            <br/>
            <input type='submit' className='submit_button' value='Speichern' />
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;