// uso do if sem {}
function teste1(num) {
    if(num > 7)
        console.log(num) // apenas este comando estara associado ao if. JS nao se baseia em identacao. quem se baseia em identacao e o python! Vc pode colocar seu codigo todo baguncado, desde que esteja separado por ;
        console.log('Final')
}

teste1(6.9)
teste1(7.1)

// equivalente a:
// function teste1(num) {
//     if(num > 7)
//         console.log(num) // se houver apenas um comando a estrutura de bloco e opcional
    
//     console.log('Final')
// }

function teste2(num) {
    if(num > 7)
       ; // sentenca de codigo vazia: nao faz nada. <-------------
         // cuidado com o ';', nao usar nas estruturas de controle
       
    {   
    console.log(num) // nao tem nenhum filtro para execucao deste bloco de codigo, sera executado para qualquer 'num'
    }
}

teste2(6)
teste2(8)