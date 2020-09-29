import styled from "styled-components";
export const ContactHeader = styled.h1`
  font-size: 2em;
`

export const ContactContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`
export const FormInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 30px auto;
  justify-content: center;
`
export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
`
export const TextAreaComponent = styled.textarea`
  width: 50%;
  height: 50px;
  resize: none;
  font-family: 'Open Sans Condensed',sans-serif;
`