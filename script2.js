const newImagePath = localStorage.getItem('newImagePath');
const data= localStorage.getItem('data');
const parseddata=JSON.parse(data)

const imageToUpdate = document.getElementById('imageToUpdate');
const titleToUpdate = document.getElementById('heading');
const rateToUpdate = document.getElementById('rate');
const descToUpdate = document.getElementById('desc');
imageToUpdate.src = newImagePath;
titleToUpdate.innerHTML=parseddata.title;
rateToUpdate.innerHTML=parseddata.rate;
descToUpdate.innerHTML=parseddata.desc;