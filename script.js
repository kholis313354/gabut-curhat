let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "mp32.weba");
     x.setAttribute("autoplay","autoplay");


let i =0
let str = 'Bro bayar hutang ya....inget hutang itu wajib di bayar ya...kalau hutang yang tidak wajib di bayar itu hutang cinta ku padamu yang tidak terbalaskan itu tidak apa tapi aku tetep cinta kok wkwwkwkwk ngapain sih bucin bet gua,gua lagi banyak masalah pekerjaan,keluarga,kuliah kaya salah kampus(roadmap pembelajaran kampus nya jadul pengen pindah kampus atau kursus di coursnet di jakarta karna di kampus itu hanya kejar title sarjana tapi banyak tidak bisa ngoding),insyallah sampai semester 2 akan di pikirkan kembali pindah kampus atau tetap di HUI,peraturan nya makin lama tidak jelas'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190); 
}, 5500);  

function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})