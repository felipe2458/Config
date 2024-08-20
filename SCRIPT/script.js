let abrirConfig = document.getElementById('abrirConfig');
let conteudo = document.getElementById('conteudo');
let config = document.getElementById('config');
let texto = document.getElementById('texto');

document.addEventListener('keydown',(event)=>{
    {// INICIO DA ABERTURA DAS CONFIGURAÇÕES COM O ESC
        if(event.key === "Escape"){
            if(config.style.width == "0px"){
                config.style.width = "20%";
                conteudo.style.width = "80%";
            }else{
                config.style.width = "0px";
                conteudo.style.width = "100%";
            }
        }
    }// FIM DA ABERTURA DAS CONFIGURAÇÕES COM O ESC
});

abrirConfig.addEventListener('click',()=>{
    {// INICIO DA ABERTURA DAS CONFIGURAÇÕES
        if(config.style.width == "0px"){
            config.style.width = "20%";
            conteudo.style.width = "80%";
        }else{
            config.style.width = "0px";
            conteudo.style.width = "100%";
        }
    }// FIM DA ABERTURA DAS CONFIGURAÇÕES 
});

let button = document.getElementById('button');
let circle = document.getElementById('circle');

button.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO E TROCA DE PADRÃO POR OUTRO 
        let padrao = button.querySelector('h5');

        if(circle.style.marginLeft == "0px"){
            button.style.backgroundColor = "rgb(199, 190, 190)";
            circle.style.marginLeft = "70px";
            padrao.innerHTML = "Outro";
            padrao.style.color = "black";
        }else{
            button.style.backgroundColor = "rgb(44, 44, 44)";
            circle.style.marginLeft = "0px";
            padrao.innerHTML = "Padrão";
            padrao.style.color = "whitesmoke";
        }
    }// FIM DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO E TROCA DE PADRÃO POR OUTRO 

    {// INICIO DA ADIÇÃO DOS INUTS COM O TIPO COLOR E DOS PREDEFINIDOS 
        let selecionarCor = document.getElementById('selecionarCor');
        let h4 = document.getElementById('troca');;

        if(selecionarCor.innerHTML == ""){
            selecionarCor.innerHTML = `<input title="Cor das Configurações" id="corConfig" class="cores" type="color" value="#8B0000">
            <input title="Cor do Coteúdo" id="corConteudo" class="cores" type="color" value="#2C2C2C">
            <input title="Cor do Texto" id="corTexto" class="cores" type="color" value="#F5F5F5">

            <h4>Pre definidos:</h4>

            <div id="cor1" title="Verde folha e Cor de Corbre" class="container-pre"><div class="pre"></div></div>
            <div id="cor2" title="Violeta Elétrico e Rosa Choque" class="container-pre"><div class="pre"></div></div>
            <div id="cor3" title="Azul Cobalto e Cor de Prata" class="container-pre"><div class="pre"></div></div>`;
            selecionarCor.style.height = "150px";
            h4.style.marginTop = "27px";
        }else{
            selecionarCor.innerHTML = "";
            selecionarCor.style.height = "0px";
            h4.style.marginTop = "17px";
        }
    }// FIM DA ADIÇÃO DOS INUTS COM O TIPO COLOR E DOS PREDEFINIDOS 

    {// INICIO DA TROCA DE COR DO CONTEUDO, DAS CONFIGURAÇÕES E DO TEXTO COM OS INPUTS E COM AS DIVS
        let cor1 = document.getElementById('cor1');
        let cor2 = document.getElementById('cor2');
        let cor3 = document.getElementById('cor3');

        if(circle.style.marginLeft == "70px"){
            cor1.addEventListener('click',()=>{
                corConfig.value = "#4CAF50";
                corConteudo.value = "#B87333";
                corTexto.value = "#000000";
                config.style.backgroundColor = "#4CAF50";
                conteudo.style.backgroundColor = "#B87333";
                texto.style.color = "#000000";
            });

            cor2.addEventListener('click',()=>{
                corConfig.value = "#d52dff";
                corConteudo.value = "#FF007F";
                corTexto.value = "#F5F5F5";
                config.style.backgroundColor = "#d52dff";
                conteudo.style.backgroundColor = "#FF007F";
                texto.style.color = "#F5F5F5";
            });

            cor3.addEventListener('click',()=>{
                corConfig.value = "#2986dd";
                corConteudo.value = "#C0C0C0";
                corTexto.value = "#000000";
                config.style.backgroundColor = "#2986dd";
                conteudo.style.backgroundColor = "#C0C0C0";
                texto.style.color = "#000000";
            });

        let corConfig = document.getElementById('corConfig');
        let corConteudo = document.getElementById('corConteudo');
        let corTexto = document.getElementById('corTexto');

        corConfig.addEventListener('input',()=>{
            config.style.backgroundColor = corConfig.value;
        });

        corConteudo.addEventListener('input',()=>{
            conteudo.style.backgroundColor = corConteudo.value;
        });

        corTexto.addEventListener('input',()=>{
            texto.style.color = corTexto.value;
        });
        }

        if(circle.style.marginLeft == "0px"){
            config.style.backgroundColor = "darkred";
            conteudo.style.backgroundColor = "rgb(44, 44, 44)";
            texto.style.color = "whitesmoke";
        }

    }// FIM DA TROCA DE COR DO CONTEUDO, DAS CONFIGURAÇÕES E DO TEXTO COM OS INPUTS E COM AS DIVS
});// FIM DO BUTTON


