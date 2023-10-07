const prod1= document.getElementById('cultivator');
const prod2= document.getElementById('disk');
const prod3= document.getElementById('rotavator');
const prod4= document.getElementById('balram');
const prod5= document.getElementById('trailer');
//const tag=document.queryselector('.servicedesch2')
const updateImageDiv = document.getElementById('updateImageDiv');

let data={prod1:{title:"Disc Plough",rate:"800/Hr",desc:"This tool is used to plough flat feilds to make <br> the land smooth for tilling process"},
prod2:{title:"Cultivator",rate:"900/Hr",desc:"This tool is used when you want to sow seeds or to plant plants"},
prod3:{title:"Roatavtor",rate:"1500/Hr",desc:"This tool is used to smoothen the soil making it a perfect fit before cultivator"},
prod4:{title:"Balram",rate:"900/Hr",desc:"This tool is used when you want to sow seeds <br>or to plant plants with wide columns"},
prod5:{title:"Trailer",rate:"600/Hr", desc:"To carry load Ex : Wood, MUD , Maniure"}};



prod1.addEventListener("click",function(){
    
        const newImagePath = './resources/cultivator.webp';
        localStorage.setItem('newImagePath', newImagePath);
        localStorage.setItem('data',JSON.stringify(data.prod2));
        window.location.href="service.html";
        //window.open('service.html', '_blank');

    })
prod2.addEventListener("click",function(){
    
        const newImagePath = './resources/disc.webp';
        localStorage.setItem('newImagePath', newImagePath);
        localStorage.setItem('data',JSON.stringify(data.prod1));
        window.location.href="service.html"
        //window.open('service.html', '_blank');

    })
prod3.addEventListener("click",function(){
    
        const newImagePath = './resources/rotavator.webp';
        localStorage.setItem('newImagePath', newImagePath);
        localStorage.setItem('data',JSON.stringify(data.prod3));
        window.location.href="service.html"
        //window.open('service.html', '_blank');

    })
prod4.addEventListener("click",function(){
    
        const newImagePath = './resources/7cultivator.webp';
        localStorage.setItem('newImagePath', newImagePath);
        localStorage.setItem('data',JSON.stringify(data.prod4));
        window.location.href="service.html"
        //window.open('service.html', '_blank');

    })
prod5.addEventListener("click",function(){
    
        const newImagePath = './resources/trailer.jpg';
        localStorage.setItem('newImagePath', newImagePath);
        localStorage.setItem('data',JSON.stringify(data.prod5));
        window.location.href="service.html"
        //window.open('service.html', '_blank');

    })