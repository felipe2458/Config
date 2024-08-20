var abriConfig = document.querySelector('#abriConfig');
var config = document.querySelector('#config');
var conteudo = document.querySelector('#conteudo');

document.addEventListener('keydown',(event)=>{
    if(event.key === "Escape"){
        if(config.style.width == "0px" && conteudo.style.width == "100%"){
            config.style.width = "20%";
            conteudo.style.width = "80%";
        }else{
            config.style.width = "0px";
            conteudo.style.width = "100%";
        }
    }
});// ABRINDO CONFIGURAÇÕES COM O ESC

abriConfig.addEventListener('click',()=>{
    {// INICIO DA ABERTURA DAS CONFIGURAÇÕES 
        if(config.style.width == "0px" && conteudo.style.width == "100%"){
            config.style.width = "20%";
            conteudo.style.width = "80%";
        }else{
            config.style.width = "0px";
            conteudo.style.width = "100%";
        }
    }// FIM DA ABERTURA DAS CONFIGURAÇÕES
});

var button = document.querySelector('#button');

button.addEventListener('click',()=>{
    {// INICIO DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON E DO CIRCLE E TROCA DE ESCURO POR CLARO
        let circle = document.querySelector('#circle');
        let darkMode = document.querySelector('#button > h5');

        if(circle.style.marginLeft == "0px" && darkMode.innerHTML == `Escuro` && button.style.backgroundColor == "rgb(58, 53, 53)" && darkMode.style.color == "whitesmoke" && circle.style.backgroundColor == "wheat"){
            darkMode.innerHTML = `Claro`;
            darkMode.style.color = "black";
            button.style.backgroundColor = "rgb(200, 201, 201)";
            circle.style.marginLeft = "70px";
            circle.style.backgroundColor = "rgba(10, 200, 255, 0.5)";
        }else{
            darkMode.innerHTML = `Escuro`;
            darkMode.style.color = "whitesmoke";
            button.style.backgroundColor = "rgb(58, 53, 53)";
            circle.style.marginLeft = "0px";
            circle.style.backgroundColor = "wheat";
        }
    }// FIM DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON E DO CIRCLE E TROCA DE ESCURO POR CLARO

    {// INICIO DA TROCA DE COR DAS CONFIGURAÇÕES, DO CONTEUDO, TROCA DE COR DO TEXTO E TROCA DE COR DO TITULO DAS CONFIGURAÇÕES
        let tituloConfig = document.querySelectorAll('#config > .tituloConfig');
        let texto = document.querySelectorAll('#container-texto > .texto');

        if(conteudo.style.backgroundColor == "rgb(39, 37, 37)" && config.style.backgroundColor == "darkred"){
            conteudo.style.backgroundColor = "rgb(199, 189, 189)";
            config.style.backgroundColor = "darkblue";
            tituloConfig.forEach(element =>{
                element.style.color = "whitesmoke"
                element.style.transition = "1s";
            });
            texto.forEach(element =>{
                element.style.color = "black";
            });
        }else{
            conteudo.style.backgroundColor = "rgb(39, 37, 37)";
            config.style.backgroundColor = "darkred";
            tituloConfig.forEach(element =>{
                element.style.color = "black";
                element.style.transition = "1s";
            });
            texto.forEach(element =>{
                element.style.color = "whitesmoke";
            });
        }
    }// FIM DA TROCA DE COR DAS CONFIGURAÇÕES, DO CONTEUDO, TROCA DE COR DO TEXTO E TROCA DE COR DO TITULO DAS CONFIGURAÇÕES
});

var button1 = document.querySelector('#button1');

