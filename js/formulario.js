
      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega o modal de sucesso
        let successModal = new bootstrap.Modal(document.getElementById('submissionSuccessModal'));

        // Simula um envio bem-sucedido
        setTimeout(() => {
          successModal.show();
          document.getElementById('contactForm').reset(); // Limpa o formulário
        }, 500); // 500ms de atraso para simular o envio
      });
