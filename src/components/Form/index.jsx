import React, { useState } from "react";
import Grid from "../Grid";
import * as c from "./styles";

// import { Container } from './styles';

function Form({ handleAdd, transactionList, setTransactionList }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  function generateID() {
    Math.round(Math.random() * 1000);
  }

  function handleSave() {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem de ser positivo");
      return;
    }
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };
    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  return (
    <>
      <c.Container>
        <c.InputContent>
          <c.Label>Descrição</c.Label>
          <c.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </c.InputContent>

        <c.InputContent>
          <c.Label>Valor</c.Label>
          <c.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </c.InputContent>

        <c.RadioGroup>
          <c.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <c.Label htmlFor="rIncome">Entrada</c.Label>

          <c.Input
            type="radio"
            id="rExpenses"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <c.Label htmlFor="rExpenses">Saída</c.Label>
        </c.RadioGroup>
        <c.Button onClick={handleSave}>Adicionar</c.Button>
      </c.Container>
      <Grid itens={transactionList} setItens={setTransactionList}/>
    </>
  );
}

export default Form;
