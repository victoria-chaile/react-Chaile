function Input({ placeholder, saludo }) {
  return (
    <>
      <input placeholder={placeholder} />
      <button onClick={saludo}>Buscar</button>
    </>
  );
}

export default Input;
