import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBTextArea, MDBSelect } from "mdb-react-ui-kit";
// import {  } from 'mdb-react-ui-kit';

import "./common.scss";
export const CUButton = styled(Button)`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  background-color: transparent;
  border: 1px solid rgba(140, 144, 183, 0.2);
  border-radius: 5px;
  box-shadow: none;
  :hover {
    background-color: #f16922;
    border-color: #f16922;
    border-radius: 5px;
  }
`;

export const CUSelect = styled(Form.Select)`
  font-size: 17px;
  line-height: 17px;
  font-weight: 500;
  width: 150px;
  height: 100%;
  background: rgba(17, 18, 32, 0.1294117647);
  border-radius: 6px;
  padding-left: 10px;
  border: 1px solid transparent;
  color: #8c90b7;

  :focus {
    border: 1px solid #444972 !important;
    box-shadow: unset !important;
  }
  option {
    background: #2d3161 !important;
    color: #8c90b7;
  }
`;
export const CUInput = styled(MDBInput)`
  background: #2d3161 !important;
`;
export const CUTextArea = styled(MDBTextArea)``;

export const CUSelect2 = ({ options, heading, value, onChange }) => {
  const [option, setOption] = useState(false);
  // const [name, setName] = useState("Published");
  const [name, setName] = useState(value || options[0]);

  const handleOptionClick = (option) => {
    console.log(option);
    setName(option);
    setOption(false);
    onChange(option);
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const optionsControl = options.map((text, idx) => (
    <input
      key={idx}
      className="option-input option-select"
      type="text"
      defaultValue={text}
      onFocus={(e) => {
        setName(e.target.value);
        setOption(false);
      }}
      onClick={() => console.log("dfwefwefwefew")}
    />
  ));

  return (
    <>
      <CUSelect
        label={heading}
        id="id_drawdate"
        type="text"
        onClick={() => setOption(!option)}
        onBlur={(e) => {
          if (!e.relatedTarget) setOption(false);
          else if (e.relatedTarget.className != "option-input option-select")
            setOption(false);
        }}
        className="cuiinput"
        value={name}
        readOnly={true}
        onChange={handleInputChange}
      >
        {options &&
          options.map((el, idx) => (
            <option key={idx} value={idx}>
              {el}
            </option>
          ))}
      </CUSelect>
    </>
  );
};

export const SocialButton = ({ src, url }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate back to the previous page
    navigate("/prizepools");
  };
  return (
    <>
      <button className="social-btn" onClick={handleButtonClick}>
        <Image id="icon" src={src} />
      </button>
    </>
  );
};
