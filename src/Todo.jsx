import './App.css';
import { useState } from 'react';
import { InputTodos } from './components/InputTodos';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const [todoText, setTodoText] = useState('');

  const changeInputText = (event) => {
    setTodoText(event.target.value);
  }

  const clickAddButton = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }
  
  const clickDeleteButton = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos); 
  }
  
  const clickCompleteButton = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const clickBackButton = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newTodos);
  }
  return (
  <>
    <InputTodos todoText={todoText} changeInputText={changeInputText} clickAddButton={clickAddButton} />

    <IncompleteTodos incompleteTodos={incompleteTodos} clickCompleteButton={clickCompleteButton} clickDeleteButton={clickDeleteButton} />
    
    <CompleteTodos completeTodos={completeTodos} clickBackButton={clickBackButton} />
  </>
  );
}
