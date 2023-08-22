import { useState } from 'react';
import { MusicType } from '../data/data';
import './Form.css';

// criando um type para o props
type FormProps = {
  setShowForm: (show: boolean) => void;
  handleAddMusic: (music: MusicType) => void;
};

function Form({ setShowForm, handleAddMusic }: FormProps) {
  const [formData, setFormData] = useState<MusicType>({
    name: '',
    duration: '',
  });
  // descontruindo o state para usar de forma mais simples
  const { name, duration } = formData;

  // validações
  const nameOk = name.length < 2;
  const durationOk = (/^[0-9]{2}:[0-9]{2}$/).test(duration);

  // desabilitando o botão de adicionar
  const disabled = nameOk || !durationOk;

  // função para mudar o state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // descontruindo o event para usar de forma mais simples
    // nameInput é o name do input, mudei o nome para não confundir com o name do state
    const { name: nameInput, value } = e.target;
    setFormData({
      ...formData,
      [nameInput]: value,
    });
  };

  // função para adicionar a música e limpar o form
  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    // previnindo o comportamento padrão do form
    e.preventDefault();
    // chamando a função que adiciona a música
    handleAddMusic(formData);
    // limpando o form
    setFormData({
      name: '',
      duration: '',
    });
  };

  return (
    <div className="form-data">
      <form
        onSubmit={ handleClick }
      >
        <label htmlFor="name">
          Música:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
        { nameOk && <span>No mínimo 2 caractéres</span>}

        <label htmlFor="duration">
          Duração:
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={ duration }
          onChange={ handleChange }
        />
        <span>{ !durationOk ? ('Formato válido MM:SS') : 'Nice!' }</span>

        <button
          disabled={ disabled }
        >
          Adicionar
        </button>

        <button
          type="button"
          onClick={ () => setShowForm(false) }
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Form;
