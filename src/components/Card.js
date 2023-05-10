import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useStateRef } from '../hooks';

function Card(props) {
  const { name } = props;
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [textBoxOpen, setTextBoxOpen, ref] = useStateRef(false);

  const menuRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('click', (event) => {
  //     console.log(ref.current);
  //     if (!menuRef.current?.contains(event.target) && ref.current) {
  //       setTextBoxOpen(false);
  //     }
  //   });
  // }, []);

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    setTodos([...todos, newTodo]);
    setNewTodo('');
    setTextBoxOpen(false);
  };

  const removeTodo = (todoClicked) => {
    const newTodos = todos.filter((todo) => {
      return todo !== todoClicked;
    });
    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      <h1>{name}</h1>
      {todos.map((todo, i) => {
        return (
          <div key={`${todo}-${i}`}>
            {todo}
            <button onClick={() => removeTodo(todo)}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        );
      })}
      {textBoxOpen && (
        <form onSubmit={addNewTodo} ref={menuRef}>
          <textarea
            id='cardInput'
            name='cardInput'
            placeholder='Add new todo item:'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type='button'
            onClick={() => {
              setTextBoxOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <button className={styles.addTodoButton}>Add new todo item</button>
        </form>
      )}
      {!textBoxOpen && (
        <button onClick={() => setTextBoxOpen(true)}>Add new todo</button>
      )}
    </div>
  );
}

export default Card;
