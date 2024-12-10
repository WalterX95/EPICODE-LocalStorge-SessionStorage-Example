class saluto {
      constructor(_nome) {
        this.nome = _nome;
      }
      registra() {
        localStorage.setItem("nome",this.nome);
      }
      elimina() {
        localStorage.removeItem("nome",this.nome);
      }
      saluta() {
        return `Ciao carissimo ${this.nome}`;
      }
}

document.getElementById("saluta").addEventListener("click",(e) => {
    e.preventDefault();
    const nome = new saluto(document.getElementById("personName").value);
    document.getElementById("salutoPersona").innerText = nome.saluta();
    nome.registra();
});

document.getElementById("cancella").addEventListener("click",(e) => {
    e.preventDefault();
    const nome = new saluto(document.getElementById("personName").value);
    document.getElementById("salutoPersona").innerText = '';
    nome.elimina();
});