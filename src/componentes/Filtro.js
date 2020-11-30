const product = window.document.getElementsByClassName("produto");



// seleciona os produtos por categoria
export function categ(categoria){
    console.log('oi')
    for(let i=0; i<product.length; i++){
        if(categoria === product[i].id){
            product[i].style = "display:block";
        } else{
            product[i].style = "display:none"; 
        }
    }
};

// exibe todos os produtos novamente
export function todos(){
    console.log('olá')
    for(let i=0; i<product.length; i++){
        product[i].style = "display:block";
    }
};
