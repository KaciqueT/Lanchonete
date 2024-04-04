function validaForm(event, target) {
  let nome = target.nome.value;
  let cel = target.celular.value;
  let endereco = target.endereco.value;
  let pedido = target.pedido.value;

  let ehValido =
    nome.length > 0 &&
    cel.length >= 8 &&
    cel.length <= 9 &&
    endereco > 0 &&
    pedido > 0;

  console.log(ehValido);
  return ehValido;
}
