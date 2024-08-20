var config = document.querySelector('#config');
var abriConfig = document.querySelector('#abriConfig');
var conteudo = document.querySelector('#conteudo');
var button = document.querySelector('#button');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var texto = document.querySelector('#texto');

document.addEventListener('keydown',(event)=>{
    {// INICIO DA ABERTURA DAS CONFIGURAÇÕES COM O ESC
        if(event.key === "Escape"){
            if(config.style.width == "0px" && conteudo.style.width == "100%"){
                config.style.width = "20%";
                conteudo.style.width = "80%";
            }else{
                config.style.width = "0px";
                conteudo.style.width = "100%";
            }
        }
    }// FIM DA ABERTURA DAS CONFIGURAÇÕES COM O ESC
});

abriConfig.addEventListener('click',()=>{
    {// INICIO DA ABERTURA DAS CONBFIGURAÇÕES
        if(config.style.width == "0px" && conteudo.style.width == "100%"){
            config.style.width = "20%";
            conteudo.style.width = "80%";
        }else{
            config.style.width = "0px";
            conteudo.style.width = "100%";
        }
    }// FIM DA ABERTURA DAS CONBFIGURAÇÕES
});

button.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO, TROCA DE PADRÃO PARA OUTRO E TROCA DE COR DO PADRÃO
        let padrao = document.querySelector('#padrao');
        let circle = document.querySelector('#circle');

        if(button.style.backgroundColor == "rgb(48, 44, 44)" && circle.style.marginLeft == "0px" ){
            button.style.backgroundColor = "rgb(206, 202, 202)";
            circle.style.marginLeft = "70px";
            padrao.style.color = "black";
            padrao.innerHTML = `Outro`;
        }else{
            button.style.backgroundColor = "rgb(48, 44, 44)";
            circle.style.marginLeft = "0px";
            padrao.style.color = "whitesmoke";
            padrao.innerHTML = `Padrão`;
            
        }
    }// FIM DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO, TROCA DE PADRÃO PARA OUTRO E TROCA DE COR DO PADRÃO

    {// INICIO DA COLOCAÇÃO DOS INPUTS COM O TIPO COLOR E DAS PREDEFINIÇÕES
        let selecionarCor = document.querySelector('#selecionarCor');

        if(selecionarCor.innerHTML == ``){
            selecionarCor.innerHTML = `
            <input id="CorConfig" class="opitions" type="color" value="#8B0000">
            <input id="CorConteudo" class="opitions" type="color" value="#2C2929">
            <input id="CorTexto" class="opitions" type="color" value="#F5F5F5">
            <h4>Pre definidos:</h4>
            <div title="Azul Dodger e Cinza Claro" id="predefinido1" class="container-predefinido"><div class="predefinido"></div></div>
            <div title="Verde Escuro e Cor de Chocolate" id="predefinido2" class="container-predefinido"><div class="predefinido"></div></div>
            <div title="Especial" id="predefinido3" class="container-predefinido"><div class="predefinido"></div></div>
            `;
        }else{
            selecionarCor.innerHTML = ``;
        }
    }// FIM DA COLOCAÇÃO DOS INPUTS COM O TIPO COLOR E DAS PREDEFINIÇÕES

    {// INICIO DA TROCA DE COR DE FUNDO DAS CONFIGURAÇÕES, DO CONTEUDO, TROCA DE COR DO TEXTO NA TELA COM OS INPUTS E COM AS DIVS
        let CorConfig = document.querySelector('#CorConfig');
        let CorConteudo = document.querySelector('#CorConteudo');
        let CorTexto = document.querySelector('#CorTexto');
        let circle = document.querySelector('#circle');

        if(circle.style.marginLeft == "70px"){
            CorConfig.addEventListener('input',()=>{
                if(config.style.animationName == "animacao-config"){
                    config.style.animationName = "";
                }
            });
    
            CorConteudo.addEventListener('input',()=>{
                if(conteudo.style.animationName == "animacao-conteudo"){
                    conteudo.style.animationName = "";
                }
            });
    
            CorTexto.addEventListener('input',()=>{
                if(texto.style.animationName == "animacao-texto"){
                    texto.style.animationName = "";
                }
            });
        }

        document.addEventListener('input',()=>{
            if(config.style.backgroundColor == "darkred" || config.style.backgroundColor != "darkred"){
                config.style.backgroundColor = CorConfig.value;
            }

            if(conteudo.style.backgroundColor == "rgb(44, 41, 41)" || conteudo.style.backgroundColor != "rgb(44, 41, 41)"){
                conteudo.style.backgroundColor = CorConteudo.value;
            }

            if(texto.style.color == "whitesmoke" || texto.style.color != "whitesmoke"){
                texto.style.color = CorTexto.value;
            }
        });

        if(circle.style.marginLeft == "70px"){
            let pre1 = document.querySelector('#predefinido1');
            let pre2 = document.querySelector('#predefinido2');
            let pre3 = document.querySelector('#predefinido3');

            pre1.addEventListener('click',()=>{
                    config.style.backgroundColor = " #14A0CA";
                    conteudo.style.backgroundColor = "#E4E4E4";
                    texto.style.color = "#000000";
                    CorConfig.value = "#14A0CA";
                    CorConteudo.value = "#E4E4E4";
                    CorTexto.value = "#000000";
                    config.style.animationName = "";
                    conteudo.style.animationName = "";
                    texto.style.animationName = "";
            });

            pre2.addEventListener('click',()=>{
                config.style.backgroundColor = "#214D19";
                conteudo.style.backgroundColor = "#B87333";
                texto.style.color = "#F5F5F5";
                CorConfig.value = "#214D19";
                CorConteudo.value = "#B87333";
                CorTexto.value = "#F5F5F5";
                config.style.animationName = "";
                conteudo.style.animationName = "";
                texto.style.animationName = "";
            });

            pre3.addEventListener('click',()=>{
                config.style.animationName = "animacao-config";
                conteudo.style.animationName = "animacao-conteudo";
                texto.style.animationName = "animacao-texto";
            });
        }

        if(circle.style.marginLeft == "0px"){
            config.style.backgroundColor = "darkred";
            conteudo.style.backgroundColor = "rgb(44, 41, 41)";
            texto.style.color = "whitesmoke";
            config.style.animationName = "";
            conteudo.style.animationName = "";
            texto.style.animationName = "";
        }
    }// FIM DA TROCA DE COR DE FUNDO DAS CONFIGURAÇÕES, DO CONTEUDO, TROCA DE COR DO TEXTO NA TELA COM OS INPUTS E COM AS DIVS

    {// INICIO DA TROCA DE LUGAR DO BUTTON1 E DO BUTTON2
        let trocaTexto = document.querySelector('#textoTela');
        let ComTexto = document.querySelector('#com');

        if(button1.style.top == "70px"){
            button1.style.transition = "0s";
            button1.style.top = "220px";
            trocaTexto.style.top = "226px";
        }else{
            setTimeout(()=>{
                button1.style.transition = "1s";
            });
            button1.style.top = "70px";
            trocaTexto.style.top = "78px";
        }

        if(button2.style.top == "100px"){
            button2.style.transition = "0s";
            button2.style.top = "250px";
            ComTexto.style.top = "258px";
        }else{
            setTimeout(()=>{
                button2.style.transition = "1s";
            });
            button2.style.top = "100px";
            ComTexto.style.top = "108px";
        }
    }// FIM DA TROCA DE LUGAR DO BUTTON1 E DO BUTTON2
});

