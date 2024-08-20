const config = document.getElementById('config');
const conteudo = document.getElementById('conteudo');
const abrirConfig = document.getElementById('abrirConfig');
const buttons = document.querySelectorAll('.button');
const circles = document.querySelectorAll('.circle');
const h5s = document.querySelectorAll('.button > h5');
const selecCores = document.getElementById('container-selecao-cores');
const texto = document.getElementById('texto');
const titulo = conteudo.querySelector('h1');
const paragrafo = conteudo.querySelector('p');
const reload = document.querySelectorAll('.reload');
const button1 = document.querySelectorAll('.button')[1];
const button2 = document.querySelectorAll('.button')[2];
const css_before = window.getComputedStyle(config, '::before');

function buttonPD(BT,CL,H5,h5TextInicio,h5TextFim){
    if(CL.style.marginLeft == "0px"){
        BT.style.backgroundColor = "rgb(199, 190, 190)";
        CL.style.marginLeft = "70px";
        H5.style.color = "black";
        H5.innerText = h5TextInicio;
    }else{
        BT.style.backgroundColor = "rgb(44, 44, 44)";
        CL.style.marginLeft = "0px";
        H5.style.color = "whitesmoke";
        H5.innerText = h5TextFim;
    }
}

function reloadTexto(){
    reload.forEach((item)=>{
        item.style.animationName = "reload";
        setTimeout(()=>{
            item.style.animationName = "";
        },2000);
    });

    button1.classList.add('disabled');
    button2.classList.add('disabled');

    setTimeout(()=>{
        texto.style.animationName = "";
        button1.classList.remove('disabled');
        button2.classList.remove('disabled');
    },2000);
}

function verificarAltura(){
    if(css_before.content === '"false"' && conteudo.style.height === "70dvh"){
        config.style.height = "0px";
        conteudo.style.height = "100%";
    }
}

function verificarLargura(){
    if(css_before.content === '"true"' && conteudo.style.width === "80%"){
        config.style.width = "100%";
        config.style.height = "0px";
        conteudo.style.width = "100%";
    }

    if(css_before.content === '"false"' && conteudo.style.width === "100%" && config.style.width === "100%"){
        config.style.height = "100dvh";
        config.style.width = "0px";
        conteudo.style.width = "100%";
        conteudo.style.height = "100dvh";
    }
}

setInterval(()=>{
    verificarAltura();
    verificarLargura();
},1);

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        if(css_before.content === '"true"'){
            if(config.style.height === "30dvh"){
                config.style.height = "0px";
                conteudo.style.height = "100%";
            }else{
                config.style.height = "30dvh";
                conteudo.style.height = "70dvh";
            }
        }else{
            if(config.style.width === '20%'){
                config.style.height = '';
                config.style.width = '';
                conteudo.style.width = '';  
            }else{
                config.style.height = '';
                config.style.width = '20%';
                conteudo.style.width = '80%';
            }
        }
    }
});

abrirConfig.addEventListener('click',()=>{
    if(css_before.content === '"true"'){
        if(config.style.height === "30dvh"){
            config.style.height = "0px";
            conteudo.style.height = "100%";
        }else{
            config.style.height = "30dvh";
            conteudo.style.height = "70dvh";
        }
    }else{
        if(config.style.width === '20%'){
            config.style.height = '';
            config.style.width = '';
            conteudo.style.width = '';  
        }else{
            config.style.height = '';
            config.style.width = '20%';
            conteudo.style.width = '80%';
        }
    }
});

