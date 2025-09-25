async function buscarPersonagemPorID() {
    let idPersonagem = document.getElementById('id-personagem').value;

    const personagem = await fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`);
    const personagemJSON = await personagem.json();

    document.getElementById('foto-personagem').src = personagemJSON.image;
    document.getElementById('origem-personagem').value = personagemJSON.origin.name;
    document.getElementById('especie-personagem').value = personagemJSON.species;
    document.getElementById('genero-personagem').value = personagemJSON.gender;
    document.getElementById('status-personagem').value = personagemJSON.status;
    document.getElementById('nome-personagem').value = personagemJSON.name;
}