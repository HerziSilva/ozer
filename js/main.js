
      // Variáveis para o captcha
      let captchaValue;
      let captchaModal = new bootstrap.Modal(document.getElementById('captchaModal'));
      let currentTriggerBtnId;

      // Função para gerar uma nova equação de captcha
      function generateCaptcha() {
        // Gera dois números aleatórios entre 1 e 10
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        captchaValue = num1 + num2;
        document.getElementById('captchaQuestion').innerText = `${num1} + ${num2} =`;
        document.getElementById('captchaAnswer').value = '';
        document.getElementById('captchaFeedback').innerText = '';
      }

      // Adiciona um listener para quando o modal do captcha for exibido
      document.getElementById('captchaModal').addEventListener('show.bs.modal', function (event) {
        // Pega o ID do botão que disparou o modal
        currentTriggerBtnId = event.relatedTarget.id;
        generateCaptcha();
      });

      // Adiciona um listener para o clique no botão de verificar
      document.getElementById('verifyCaptchaBtn').addEventListener('click', function() {
        let userAnswer = parseInt(document.getElementById('captchaAnswer').value, 10);
        
        if (userAnswer === captchaValue) {
          // Resposta correta: revela a informação de contato
          let triggerBtn = document.getElementById(currentTriggerBtnId);
          let targetSpanId = triggerBtn.getAttribute('data-target-id');
          
          document.getElementById(targetSpanId).style.display = 'inline';
          triggerBtn.style.display = 'none';
          
          captchaModal.hide(); // Fecha o modal
        } else {
          // Resposta incorreta: mostra uma mensagem de erro e gera um novo captcha
          document.getElementById('captchaFeedback').innerText = 'Resposta incorreta. Tente novamente.';
          generateCaptcha();
        }
      });
      
      // Script para mostrar/esconder o botão de rolagem para o topo
      const backToTopBtn = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        // Mostra o botão quando o usuário rolar 300px para baixo
        if (window.scrollY > 300) {
          backToTopBtn.style.display = 'flex';
        } else {
          backToTopBtn.style.display = 'none';
        }
      });

      // Rola a página para o topo com um efeito suave ao clicar
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
