import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  background: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin:20px auto;
  padding: 16px;

  @media (max-width: 750px){
    display: grid;
  }
`;
export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 4px 16px;
    font-size: 1rem;
    border:1px solid #ccc;
`
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    input {
        margin-left: 1.5rem;
        accent-color: black;
        margin-top: 0;
    }

`
export const Button = styled.button `
    text-transform: uppercase;
    padding: 4px 16px;
    border-radius: 5px;
    border: none;
    background: teal;
    color: #FFF;
    cursor: pointer;
    transition: all .3s;

    :hover{
        filter: brightness(.9);
        transform: scale(1.05);
    }
`