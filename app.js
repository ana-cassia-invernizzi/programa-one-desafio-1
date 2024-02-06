function criptografarTexto(texto) {
  let textoCriptografado = texto.replace(/e/g, 'enter');
  textoCriptografado = textoCriptografado.replace(/i/g, 'imes');
  textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
  textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
  textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');
  return textoCriptografado;
}

function descriptografarTexto(texto) {
  let textoDescriptografado = texto.replace(/enter/g, 'e');
  textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
  textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
  textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
  textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');
  return textoDescriptografado;
}

function botaoCriptografia() {
  const textoOriginal = document.getElementById('texto_inserido').value;
  const resultado = criptografarTexto(textoOriginal);
  exibirResultado(resultado);
}

function botaoDescriptografia() {
  const textoCriptografado = document.getElementById('texto_inserido').value;
  const resultado = descriptografarTexto(textoCriptografado);
  exibirResultado(resultado);
}

function exibirResultado(resultado) {
  const resultadoFinal = document.getElementById('resultado_final');
  const resultadoEscondido = document.getElementById('resultado_padrao');
  const textoEscondido = document.getElementById('texto_escondido');
  const botaoCopiar = document.querySelector('.botao_copiar');

  if (resultado) {
    resultadoFinal.style.display = 'block';
    resultadoEscondido.style.display = 'none';
    textoEscondido.textContent = resultado;
    botaoCopiar.style.display = 'block';
  } else {
    resultadoFinal.style.display = 'none';
    resultadoEscondido.style.display = 'block';
    botaoCopiar.style.display = 'none';
  }
}

function botaoCopiar() {
  const textoCopiado = document.getElementById('texto_escondido').textContent;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    alert('Texto copiado para a área de transferência!');
  }).catch(err => {
    console.error('Erro ao copiar texto: ', err);
  });
}

