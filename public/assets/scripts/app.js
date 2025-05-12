function montarCards() {
    const container = document.getElementById("cardContainer");

    fetch("http://localhost:3000/receitas").then(response => {
        if (!response.ok)
            throw new Error("Erro ao consumir dados.")
        return response.json()
    }).then(receitas => {
        receitas.forEach((item) => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

            col.innerHTML = `
        <a href="detalhes.html?id=${item.id}" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" />
            <div class="card-body">
              <p class="card-text fw-bold">${item.titulo}</p>
              <p class="card-text text-muted small">${item.descricao}</p> <!-- descrição adicionada aqui -->
            </div>
          </div>
        </a>
      `;
            container.appendChild(col);
        });
    }).catch(error => alert(error.message))


}

function carregarDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    fetch(`http://localhost:3000/receitas/${id}`).then(response => {
        if (!response.ok)
            throw new Error("Erro ao consumir dados.")
        return response.json()
    }).then(receita => {
        if (receita) {
        const container = document.body;
        const modoPreparo = receita.modoPreparo.replaceAll("#","<br>")
        const ingredientes = receita.ingredientes.replaceAll(`#`,"<br>")
        container.innerHTML = `
          <header class="bg-dark text-white text-center py-4">
            <h1>${receita.titulo}</h1>
          </header>
    
          <main class="container my-5">
            <img src="${receita.imagem}" alt="${receita.titulo}" class="img-detalhes mb-4" />
            <p><strong>Categoria:</strong> ${receita.categoria}</p>
            <p>${receita.descricao}</p>
    
            <section>
              <h2>Ingredientes</h2>
              ${ingredientes}
            </section>
    
            <section class="mt-4">
              <h2>Modo de preparo</h2>
              ${modoPreparo}
            </section>
    
            <div class="mt-4">
              <a href="index.html" class="btn btn-secondary">Voltar para página inicial</a>
            </div>
          </main>
        `;
    } else {
        document.body.innerHTML = "<p>Receita não encontrada.</p>";
    }
    }).catch(error => alert(error.message))

}
