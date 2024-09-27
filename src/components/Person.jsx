import style from "./Person.module.css";

function Person({ name, idade, profissao }) {
  return (
    <>
      <section id={style.info}>
          <h1>Olá, {name}!</h1>
          <p>Idade: {idade}</p>
          <p>Profissão: {profissao}</p>
      </section>
    </>
  );
}

export default Person;
