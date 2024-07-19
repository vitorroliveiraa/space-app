const Imagem = (foto) => {
  return (
    <figure>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>Titulo</h3>
        <footer>
          <p>fonte</p>
          <button>Favorito</button>
          <button>Expandir</button>
        </footer>
      </figcaption>
    </figure>
  );
};

export default Imagem;
