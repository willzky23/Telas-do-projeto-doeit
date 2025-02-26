document.addEventListener("DOMContentLoaded", function () {
    // --- Código do carrossel ---
    const frases = [
        "Use uma senha forte: Combine letras <br> maiúsculas, minúsculas, números e <br> caracteres especiais.",
        "Fortaleça sua senha: utilize uma <br> combinação de letras, números <br> e caracteres especiais.",
        "Crie senhas robustas: misture letras <br> maiúsculas, minúsculas, números e símbolos especiais.",
    ];

    let index = 0;
    const elemento = document.getElementById("carousel-text");
    const indicadoresContainer = document.querySelector(".carousel-indicators");

    // Cria os indicadores (bolinhas)
    frases.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active"); // A primeira já fica ativa
        dot.addEventListener("click", () => mudarFrase(i)); // Clica e troca a frase
        indicadoresContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function mudarFrase(novoIndex) {
        index = novoIndex;
        elemento.innerHTML = `“${frases[index]}”`;

        // Atualiza os indicadores
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function autoTroca() {
        index = (index + 1) % frases.length;
        mudarFrase(index);
    }

    setInterval(autoTroca, 4000);

    // --- Código para mostrar/ocultar senha ---
    function toggleVisibility(input, icon) {
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }

    // Adiciona o comportamento de alternância para os campos de senha
    const passwordInputs = document.querySelectorAll(".password-container input");
    
    passwordInputs.forEach(input => {
        const eyeIcon = input.nextElementSibling.querySelector("img");
        if (eyeIcon) {
            eyeIcon.addEventListener("click", function () {
                toggleVisibility(input, eyeIcon);
            });
        }
    });
});
