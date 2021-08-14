function adicionaLinha(linha) {
  let table = document.getElementById("myTableBody");
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = `<p>${linha.codigo}</p>`
  cell2.innerHTML = `<p>${linha.descricao}</p>`
  cell3.innerHTML = `<p>${linha.valor}</p>`
  cell4.innerHTML = `<p>${linha.data}</p>`
}

let jsonLinha1 = {
  codigo: "PED00167",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  valor: "R$ 200,00",
  data: "20/07/2021"
}


let jsonLinha2 = {
  codigo: "PED00168",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  valor: "R$ 200,00",
  data: "20/07/2021"
}

let jsonLinha3 = {

}

adicionaLinha(jsonLinha1);
adicionaLinha(jsonLinha2);
adicionaLinha(jsonLinha2);
adicionaLinha(jsonLinha2);
adicionaLinha(jsonLinha2);
adicionaLinha(jsonLinha2);
adicionaLinha(jsonLinha2);
