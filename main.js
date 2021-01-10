/*var radio1 = document.getElementById('radio1');
var radio2  = document.getElementById('radio2');
var radio3 = document.getElementById('radio3');

var submit = document.getElementById('input');
submit.addEventListener("click",enviar);

function enviar() {
    var fundo = document.getElementById('body');

    if (radio1.checked == true) {
        document.body.style.backgroundImage = "url('https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_9oHhigX5s3P0.jpg.jpeg')";       
         console.log('preto')

    }

    if (radio2.checked == true) {
        document.body.style.backgroundImage = "url('img_tree.png')";       
        console.log('preto')

    }

    if (radio3.checked == true) {

        document.body.style.backgroundImage = "url('img_tree.png')";       
        console.log('preto')

    }
}*/

function enviar(fundo) {
switch (fundo) {
    case 'naruto':document.body.style.background = "url('https://i.pinimg.com/originals/bd/5a/7c/bd5a7c7c8750964859251a8f233ac83d.jpg')";
    break

    case 'sasuke':document.body.style.background = "url('https://2.bp.blogspot.com/-4gl184khc8U/WRspEYV0enI/AAAAAAAABVk/6WGz_pIYMOAm_K0OvJ7yEtOoDYWZh1pGQCLcB/s1920/1sasuke.jpg')";
    break

    case 'hinata':document.body.style.background = "url('https://www.osmais.com/wallpapers/201410/hinata-hyuuga-wallpaper.jpg') no-repeat ";
    break

    



}
}