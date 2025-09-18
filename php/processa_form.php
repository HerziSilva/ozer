<?php

// Verifica se a requisição é do tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Define a função para sanitizar os dados de entrada
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Sanitiza e valida os dados do formulário
    $nome = sanitize_input($_POST['nome']);
    $email = sanitize_input($_POST['email']);
    $mensagem = sanitize_input($_POST['mensagem']);

    // Verifica se os campos obrigatórios estão preenchidos
    if (empty($nome) || empty($email) || empty($mensagem)) {
        die("Erro: Por favor, preencha todos os campos obrigatórios.");
    }

    // Valida o e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Erro: O endereço de e-mail fornecido não é válido.");
    }

    // Ações de processamento do formulário
    // Exemplo: envio de e-mail
    $para = "herzi.silva@outlook.com"; // Substitua pelo seu endereço de e-mail
    $assunto = "Nova mensagem de contato de " . $nome;
    $headers = "De: " . $email . "\r\n" .
               "Responder para: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $mensagem, $headers)) {
        echo "Mensagem enviada com sucesso! Obrigado por nos contatar.";
    } else {
        echo "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
    }

} else {
    // Redireciona se o acesso não for via POST
    header("Location: /");
    exit();
}

?>