button1.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON1, ANIMAÇÃO DO CIRCLO E TROCA DE LOREM POR CHAT
        let lorem = document.querySelector('#loremTroca');

        if(button1.style.backgroundColor == "rgb(48, 44, 44)" && circle1.style.marginLeft == "0px" ){
            button1.style.backgroundColor = "rgb(206, 202, 202)";
            circle1.style.marginLeft = "70px";
            lorem.style.color = "black";
            lorem.innerHTML = `Chat`;
        }else{
            button1.style.backgroundColor = "rgb(48, 44, 44)";
            circle1.style.marginLeft = "0px";
            lorem.style.color = "whitesmoke";
            lorem.innerHTML = `Lorem`;
        }
    }// FIM DA TROCA DE COR DO BUTTON1, ANIMAÇÃO DO CIRCLO E TROCA DE LOREM POR CHAT

    {// INICIO DA TROCA DE TEXTO DE LOREM POR CHAT
        let titulo = texto.querySelector('h1');
        let paragrafo = texto.querySelector('p');
        let circle2 = document.querySelector('#circle2');

        if(circle2.style.marginLeft == "70px"){
            titulo.innerHTML = "";
            paragrafo.innerHTML = "";
        }else if(titulo.innerHTML == "Lorem"){
            titulo.innerHTML = "Chat";
            paragrafo.innerHTML = "No silêncio matutino, os pássaros entoavam uma sinfonia delicada que se misturava ao aroma fresco da manhã. A luz do sol começava a derramar-se sobre as colinas verdejantes, pintando-as com tons dourados que contrastavam com o azul intenso do céu. Era um dia daqueles que parecia suspenso no tempo, onde cada momento era uma promessa de tranquilidade e beleza.Na pequena cidade à beira do rio, as pessoas começavam a despertar para mais um dia de rotina. As ruas de paralelepípedos ainda estavam vazias, mas as portas das casas se abriam aos poucos, revelando o movimento discreto dos moradores que se preparavam para suas atividades diárias. O cheiro de pão fresco saía da padaria, misturando-se ao aroma de café que pairava no ar.No parque, um grupo de crianças corria animadamente, suas risadas enchendo o ambiente com uma energia contagiante. Os cães latiam felizes, enquanto seus donos os levavam para o passeio matinal. O senhor que sempre alimentava os patos no lago já estava lá, distribuindo migalhas de pão que os patos disputavam com entusiasmo.No centro da cidade, o mercado começava a ganhar vida, com os comerciantes montando suas barracas e expondo suas mercadorias coloridas. Frutas frescas, legumes viçosos e flores perfumadas competiam pela atenção dos compradores que passavam, cumprimentando-se e trocando pequenas conversas enquanto faziam suas compras.";
        }else{
            titulo.innerHTML = "Lorem";
            paragrafo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tempus ipsum. Sed vulputate, lacus et molestie volutpat, massa lorem sollicitudin diam, eu ornare ante enim at erat. Maecenas dapibus viverra justo, id ornare eros facilisis et. In felis sem, porta id dui ac, bibendum suscipit risus. Cras vulputate finibus augue et sodales. Donec dapibus, ex vitae sollicitudin pharetra, sem metus tristique ipsum, ut tempor justo mi volutpat nisl. Fusce nec volutpat augue, eget accumsan sem.Praesent eget massa erat. Donec sit amet tempus tellus. Etiam justo lacus, rhoncus at malesuada at, iaculis id nunc. Integer vulputate lacus non volutpat bibendum. Quisque feugiat interdum urna ut rhoncus. Integer sit amet egestas ligula, eget mollis nisi. Mauris euismod sagittis molestie. Praesent non dui eleifend, facilisis eros sit amet, interdum justo. Proin ultricies ac diam vel venenatis. Nulla rutrum bibendum libero sit amet bibendum. Nulla euismod nulla a dictum faucibus.Aliquam vitae tortor sapien. In non consequat dui, eget rutrum lorem. Morbi quis nunc fermentum, interdum augue sed, auctor purus. Aenean ut lacus placerat, scelerisque nisi vel, sollicitudin ex. Aliquam pulvinar orci quis velit tincidunt, in lobortis tellus convallis. Donec rutrum ultricies commodo. Nam orci neque, fermentum eu massa in, faucibus rhoncus enim. In consequat nulla ut magna elementum iaculis.";
        }
    }// FIM DA TROCA DE TEXTO DE LOREM POR CHAT
});

