const getSfw = document.getElementById('sfw');
const getNsfw = document.getElementById('nsfw');
const spinner = document.getElementById('spinner');
const imgbtn = document.getElementById('waifu-img');

spinner.classList.add('d-none')
getSfw.addEventListener('click', function(){
    const apisfw = 'https://api.waifu.pics/sfw/cry';
    spinner.classList.remove('d-none');
    imgbtn.classList.add('d-none');
    fetch(apisfw)
        .then(response => response.json())
        .then(waifuImage => {
            console.log(waifuImage);

            const imgUrl = waifuImage.files;
            document.getElementById('waifu-img').src = `${ waifuImage.url }`;
        })
        .finally(() =>{
            spinner.classList.add('d-none')
        })
})

getNsfw.addEventListener('click', function(){
    const apinsfw = 'https://api.waifu.pics/nsfw/waifu';
    fetch(apinsfw)
        .then(response => response.json())
        .then(waifuImage => {
            console.log(waifuImage);

            const imgUrl = waifuImage.files;
            document.getElementById('waifu-img').src = `${ waifuImage.url }`;
        })
})