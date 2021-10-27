
const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'extension')
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = 9999;

const sizes = [width, height] = [window.innerWidth, window.innerHeight]
const center = sizes.map(s => s * .5)
const side = Math.min(...sizes)
canvas.width = sizes[0]
canvas.height = sizes[1]

const ctx = canvas.getContext('2d')

let starttime = null

const render = (time) => {

    starttime = starttime || time

    requestAnimationFrame(render)

    ctx.clearRect(0, 0, ...sizes)

    const radius = side * .5/(parseInt(time - starttime)/1000 + 1)

    
    ctx.beginPath();
    ctx.arc(...center, radius, 0, 2 * Math.PI);
    ctx.rect(width, 0, -width, height);
    ctx.fill();




}

const goasleep = () => {


    document.body.appendChild(canvas)

    render()
}


chrome.runtime.onMessage.addListener(
    function(request, _, sendResponse) {
      
        if(request.standByIn) {
            const sec = request.standByIn
            setTimeout(goasleep, sec * 1000)

        }
        
        sendResponse({farewell: "goodbye"});
    }
  );
  