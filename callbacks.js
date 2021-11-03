


const sum = (a, b, cb) => {
    const value = a + b 
    cb(value)
}

const multiply = (a, b, cb) => {
    const value = a * b 
    cb(value)
}

const callbackFuntion = (arg) => {
    console.log(`callback funciton:`, arg)
}

sum(1,2, callbackFuntion)


const loadImage = (url) => new Promise((resolve, reject) => {
    
    const img = new Image();
    console.time('imgload')
    img.addEventListener('load', () => {
        console.timeEnd('imgload')
        resolve(img)
    });
    img.addEventListener('error', (err) => reject(err));
    img.src = url;    
   
});



  
async function loadImageAsync () {

    const img = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steiner_um_1905.jpg/440px-Steiner_um_1905.jpg")
    const imgTag = document.createElement('img')
    imgTag.src = img.src
    document.body.appendChild(imgTag)
}

loadImageAsync()

/*
loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steiner_um_1905.jpg/440px-Steiner_um_1905.jpg")
    .then(img => {
        
        console.log(`w: ${img.width} | h: ${img.height}`)                       

    })
    .catch(err => console.error('catch!!!', err));

*/