button2.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON1, ANIMAÇÃO DO CIRCLO E TROCA DE COM POR SEM
        let comTexto = document.querySelector('#remocao');
        let circle2 = document.querySelector('#circle2');

        if(button2.style.backgroundColor == "rgb(48, 44, 44)" && circle2.style.marginLeft == "0px" ){
            button2.style.backgroundColor = "rgb(206, 202, 202)";
            circle2.style.marginLeft = "70px";
            comTexto.style.color = "black";
            comTexto.innerHTML = `Sem`;
        }else{
            button2.style.backgroundColor = "rgb(48, 44, 44)";
            circle2.style.marginLeft = "0px";
            comTexto.style.color = "whitesmoke";
            comTexto.innerHTML = `Com`;
        }
    }// FIM DA TROCA DE COR DO BUTTON1, ANIMAÇÃO DO CIRCLO E TROCA DE COM POR SEM

    {// INICIO DA REMOÇÃO DO TEXTO
        let titulo = texto.querySelector('h1');
        let paragrafo = texto.querySelector('p');
        let circle1 = document.querySelector('#circle1');

        if(titulo.innerHTML == "Lorem" || titulo.innerHTML == "Chat"){
            titulo.innerHTML = "";
            paragrafo.innerHTML = "";
        }else if(circle1.style.marginLeft == "70px"){
            titulo.innerHTML = "Chat";
            paragrafo.innerHTML = `No silêncio matutino, os pássaros entoavam uma sinfonia delicada que se misturava ao aroma fresco da manhã. A luz do sol começava a derramar-se sobre as colinas verdejantes, pintando-as com tons dourados que contrastavam com o azul intenso do céu. Era um dia daqueles que parecia suspenso no tempo, onde cada momento era uma promessa de tranquilidade e beleza.Na pequena cidade à beira do rio, as pessoas começavam a despertar para mais um dia de rotina. As ruas de paralelepípedos ainda estavam vazias, mas as portas das casas se abriam aos poucos, revelando o movimento discreto dos moradores que se preparavam para suas atividades diárias. O cheiro de pão fresco saía da padaria, misturando-se ao aroma de café que pairava no ar.No parque, um grupo de crianças corria animadamente, suas risadas enchendo o ambiente com uma energia contagiante. Os cães latiam felizes, enquanto seus donos os levavam para o passeio matinal. O senhor que sempre alimentava os patos no lago já estava lá, distribuindo migalhas de pão que os patos disputavam com entusiasmo.No centro da cidade, o mercado começava a ganhar vida, com os comerciantes montando suas barracas e expondo suas mercadorias coloridas. Frutas frescas, legumes viçosos e flores perfumadas competiam pela atenção dos compradores que passavam, cumprimentando-se e trocando pequenas conversas enquanto faziam suas compras.`;
        }else{
            titulo.innerHTML = "Lorem";
            paragrafo.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tempus ipsum. Sed vulputate, lacus et molestie volutpat, massa lorem sollicitudin diam, eu ornare ante enim at erat. Maecenas dapibus viverra justo, id ornare eros facilisis et. In felis sem, porta id dui ac, bibendum suscipit risus. Cras vulputate finibus augue et sodales. Donec dapibus, ex vitae sollicitudin pharetra, sem metus tristique ipsum, ut tempor justo mi volutpat nisl. Fusce nec volutpat augue, eget accumsan sem.Praesent eget massa erat. Donec sit amet tempus tellus. Etiam justo lacus, rhoncus at malesuada at, iaculis id nunc. Integer vulputate lacus non volutpat bibendum. Quisque feugiat interdum urna ut rhoncus. Integer sit amet egestas ligula, eget mollis nisi. Mauris euismod sagittis molestie. Praesent non dui eleifend, facilisis eros sit amet, interdum justo. Proin ultricies ac diam vel venenatis. Nulla rutrum bibendum libero sit amet bibendum. Nulla euismod nulla a dictum faucibus.Aliquam vitae tortor sapien. In non consequat dui, eget rutrum lorem. Morbi quis nunc fermentum, interdum augue sed, auctor purus. Aenean ut lacus placerat, scelerisque nisi vel, sollicitudin ex. Aliquam pulvinar orci quis velit tincidunt, in lobortis tellus convallis. Donec rutrum ultricies commodo. Nam orci neque, fermentum eu massa in, faucibus rhoncus enim. In consequat nulla ut magna elementum iaculis.`;
        }
    }// FIM DA REMOÇÃO DO TEXTO
});