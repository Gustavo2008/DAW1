function validacao() {
  if (document.dados.nome.value=="") {
    alert("PREENCHA SEU NOME ");
    document.dados.nome.focus();
    return false;
 }
 else if (document.dados.endereco.value=="") {
    alert("PREENCHA SEU ENDEREÇO ");
    document.dados.endereco.focus();
    return false;
}
if (document.dados.cidade.value=="") {
    alert("PREENCHA SUA CIDADE");
    document.dados.cidade.focus();
    return false;
}
if (document.dados.cep.value=="") {
    alert("PREENCHA SEU CEP ");
    document.dados.cep.focus();
    return false;
}
if (document.dados.uf.value=="") {
    alert("PREENCHA SUA UNIDADE FEDERACIONAL");
    document.dados.uf.focus();
    return false;
  }

  if (document.dados.data.value=="") {
    alert("PREENCHA SUA DATA DE NASCIMENTO ");
    document.dados.data.focus();
    return false;
}
}