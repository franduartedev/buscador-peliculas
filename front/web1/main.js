const btn = document.getElementById("btn"); 
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");
//llama a los elementos del html
btn.addEventListener("click", async () => { //ccrea la funcion que  se activa con el escuchador del click
    const pelicula = input.value; //lee el input
    const respuesta = await fetch(`https://www.omdbapi.com/?t=${pelicula}&apikey=trilogy`);//llama a la api dandole el texto que esta en el input
    const datos = await respuesta.json(); //convierte la respueta a json
    if (datos.Response === "True"){ 
      resultado.innerHTML = `
    <div class="card">
        <img src="${datos.Poster}" alt="${datos.Title}">
        <div class="info">
            <h2>${datos.Title}</h2>
            <p>${datos.Year}</p>
            <p>⭐ ${datos.imdbRating}</p>
            <p>${datos.Plot}</p>
        </div>
    </div>
`;
    }
    else{
      resultado.innerHTML = `
    <div class="card">
         <div class="info">
             <h2>ingrese un nombre de pelicula valido</h2>
            
        </div>
           
    </div>
`;
    }
    
}); // con inner inyecta codigo html desde js, llamando a cada tipo de dato que nos proporciona la api llamandola con el . y lo que necesitamos mostrar