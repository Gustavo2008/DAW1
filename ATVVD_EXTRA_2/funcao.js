function validacao1() {
  if (document.dados1.email.value=="") {
    alert("PREENCHA SEU EMAIL ");
    document.dados1.email.focus();
    return false;
 }
 else if (document.dados1.sexo.value=="") {
    alert("PREENCHA SEU SEXO ");
    document.dados1.sexo.focus();
    return false;
}}

function validacao2(){
if (document.dados2.nome.value=="") {
    alert("PREENCHA SEU NOME");
    document.dados2.nome.focus();
    return false;
}
if (document.dados2.telefone.value=="") {
    alert("PREENCHA TELEFONE ");
    document.dados2.telefone.focus();
    return false;
}
}