import React from 'react';
import './Form.css';

function Form() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event.target);
  };

  return (
    <div className="form-data">
      <form
        onSubmit={ handleSubmit }
      >
        <label htmlFor="name">
          Música:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={ handleChange }
        />

        <label htmlFor="duration">
          Duração:
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          onChange={ handleChange }
        />

        <button
          disabled
        >
          Adicionar
        </button>

        <button
          type="button"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Form;