buttons.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        if(index === 0){
            buttonPD(item,circles[index],h5s[index],'Outro','Padrão');

            if(selecCores.innerHTML === ''){
                selecCores.style.display = 'flex';
                selecCores.innerHTML = `<div class="separar-cores">
                <input type="color" id="corConfig" title="Cor das configurações" value="#8B0000">
                <input type="color" id="corConteudo" title="Cor do conteúdo" value="#2c2c2c">
                <input type="color" id="corTexto" title="Cor do texto" value="#F5F5F5">
            </div><!-- separar-cores -->
        
            <div class="separar-cores">
                <div id="titulo-cores"><h4>Pre definidos:</h4></div>
        
                <div id="container-selec-pre">
                    <div class="container-pre" title="Verde folha e Cor de Corbre">
                        <div class="pre"></div>
                    </div><!-- container-pre -->
        
                    <div class="container-pre" title="Violeta Elétrico e Rosa Choque">
                        <div class="pre"></div>
                    </div><!-- container-pre -->
        
                    <div class="container-pre" title="Azul Cobalto e Cor de Prata">
                        <div class="pre"></div>
                    </div><!-- container-pre -->
        
                </div><!-- container-selec-pre -->
            </div><!-- separar-cores -->`;
            }else{
                selecCores.style.display = 'none';
                selecCores.innerHTML = "";
            }

            if(circles[index].style.marginLeft === '70px'){
                const corConfig = document.getElementById('corConfig');
                const corConteudo = document.getElementById('corConteudo');
                const corTexto = document.getElementById('corTexto');
    
                corConfig.addEventListener('input',()=>{
                    config.style.backgroundColor = corConfig.value;
                });
    
                corConteudo.addEventListener('input',()=>{
                    conteudo.style.backgroundColor = corConteudo.value;
                });
    
                corTexto.addEventListener('input',()=>{
                    texto.style.color = corTexto.value;
                });

                const coresPres = document.querySelectorAll('.container-pre');

                coresPres.forEach((item,index)=>{
                    item.addEventListener('click',()=>{
                        if(index === 0){
                            config.style.backgroundColor = "#4CAF50";
                            conteudo.style.backgroundColor = "#B87333";
                            texto.style.color = "#000000";
                            corConfig.value = "#4CAF50";
                            corConteudo.value = "#B87333";
                            corTexto.value = "#000000";
                        }

                        if(index === 1){
                            config.style.backgroundColor = "#d52dff";
                            conteudo.style.backgroundColor = "#FF007F";
                            texto.style.color = "#F5F5F5";
                            corConfig.value = "#d52dff";
                            corConteudo.value = "#FF007F";
                            corTexto.value = "#F5F5F5";
                        }

                        if(index === 2){
                            config.style.backgroundColor = "#2986dd";
                            conteudo.style.backgroundColor = "#C0C0C0";
                            texto.style.color = "#000000";
                            corConfig.value = "#2986dd";
                            corConteudo.value = "#C0C0C0";
                            corTexto.value = "#000000";
                        }
                    });
                });
            }else{
                config.style.backgroundColor = "";
                conteudo.style.backgroundColor = "";
                texto.style.color = "";
            }
        }

        if(index === 1){
            buttonPD(item,circles[index],h5s[index],'Chat','Lorem');

            const circle3 = document.querySelectorAll('.circle')[2];

            if(circles[index].style.marginLeft === '70px'){
                if(circle3.style.marginLeft === '0px'){
                    texto.style.animationName = "trocaTexto";

                    setTimeout(()=>{
                        titulo.innerText = "Chat";
                        paragrafo.innerText = `Era uma vez, em uma pequena aldeia, um jovem chamado João. João era conhecido por sua curiosidade insaciável e por sua habilidade de resolver problemas. Certo dia, ele encontrou um mapa antigo enquanto explorava o sótão da casa de seu avô. O mapa indicava a localização de um tesouro escondido nas profundezas da floresta.Determinando-se a encontrar o tesouro, João preparou sua mochila com provisões e partiu logo ao amanhecer. A floresta era densa e cheia de perigos, mas sua determinação era maior do que qualquer medo. Ele seguiu as indicações do mapa, atravessando rios, escalando colinas e enfrentando animais selvagens.Após dias de jornada, ele finalmente chegou a uma caverna oculta. Com a ajuda de uma tocha, entrou na caverna e encontrou um baú antigo. Ao abri-lo, seus olhos brilharam ao ver o tesouro: moedas de ouro, joias preciosas e um pergaminho com instruções para ajudar sua aldeia a prosperar.João voltou à aldeia como um herói. Com o tesouro, ele ajudou a construir escolas, hospitais e infraestruturas que melhoraram a vida de todos. Sua coragem e determinação ficaram gravadas na história da aldeia, inspirando futuras gerações a seguir seus passos.`
                    },1500);
                }else{
                    titulo.innerText = "";
                    paragrafo.innerText = "";
                }
            }else{
                if(circle3.style.marginLeft === '0px'){
                    texto.style.animationName = "trocaTexto";

                    setTimeout(()=>{
                        titulo.innerText = "Lorem";
                        paragrafo.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit ex, viverra et tincidunt sed, tempor non ligula. Nam efficitur sapien at molestie sagittis. Cras eleifend fringilla interdum. Maecenas suscipit mauris nisl, et congue orci feugiat et. Praesent dapibus, ipsum vitae pellentesque tempor, mauris ex tempor ante, in suscipit velit nibh et nibh. Vivamus pretium, arcu interdum maximus luctus, lacus justo aliquam quam, vel maximus magna urna ac dui. Suspendisse rutrum dui sit amet sollicitudin accumsan. Sed non congue felis, sed lacinia elit. Nunc est mi, ullamcorper ac ex ut, sagittis vehicula eros. Cras et dignissim mauris, at cursus lorem. Integer ornare scelerisque tortor, ut rhoncus velit iaculis hendrerit. Donec a pharetra turpis. Nullam pellentesque justo pretium nunc euismod gravida. Suspendisse a lobortis tellus.Integer ac urna ac odio ultrices convallis in nec eros. Pellentesque dapibus efficitur ultrices. Praesent et elit non ex molestie consectetur. Vestibulum tincidunt ac tellus sed mattis. Nam nec ex odio. Aliquam vulputate, orci eu vestibulum iaculis, lectus justo blandit tortor, vel volutpat nulla dui id eros. Proin a justo dolor. Vivamus a eros egestas, lacinia turpis vel, consequat turpis. Aliquam tristique massa vitae tincidunt mollis. Cras eleifend, libero vel euismod egestas, justo turpis blandit enim, id gravida ligula nunc at turpis.`;
                    },1500);
                }else{
                    titulo.innerText = "";
                    paragrafo.innerText = "";
                }
            }

            reloadTexto();
        }

        if(index === 2){
            buttonPD(item,circles[index],h5s[index],'Sem','Com');

            const circle2 = document.querySelectorAll('.circle')[1];

            if(titulo.innerText !== ''){
                texto.style.animationName = "remover";

                setTimeout(()=>{
                    titulo.innerText = "";
                    paragrafo.innerText = "";
                },2000);
            }else{
                texto.style.animationName = "adicionar";

                if(circle2.style.marginLeft === '70px'){
                    titulo.innerText = "Chat";
                    paragrafo.innerText = `Era uma vez, em uma pequena aldeia, um jovem chamado João. João era conhecido por sua curiosidade insaciável e por sua habilidade de resolver problemas. Certo dia, ele encontrou um mapa antigo enquanto explorava o sótão da casa de seu avô. O mapa indicava a localização de um tesouro escondido nas profundezas da floresta.Determinando-se a encontrar o tesouro, João preparou sua mochila com provisões e partiu logo ao amanhecer. A floresta era densa e cheia de perigos, mas sua determinação era maior do que qualquer medo. Ele seguiu as indicações do mapa, atravessando rios, escalando colinas e enfrentando animais selvagens.Após dias de jornada, ele finalmente chegou a uma caverna oculta. Com a ajuda de uma tocha, entrou na caverna e encontrou um baú antigo. Ao abri-lo, seus olhos brilharam ao ver o tesouro: moedas de ouro, joias preciosas e um pergaminho com instruções para ajudar sua aldeia a prosperar.João voltou à aldeia como um herói. Com o tesouro, ele ajudou a construir escolas, hospitais e infraestruturas que melhoraram a vida de todos. Sua coragem e determinação ficaram gravadas na história da aldeia, inspirando futuras gerações a seguir seus passos.`;
                }else{
                    titulo.innerText = "Lorem";
                    paragrafo.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit ex, viverra et tincidunt sed, tempor non ligula. Nam efficitur sapien at molestie sagittis. Cras eleifend fringilla interdum. Maecenas suscipit mauris nisl, et congue orci feugiat et. Praesent dapibus, ipsum vitae pellentesque tempor, mauris ex tempor ante, in suscipit velit nibh et nibh. Vivamus pretium, arcu interdum maximus luctus, lacus justo aliquam quam, vel maximus magna urna ac dui. Suspendisse rutrum dui sit amet sollicitudin accumsan. Sed non congue felis, sed lacinia elit. Nunc est mi, ullamcorper ac ex ut, sagittis vehicula eros. Cras et dignissim mauris, at cursus lorem. Integer ornare scelerisque tortor, ut rhoncus velit iaculis hendrerit. Donec a pharetra turpis. Nullam pellentesque justo pretium nunc euismod gravida. Suspendisse a lobortis tellus.Integer ac urna ac odio ultrices convallis in nec eros. Pellentesque dapibus efficitur ultrices. Praesent et elit non ex molestie consectetur. Vestibulum tincidunt ac tellus sed mattis. Nam nec ex odio. Aliquam vulputate, orci eu vestibulum iaculis, lectus justo blandit tortor, vel volutpat nulla dui id eros. Proin a justo dolor. Vivamus a eros egestas, lacinia turpis vel, consequat turpis. Aliquam tristique massa vitae tincidunt mollis. Cras eleifend, libero vel euismod egestas, justo turpis blandit enim, id gravida ligula nunc at turpis.";
                }
            }

            reloadTexto();

        }
    });
});