button1.addEventListener('click',()=>{
    {// INICIO DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON1 E DO CIRCLE1 E TROCA DE LOREM POR CHAT 
        let circle = document.querySelector('#circle1');
        let altTexto = document.querySelector('#button1 > h5');

        if(circle.style.marginLeft == "0px" && altTexto.innerHTML == `Lorem` && button1.style.backgroundColor == "rgb(58, 53, 53)" && altTexto.style.color == "whitesmoke" && circle.style.backgroundColor == "wheat"){
            altTexto.innerHTML = `Chat`;
            altTexto.style.color = "black";
            button1.style.backgroundColor = "rgb(200, 201, 201)";
            circle.style.marginLeft = "70px";
            circle.style.backgroundColor = "rgba(10, 200, 255, 0.5)";
        }else{
            altTexto.innerHTML = `Lorem`;
            altTexto.style.color = "whitesmoke";
            button1.style.backgroundColor = "rgb(58, 53, 53)";
            circle.style.marginLeft = "0px";
            circle.style.backgroundColor = "wheat";
        }
    }// FIM DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON1 E DO CIRCLE1 E TROCA DE LOREM POR CHAT

    {// INICIO DA TROCA DE TEXTO DO LOREM PELO TEXTO DO CHATGPT
        let titulo = document.querySelector('#container-texto > h1');
        let texto = document.querySelector('#container-texto > p');
        let circle = document.querySelector('#circle2');

        if(circle.style.marginLeft == "70px"){
            titulo.innerHTML = ``;
            texto.innerHTML = ``;
        }else if(titulo.innerHTML == `Lorem`){
            titulo.innerHTML = `Chat`;
            texto.innerHTML = `No coração de uma floresta densa, onde os raios do sol mal penetravam a copa das árvores, havia um pequeno vilarejo esquecido pelo tempo. Os habitantes viviam em harmonia com a natureza, colhendo apenas o necessário para sua sobrevivência e respeitando os ciclos naturais das estações.Certa manhã, uma criança do vilarejo encontrou uma pedra brilhante na beira do rio. Era diferente de tudo que já haviam visto: cintilava com uma luz interna que mudava de cor conforme era girada. Curiosa, a criança levou a pedra ao ancião do vilarejo, um homem sábio que conhecia muitas histórias antigas.O ancião examinou a pedra com atenção e seus olhos brilharam com reconhecimento. "Esta," disse ele com voz grave, "é a Pedra dos Sonhos. Dizem as lendas que ela tem o poder de realizar os desejos mais profundos de quem a possui, mas é preciso ter cuidado. A pedra é caprichosa e pode interpretar os desejos de maneiras inesperadas."Os aldeões se reuniram para decidir o que fazer com a pedra. Alguns queriam usá-la para acabar com todas as suas necessidades, enquanto outros temiam as consequências desconhecidas de se brincar com tal poder. Após muita discussão, decidiram que a pedra deveria ser guardada em segurança e usada apenas em caso de extrema necessidade.`;
        }else{
            titulo.innerHTML = `Lorem`;
            texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit maximus sem imperdiet eleifend id id dolor. Maecenas interdum interdum odio et condimentum. Fusce elementum dictum feugiat. Cras id magna placerat, vehicula massa non, semper leo. Quisque pulvinar, nisl quis hendrerit rhoncus, nisi massa maximus purus, non dignissim metus erat in mauris. Sed non pharetra lacus, in interdum ligula. Cras vel faucibus dui. Aliquam vestibulum tempus vestibulum. Etiam auctor tortor eu leo rhoncus molestie. Vivamus cursus tristique facilisis. Nullam bibendum hendrerit magna, et volutpat mi lacinia ac. Duis varius nibh venenatis mauris dictum sodales. Integer vel libero nulla. Maecenas in neque nec est molestie dignissim. Donec scelerisque auctor finibus.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lobortis, neque nec consequat dapibus, enim magna imperdiet nunc, convallis volutpat eros nisl eget neque. Praesent mattis arcu sit amet justo pellentesque tincidunt. Mauris lacinia lectus vel dolor molestie, a luctus lorem finibus. Donec a ex tellus. Morbi sit amet sollicitudin leo, in interdum felis. Curabitur nec risus nulla. Nunc non nisi dignissim quam sollicitudin sollicitudin. Curabitur condimentum quis nibh id varius. Nam sed euismod libero. Morbi imperdiet nulla nec nibh ornare congue. Praesent vitae bibendum sapien.`;
        }
    }// FIM DA TROCA DE TEXTO DO LOREM PELO TEXTO DO CHATGPT
});

var button2 = document.querySelector('#button2');

button2.addEventListener('click',()=>{
    {// INICIO DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON1 E DO CIRCLE1 E DA REMOÇÃO DO TEXTO 
        let circle = document.querySelector('#circle2');
        let RemovTexto = document.querySelector('#button2 > h5');

        if(circle.style.marginLeft == "0px" && RemovTexto.innerHTML == `Com` && button2.style.backgroundColor == "rgb(58, 53, 53)" && RemovTexto.style.color == "whitesmoke" && circle.style.backgroundColor == "wheat"){
            RemovTexto.innerHTML = `Sem`;
            RemovTexto.style.color = "black";
            button2.style.backgroundColor = "rgb(200, 201, 201)";
            circle.style.marginLeft = "70px";
            circle.style.backgroundColor = "rgba(10, 200, 255, 0.5)";
        }else{
            RemovTexto.innerHTML = `Com`;
            RemovTexto.style.color = "whitesmoke";
            button2.style.backgroundColor = "rgb(58, 53, 53)";
            circle.style.marginLeft = "0px";
            circle.style.backgroundColor = "wheat";
        }
    }// FIM DA ANIMAÇÃO DO CIRCLE,TROCA DE COR DO BUTTON1 E DO CIRCLE1 E DA TROCA DE COM POR SEM

    {// INICIO DA REMOÇÃO DO TEXTO
        let titulo = document.querySelector('#container-texto > h1');
        let texto = document.querySelector('#container-texto > p');
        let circle = document.querySelector('#circle1');

        if(titulo.innerHTML == `Lorem` || titulo.innerHTML == `Chat`){
            titulo.innerHTML = ``;
            texto.innerHTML = ``;
        }else if(circle.style.marginLeft == "70px"){
            titulo.innerHTML = "Chat";
            texto.innerHTML = `No coração de uma floresta densa, onde os raios do sol mal penetravam a copa das árvores, havia um pequeno vilarejo esquecido pelo tempo. Os habitantes viviam em harmonia com a natureza, colhendo apenas o necessário para sua sobrevivência e respeitando os ciclos naturais das estações.Certa manhã, uma criança do vilarejo encontrou uma pedra brilhante na beira do rio. Era diferente de tudo que já haviam visto: cintilava com uma luz interna que mudava de cor conforme era girada. Curiosa, a criança levou a pedra ao ancião do vilarejo, um homem sábio que conhecia muitas histórias antigas.O ancião examinou a pedra com atenção e seus olhos brilharam com reconhecimento. "Esta," disse ele com voz grave, "é a Pedra dos Sonhos. Dizem as lendas que ela tem o poder de realizar os desejos mais profundos de quem a possui, mas é preciso ter cuidado. A pedra é caprichosa e pode interpretar os desejos de maneiras inesperadas."Os aldeões se reuniram para decidir o que fazer com a pedra. Alguns queriam usá-la para acabar com todas as suas necessidades, enquanto outros temiam as consequências desconhecidas de se brincar com tal poder. Após muita discussão, decidiram que a pedra deveria ser guardada em segurança e usada apenas em caso de extrema necessidade.`;
        }else if(circle.style.marginLeft = "0px"){
            titulo.innerHTML = `Lorem`;
            texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit maximus sem imperdiet eleifend id id dolor. Maecenas interdum interdum odio et condimentum. Fusce elementum dictum feugiat. Cras id magna placerat, vehicula massa non, semper leo. Quisque pulvinar, nisl quis hendrerit rhoncus, nisi massa maximus purus, non dignissim metus erat in mauris. Sed non pharetra lacus, in interdum ligula. Cras vel faucibus dui. Aliquam vestibulum tempus vestibulum. Etiam auctor tortor eu leo rhoncus molestie. Vivamus cursus tristique facilisis. Nullam bibendum hendrerit magna, et volutpat mi lacinia ac. Duis varius nibh venenatis mauris dictum sodales. Integer vel libero nulla. Maecenas in neque nec est molestie dignissim. Donec scelerisque auctor finibus.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lobortis, neque nec consequat dapibus, enim magna imperdiet nunc, convallis volutpat eros nisl eget neque. Praesent mattis arcu sit amet justo pellentesque tincidunt. Mauris lacinia lectus vel dolor molestie, a luctus lorem finibus. Donec a ex tellus. Morbi sit amet sollicitudin leo, in interdum felis. Curabitur nec risus nulla. Nunc non nisi dignissim quam sollicitudin sollicitudin. Curabitur condimentum quis nibh id varius. Nam sed euismod libero. Morbi imperdiet nulla nec nibh ornare congue. Praesent vitae bibendum sapien.`;
        }
    }// FIM DA REMOÇÃO DO TEXTO
});