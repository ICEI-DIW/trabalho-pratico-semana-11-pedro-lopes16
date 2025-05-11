const receitas = [
    {
      id: 1,
      titulo: "Bolo de cenoura",
      imagem: "cenoura.jpg",
      categoria: "Bolos fáceis",
      descricao: "O bolo de cenoura com cobertura de brigadeiro, um clássico brasileiro, tem uma massa fofinha e levemente adocicada por causa da cenoura e coberto por uma camada cremosa e chocolatuda de brigadeiro. A combinação do sabor suave do bolo com o chocolate intenso da cobertura torna essa sobremesa irresistível.",
      ingredientes: `
        <ul>
          <li>270g de CENOURAS</li>
          <li>200ml de ÓLEO DE GIRASSOL</li>
          <li>3 OVOS</li>
          <li>360g de AÇÚCAR</li>
          <li>240g de FARINHA DE TRIGO</li>
          <li>8g de FERMENTO EM PÓ</li>
          <li>1 caixa LEITE CONDENSADO</li>
          <li>1 caixa CREME DE LEITE</li>
          <li>30g CACAU EM PÓ</li>
        </ul>
      `,
      modoPreparo: `
        <h3>Massa</h3>
        <p>1- Unte e enfarinhe uma forma de bolo.</p>
        <p>2- Bata as cenouras, o óleo, os ovos e o açúcar no liquidificador até ficar homogêneo.</p>
        <p>3- Coloque em uma tigela e acrescente a farinha e o fermento peneirados. Misture.</p>
        <p>4- Leve para assar a 180˚C por aproximadamente 50 minutos.</p>
        
        <h3>Cobertura</h3>
        <p>1- Misture leite condensado, creme de leite e cacau em pó em uma panela.</p>
        <p>2- Leve ao fogo médio até ferver.</p>
        <p>3- Deixe esfriar e reserve.</p>
      `
    },
    {
      id: 2,
      titulo: "Banana Bread",
      imagem: "banana.jpg",
      categoria: "Bolos de frutas",
      descricao: "O banana bread é um bolo macio e úmido feito com bananas beeem maduras, ideal para aproveitar frutas que passaram do ponto. Tem sabor adocicado na medida certa, textura densa e amanteigada e é perfeito para o lanche da tarde. Canela é opcional, mas dá um toque especial.",
      ingredientes: `
        <ul>
          <li>100g de MANTEIGA</li>
          <li>200g de AÇÚCAR CRISTAL</li>
          <li>2 OVOS</li>
          <li>15ml de EXTRATO DE BAUNILHA</li>
          <li>3 BANANAS médias</li>
          <li>170g de IOGURTE NATURAL</li>
          <li>300g de FARINHA DE TRIGO</li>
          <li>8g de BICARBONATO DE SÓDIO</li>
          <li>8g de FERMENTO QUÍMICO</li>
          <li>10g de CHOCOLATE EM PÓ</li>
          <li>3g de SAL</li>
          <li>CANELA EM PÓ a gosto</li>
          <li>200g de CHOCOLATE MEIO AMARGO picado</li>
        </ul>
      `,
      modoPreparo: `
        <h3>Massa</h3>
        <p>1- Bata manteiga e açúcar até formar um creme fofo. Adicione os ovos um a um.</p>
        <p>2- Amasse as bananas e misture no creme.</p>
        <p>3- Acrescente iogurte e baunilha.</p>
        <p>4- Misture os secos (farinha, fermento, bicarbonato, chocolate em pó, sal e canela) e incorpore ao creme.</p>
        <p>5- Misture o chocolate picado e asse a 180°C por 50 minutos.</p>
      `
    },
    {
      id: 3,
      titulo: "Brownie",
      imagem: "brownie.jpg",
      categoria: "Sobremesas",
      descricao: "O brownie, doce de origem americana com textura densa e úmida, combina o sabor intenso do chocolate com uma casquinha crocante por cima. Pode incluir pedaços de nozes e é perfeito servido quentinho com uma bola de sorvete ou recheado.",
      ingredientes: `
        <ul>
          <li>180g de CHOCOLATE AO LEITE derretido</li>
          <li>150g de MANTEIGA</li>
          <li>3 OVOS</li>
          <li>300g de AÇÚCAR</li>
          <li>150g de FARINHA DE TRIGO</li>
          <li>15g de CACAU EM PÓ</li>
          <li>4g de FERMENTO QUÍMICO</li>
          <li>2g de SAL</li>
          <li>100g de NOZES picadas</li>
        </ul>
      `,
      modoPreparo: `
        <h3>Massa</h3>
        <p>1- Bata ovos e açúcar até espumar.</p>
        <p>2- Adicione farinha e cacau em pó.</p>
        <p>3- Derreta chocolate e manteiga, misture ao creme.</p>
        <p>4- Acrescente sal, fermento e nozes.</p>
        <p>5- Leve para assar a 180°C por 30 a 35 minutos.</p>
      `
    }
  ];
  function montarCards() {
    const container = document.getElementById("cardContainer");
  
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
  }
  
    document.addEventListener("DOMContentLoaded", montarCards);
  
    function carregarDetalhes() {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get("id"));
    
      const receita = receitas.find(r => r.id === id);
    
      if (receita) {
        const container = document.body;
    
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
              ${receita.ingredientes}
            </section>
    
            <section class="mt-4">
              <h2>Modo de preparo</h2>
              ${receita.modoPreparo}
            </section>
    
            <div class="mt-4">
              <a href="index.html" class="btn btn-secondary">Voltar para página inicial</a>
            </div>
          </main>
        `;
      } else {
        document.body.innerHTML = "<p>Receita não encontrada.</p>";
      }
    }
    