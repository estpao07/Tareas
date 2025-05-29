function recomendarPelicula(genero) {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("recomendacion");

  if (isNaN(edad) || edad <= 0) {
    resultado.textContent = "Por favor ingresa una edad válida.";
    return;
  }

  let pelicula = "";

  switch (genero) {
    case "Drama":
      pelicula = edad < 13 ? "Casablanca" : edad <= 15 ? "The Shawshank Redemption" : "Taxi Driver";
      break;
    case "Comedia":
      pelicula = edad < 13 ? "Back to the Future" : edad <= 15 ? "The Truman Show" : "The Wolf of Wall Street";
      break;
    case "Musical":
      pelicula = edad < 13 ? "La La Land" : edad <= 15 ? "Les Misérables" : "The Rocky Horror Picture Show";
      break;
    case "Crimen":
      pelicula = edad < 13 ? "No hay opciones para esta edad" : edad <= 15 ? "El Secreto de sus Ojos" : "The Godfather";
      break;
    default:
      pelicula = "Selecciona un género válido.";
  }

  resultado.textContent = `Película recomendada: ${pelicula}`;
}