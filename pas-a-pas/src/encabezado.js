export default function Encabezado() {
  const subStyle = { fontSize: 14 };

  return (
    <div className="encabezadoArriba">
      <h3>
        <a href="index.html">Home</a>
      </h3>
      <h3>
        <a href="AboutMe.html">About</a>
      </h3>
      <h3>
        <a href="Contacto.html">Contact</a>
      </h3>

      <h1 id="titulo" title="Sergi Pruna Junior Developer">
        <b>
          SERGI PRUNA <br />
          <span style={subStyle}>Junior Developer</span>
        </b>
      </h1>
    </div>
  );
}
