import styled from "styled-components";

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;

  input[type="checkbox"] {
    display: none;
  }

  span {
    position: absolute;
    cursor: pointer;
    background-color: #efefef;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    /* svg {
      position: absolute;
      top: 3px;
      left: 4px;
      transition: transform 0.3s ease;
      color: red;
    } */

    &::before {
      position: absolute;
      content: "";
      left: 3px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #d9d9d9;
      border-radius: 50%;
      transition: transform 0.3s ease, background-color 0.2s ease;
      box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.4);
    }
  }

  input[type="checkbox"]:checked + span {
    background-color: #46a0d820;

    &::before {
      content: "";
      transform: translateX(25px);
      background-color: #1a1e23;
      left: 0;
    }

    /* svg {
      position: absolute;
      color: blue;
      top: 3px;
      left: 4px;
      transform: translateX(25px);
    } */
  }
`;