let button1 = document.getElementById('button1');
let circle1 = document.getElementById('circle1');

button1.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO E TROCA DE LOREM POR CHAT 
        let troca = button1.querySelector('h5');

        if(circle1.style.marginLeft == "0px"){
            button1.style.backgroundColor = "rgb(199, 190, 190)";
            circle1.style.marginLeft = "70px";
            troca.innerHTML = "Chat";
            troca.style.color = "black";
        }else{
            button1.style.backgroundColor = "rgb(44, 44, 44)";
            circle1.style.marginLeft = "0px";
            troca.innerHTML = "Lorem";
            troca.style.color = "whitesmoke";
        }
    }// FIM DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO E TROCA DE LOREM POR CHAT

    {// INICIO DA TROCA DO TEXTO DO LOREM PELO O TEXTO DO CHAT
        let titulo = texto.querySelector('h1');
        let paragrafo = texto.querySelector('p');
        let circle2 = document.getElementById('circle2');

        if(texto.style.animationName == ""){
            texto.style.animationName = "troca";

            if(circle2.style.marginLeft == "70px"){
                titulo.innerHTML = "";
                paragrafo.innerHTML = "";
            }else if(titulo.innerHTML == "Lorem"){
                setTimeout(()=>{
                    titulo.innerHTML = "Chat";
                    paragrafo.innerHTML = "No reino distante de Eldoria, onde os ventos sussurravam segredos ancestrais e os rios cantavam canções de tempos perdidos, havia um castelo encantado que dominava a paisagem. Suas torres se erguiam majestosas contra o céu azul, refletindo os raios dourados do sol poente. Dentro dos seus muros imponentes, vivia o rei Alaric e sua filha, a princesa Lysandra.Alaric era um monarca sábio e justo, respeitado por seus súditos pela sua sabedoria e compaixão. Lysandra, por outro lado, era conhecida por sua beleza tão radiante quanto a lua cheia e por sua inteligência que rivalizava com os maiores estudiosos do reino. Juntos, eles governavam Eldoria com uma combinação única de força e gentileza, garantindo a prosperidade de seu povo.Numa noite de verão, quando o céu estava salpicado de estrelas cintilantes, uma mensagem urgente chegou ao castelo: uma ameaça sombria se erguia nos confins da fronteira sul do reino. Rumores de uma força maligna que despertava das profundezas da Terra começaram a se espalhar como fumaça pelo vento. O rei convocou seus conselheiros mais próximos e decidiu enviar uma expedição para investigar e, se necessário, confrontar essa ameaça desconhecida.Lysandra, com sua determinação e desejo de proteger seu lar, insistiu em se juntar à expedição. Apesar das objeções de seu pai e conselheiros, ela conseguiu convencê-los de que sua presença poderia ser valiosa. Equipados com armaduras reluzentes e montados em cavalos corajosos, o grupo partiu sob a luz da lua crescente, atravessando campos verdejantes e florestas ancestrais.Durante a jornada, enfrentaram desafios inesperados: emboscadas de bandidos nas estradas sinuosas e tempestades furiosas que testavam sua coragem. No entanto, a determinação do grupo não vacilou, guiados pelo propósito de proteger Eldoria e seu";
                },1200);
            }else{
                setTimeout(()=>{
                    titulo.innerHTML = "Lorem";
                    paragrafo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ipsum neque. Suspendisse at sollicitudin massa. Mauris vitae diam ex. Sed ut orci eu velit ultricies posuere. Nulla facilisi. In quis consectetur lacus. Quisque congue quam vel eleifend sollicitudin. Vestibulum euismod ullamcorper erat vel varius. Cras egestas gravida neque at aliquam. In consequat erat non diam aliquam sagittis. Nam risus nisi, finibus id tortor eget, tristique rhoncus tortor. Ut ut dui id ipsum volutpat sagittis. Curabitur hendrerit interdum sapien. Quisque sagittis quam vitae lacus dapibus ornare. Maecenas vestibulum tellus non ligula lacinia fringilla vestibulum id felis.Quisque elementum leo in tellus porttitor cursus. In eget arcu ut massa tincidunt tincidunt eu nec nulla. Nam quis feugiat enim. Cras pulvinar nec erat non pulvinar. Nunc vel nunc molestie, blandit purus non, imperdiet lorem. Sed vitae ex eu turpis luctus ullamcorper. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut augue dolor, convallis id urna ut, elementum rutrum libero. Donec cursus nisi eget dolor sollicitudin, sed rhoncus odio vehicula. Mauris id tortor tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lorem quis molestie placerat. In a congue mauris. Nam non tristique risus.Proin iaculis elit ex, in consequat arcu molestie in. Phasellus elementum odio dui, nec cursus sapien finibus sed. Sed condimentum elit enim, ut euismod dolor scelerisque eu. Sed sit amet lorem dui. Phasellus porta ex et arcu rhoncus facilisis eu et metus. Sed eu nisi sodales, rhoncus neque sit amet, consectetur risus. Cras tellus odio, varius quis posuere quis, dapibus ut ligula. In hac habitasse platea dictumst. Proin aliquet augue eget diam elementum faucibus.";
                },1200);
            }
        }

        let buttons = document.querySelectorAll('.reload');

        buttons.forEach(element =>{
            element.style.animationName = "reload";
        });

        let button2 = document.getElementById('button2');

        button1.classList.add('disable');
        button2.classList.add('disable');

        setTimeout(()=>{
            texto.style.animationName = "";
        },2000);

        if(circle2.style.marginLeft == "0px"){
            setTimeout(()=>{
                button1.classList.remove('disable');
                button2.classList.remove('disable');
                buttons.forEach(element =>{
                    element.style.animationName = "";
                });
            },3000);
        }else if(circle2.style.marginLeft == "70px"){
            setTimeout(()=>{
                button1.classList.remove('disable');
                button2.classList.remove('disable');
                buttons.forEach(element =>{
                    element.style.animationName = "";
                });
            },2000);
        }
    }// FIM DA TROCA DE TEXTO DO LOREM PELO O TEXTO DO CHAT 
});// FIM DO BUTTON 1

