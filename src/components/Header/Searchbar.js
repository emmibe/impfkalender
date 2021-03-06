import { InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react"
import { BsSearch } from 'react-icons/bs';
import './searchbar.css';
import { useEffect } from "react";
// import { Navigate } from "react-router-dom"


const Searchbar = (props) => {
    const [ value, setValue ] = useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let v = document.getElementsByName("search-field")[0].value;
        isNaN(v)
            ? setValue("name=" + v)
            : setValue("_id=" + v)
    });
    /*
    const handleKeyPress = (e) => {
        console.log("test");
        if(e.charCode==13){
            const { href } = window.location;
            console.log("test:" + "${href}/search:" + value);
            window.location.href = "${href}/search:" + value;
        }
    }
  onKeyPress={handleKeyPress}
  */


    return (
        <Form className="ms-2">
            <InputGroup size={props.inputSize}>
                <Button
                  variant={props.variantStyle}
                  id="patient_search_button"
                  type="button"
                  className={props.buttonStyleClass}
                  href={"/search:" + value}
                >
                  <BsSearch/>
                </Button>
                <Form.Control
                    placeholder="Name / ID des Patienten"
                    aria-label="Name / ID des Patienten"
                    aria-describedby="searchbar"
                    name="search-field"
                    type="input"
                    className={props.formStyleClass}
                    onChange={(e) => {
                        isNaN(e.target.value)
                        ? setValue("name=" + e.target.value)
                        : setValue("_id=" + e.target.value)
                    }}
                />
            </InputGroup>
        </Form>
    )
}

export default Searchbar