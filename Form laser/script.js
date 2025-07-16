const form = document.getElementById('avaliacaoForm');
const mensagem = document.getElementById('mensagemObrigada');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Verifica se uma nota foi selecionada
  const notaSelecionada = form.querySelector('input[name="nota"]:checked');
  if (!notaSelecionada) {
    alert('Por favor, selecione uma nota geral.');
    return; // interrompe o envio
  }

  // Se quiser, coloque outras validações aqui...

  // Mostrar mensagem de agradecimento (se existir)
  if (mensagem) {
    mensagem.style.display = 'block';
  }

  // Limpar formulário
  form.reset();

  // Redirecionar para página de obrigado após 1,5 segundos
  setTimeout(() => {
    window.location.href = 'obrigada.html';
  }, 1500);
});
