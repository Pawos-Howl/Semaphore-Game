const image = document.getElementById("immaaaggggeeeee")

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getImageFile(letter){
    if(letter == " "){return "letters/_space.png"}
    if(letter == "none"){return "letters/_none.png"}
    return "letters/"+letter.toUpperCase()+".png"
}

async function play(str, delay){
    // repitition = 1; // this is to not mess up the addition later in the code segment
    while (str.length > 0) {
        AAAA = getImageFile(str[0]);
        // setTimeout(()=>image.src=AAAA,delay*repitition); // consider this a task sceduler, for furture use
        // repitition++;
        image.src=AAAA;
        await sleep(delay)
        str=str.substring(1);
    }
    // done, so sets to none!
    image.src=getImageFile("none");
    await sleep(delay);
}