const abrirConfig = document.getElementById("abrirConfig");
const conteudo = document.getElementById("conteudo");
const config = document.getElementById("config");
const texto = document.getElementById("texto");
const button = document.querySelectorAll(".button");
const circle = document.querySelectorAll(".circle");
const textBT = document.querySelectorAll(".button h5");

let interval;

window.addEventListener("resize", function(){
    config.style.transition = "none";
    conteudo.style.transition = "none";

    setTimeout(()=>{
        config.style.transition = "all 0.5s";
        conteudo.style.transition = "all 0.5s";
    }, 100);

    clearTimeout(interval);

    interval = setTimeout(()=>{
        window.location.href = "https://felipe2458.github.io/Config/";
    }, 100);
});

function abrir(){
    const larguraDaTela = window.innerWidth;

    if(larguraDaTela <= 1300){
        if(config.style.height === "30%"){
            config.style.height = "0px";
            conteudo.style.height = "100%";
        }else{
            config.style.height = "30%";
            conteudo.style.height = "70%";
        }
    }else{
        if(config.style.width === "20%"){
            config.style.width = "0";
            conteudo.style.width = "100%";
        }else{
            config.style.width = "20%";
            conteudo.style.width = "80%";
        }
    }
}

document.addEventListener('keydown', (e)=>{
    if(e.key === "Escape"){
        abrir();
    }
});

abrirConfig.addEventListener("click", ()=>{
    abrir();
})

function buttonClick(bt,cl,h5,textInit,textEnd){
    if(cl.style.marginLeft === "80px"){
        bt.style.backgroundColor = "#2c2c2c";
        cl.style.marginLeft = "0";
        h5.innerText = textInit;
        h5.style.color = "#f5f5f5";
    }else{
        bt.style.backgroundColor = "#c0c0c0";
        cl.style.marginLeft = "80px";
        h5.innerText = textEnd;
        h5.style.color = "#000000"
    }
}

button.forEach((item,index)=>{

    item.addEventListener('click', ()=>{
        if(index === 0){
            buttonClick(item, circle[index], textBT[index], "Padrão","Outro");
            const selecCor = document.getElementById("selecCor");
            const corConteudo = document.getElementById("corConteudo");
            const corConfig = document.getElementById("corConfig");
            const corTexto = document.getElementById("corTexto");

            if(circle[index].style.marginLeft === "80px"){
                selecCor.style.display = "flex";

                corConteudo.addEventListener('input', ()=>{
                    conteudo.style.backgroundColor = corConteudo.value;
                });

                corConfig.addEventListener('input', ()=>{
                    config.style.backgroundColor = corConfig.value;
                });

                corTexto.addEventListener('input', ()=>{
                    texto.style.color = corTexto.value;
                });

                const preConteudo = document.querySelectorAll(".preConteudo");
                const preConfig = document.querySelectorAll(".preConfig");
                const preTexto = document.querySelectorAll(".preTexto");

                preConteudo.forEach((el,index)=>{

                    function rgbParaHex(rgb){
                        let regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
                        let matches = rgb.match(regex);

                        let r = parseInt(matches[1]);
                        let g = parseInt(matches[2]);
                        let b = parseInt(matches[3]);

                        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
                    }

                    el.addEventListener('click',()=>{
                        conteudo.style.backgroundColor = el.style.backgroundColor;
                        config.style.backgroundColor = preConfig[index].style.backgroundColor;
                        texto.style.color = preTexto[index].style.backgroundColor;

                        corConfig.value = rgbParaHex(preConfig[index].style.backgroundColor);
                        corConteudo.value = rgbParaHex(el.style.backgroundColor);
                        corTexto.value = rgbParaHex(preTexto[index].style.backgroundColor);

                    });
                });

            }else{
                selecCor.style.display = "none";
                corConfig.value = "#2c2c2c";
                corConteudo.value = "#8b0000";
                corTexto.value = "#F5F5F5";
                config.style.backgroundColor = "#8b0000";
                conteudo.style.backgroundColor = "#2c2c2c";
                texto.style.color = "#F5F5F5";
            }
        }

        const buttonsR = document.querySelectorAll(".addR");

        if(index === 1){
            buttonClick(item, circle[index], textBT[index], "Lorem","Chat");

            const Lorem = document.querySelectorAll(".lorem");
            const Chat = document.querySelectorAll(".chat");

            texto.style.animationName = "Troca";

            buttonsR.forEach((itemR)=>{
                itemR.classList.add("reload");
            });

            setTimeout(()=>{
                if(circle[index].style.marginLeft === "80px"){
                    Lorem.forEach((item)=>{
                        item.style.display = "none";
                    });

                    Chat.forEach((item)=>{
                        item.style.display = "block";
                    });
                }else{
                    Lorem.forEach((item)=>{
                        item.style.display = "block";
                    });

                    Chat.forEach((item)=>{
                        item.style.display = "none";
                    });
                }
            }, 2000);

            setTimeout(()=>{
                texto.style.animationName = "";
                buttonsR.forEach((itemR)=>{
                    itemR.classList.remove("reload");
                });
            }, 3000);

        }

        if(index === 2){
            buttonClick(item, circle[index], textBT[index], "Com","Sem");

            buttonsR.forEach((itemR)=>{
                itemR.classList.add("reload");
            });

            if(circle[index].style.marginLeft === "80px"){
                texto.style.animationName = "remover";

                setTimeout(()=>{
                    texto.style.display = "none";
                }, 3000);
            }else{
                texto.style.animationName = "adicionar";
                texto.style.display = "block";
            }

            setTimeout(()=>{
                texto.style.animationName = "";
                buttonsR.forEach((itemR)=>{
                    itemR.classList.remove("reload");
                });
            }, 3000);
        }
    });
});