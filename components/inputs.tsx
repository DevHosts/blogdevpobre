import { useState } from "react";
import api from "../pages/service/api"
import styles from "../styles/input.module.css";

export default function Input() {
  const [campos, setCampos] = useState({
    email: "",
    name: "",
    description: "",
  });

  function handleInputChange(event) {
    if(event.target.name === "email"){
    console.log(event.target.email)
      setCampos( {...campos,email: event.target.value});
    }
    if(event.target.name === "name"){
      setCampos( {...campos, name: event.target.value});
    }

    if(event.target.name === "description"){
      setCampos( {...campos, description: event.target.value});
    }
  }

  const handleFormSubmit = event => {
    api.post('/data', {email: campos.email, name: campos.name, description: campos.description})
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })

      setCampos({email:"", name: "", description: ""})
  }


  return (
    <div className={styles.inputDiv}>
      <h1>Entre com as informacoes do feed</h1>
      <div className={styles.form}>
        <form
          className="shadow p-3 mb-5 bg-white rounded"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group pb-3 pt-3">
            <label htmlFor="email">Digite o seu email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="Name">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Nome"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Descreva a sua imagem
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