let button2 = document.getElementById('button2');
let circle2 = document.getElementById('circle2');

button2.addEventListener('click',()=>{
    {// INICIO DA TROCA DE COR DO BUTTON, ANIMAÇÃO DO CIRCLO E TROCA DE COM POR SEM 
        let remocao = button2.querySelector('h5');

        if(circle2.style.marginLeft == "0px"){
            button2.style.backgroundColor = "rgb(199, 190, 190)";
            circle2.style.marginLeft = "70px";
            remocao.innerHTML = "Sem";
            remocao.style.color = "black";
        }else{
            button2.style.backgroundColor = "rgb(44, 44, 44)";
            circle2.style.marginLeft = "0px";
            remocao.innerHTML = "Com";
            remocao.style.color = "whitesmoke";
        }
    }// FIM DA TROCA DE COR DO BUTTON, ANIMAÇÃO DOR CIRCLO E TROCA DE COM POR SEM 

    {// INICIO DA REMOÇÃO DO TEXTO
        let titulo = texto.querySelector('h1');
        let paragrafo = texto.querySelector('p');

        if(titulo.innerHTML == "Lorem" || titulo.innerHTML == "Chat"){
            texto.style.animationName = "remover";

            setTimeout(()=>{
                titulo.innerHTML = "";
                paragrafo.innerHTML = "";
            },2000);
        }else if(circle1.style.marginLeft == "70px"){
            texto.style.animationName = "adicionar";

            titulo.innerHTML = "Chat";
            paragrafo.innerHTML = "No reino distante de Eldoria, onde os ventos sussurravam segredos ancestrais e os rios cantavam canções de tempos perdidos, havia um castelo encantado que dominava a paisagem. Suas torres se erguiam majestosas contra o céu azul, refletindo os raios dourados do sol poente. Dentro dos seus muros imponentes, vivia o rei Alaric e sua filha, a princesa Lysandra.Alaric era um monarca sábio e justo, respeitado por seus súditos pela sua sabedoria e compaixão. Lysandra, por outro lado, era conhecida por sua beleza tão radiante quanto a lua cheia e por sua inteligência que rivalizava com os maiores estudiosos do reino. Juntos, eles governavam Eldoria com uma combinação única de força e gentileza, garantindo a prosperidade de seu povo.Numa noite de verão, quando o céu estava salpicado de estrelas cintilantes, uma mensagem urgente chegou ao castelo: uma ameaça sombria se erguia nos confins da fronteira sul do reino. Rumores de uma força maligna que despertava das profundezas da Terra começaram a se espalhar como fumaça pelo vento. O rei convocou seus conselheiros mais próximos e decidiu enviar uma expedição para investigar e, se necessário, confrontar essa ameaça desconhecida.Lysandra, com sua determinação e desejo de proteger seu lar, insistiu em se juntar à expedição. Apesar das objeções de seu pai e conselheiros, ela conseguiu convencê-los de que sua presença poderia ser valiosa. Equipados com armaduras reluzentes e montados em cavalos corajosos, o grupo partiu sob a luz da lua crescente, atravessando campos verdejantes e florestas ancestrais.Durante a jornada, enfrentaram desafios inesperados: emboscadas de bandidos nas estradas sinuosas e tempestades furiosas que testavam sua coragem. No entanto, a determinação do grupo não vacilou, guiados pelo propósito de proteger Eldoria e seu";
        }else{
            texto.style.animationName = "adicionar";

            titulo.innerHTML = "Lorem";
            paragrafo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ipsum neque. Suspendisse at sollicitudin massa. Mauris vitae diam ex. Sed ut orci eu velit ultricies posuere. Nulla facilisi. In quis consectetur lacus. Quisque congue quam vel eleifend sollicitudin. Vestibulum euismod ullamcorper erat vel varius. Cras egestas gravida neque at aliquam. In consequat erat non diam aliquam sagittis. Nam risus nisi, finibus id tortor eget, tristique rhoncus tortor. Ut ut dui id ipsum volutpat sagittis. Curabitur hendrerit interdum sapien. Quisque sagittis quam vitae lacus dapibus ornare. Maecenas vestibulum tellus non ligula lacinia fringilla vestibulum id felis.Quisque elementum leo in tellus porttitor cursus. In eget arcu ut massa tincidunt tincidunt eu nec nulla. Nam quis feugiat enim. Cras pulvinar nec erat non pulvinar. Nunc vel nunc molestie, blandit purus non, imperdiet lorem. Sed vitae ex eu turpis luctus ullamcorper. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut augue dolor, convallis id urna ut, elementum rutrum libero. Donec cursus nisi eget dolor sollicitudin, sed rhoncus odio vehicula. Mauris id tortor tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lorem quis molestie placerat. In a congue mauris. Nam non tristique risus.Proin iaculis elit ex, in consequat arcu molestie in. Phasellus elementum odio dui, nec cursus sapien finibus sed. Sed condimentum elit enim, ut euismod dolor scelerisque eu. Sed sit amet lorem dui. Phasellus porta ex et arcu rhoncus facilisis eu et metus. Sed eu nisi sodales, rhoncus neque sit amet, consectetur risus. Cras tellus odio, varius quis posuere quis, dapibus ut ligula. In hac habitasse platea dictumst. Proin aliquet augue eget diam elementum faucibus.";
        }

        let buttons = document.querySelectorAll('.reload');

        buttons.forEach(element =>{
            element.style.animationName = "reload";
        });

        button1.classList.add('disable');
        button2.classList.add('disable');

        setTimeout(()=>{
            texto.style.animationName = "";
        },2000);

        setTimeout(()=>{
            button1.classList.remove('disable');
            button2.classList.remove('disable');
            buttons.forEach(element =>{
                element.style.animationName = "";
            });
        },3000);
    }// FIM DA REMOÇÃO DO TEXTO 
});