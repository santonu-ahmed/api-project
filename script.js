const getSfw = document.getElementById('sfw');
const getNsfw = document.getElementById('nsfw');

getSfw.addEventListener('click', function(){
    const apisfw = 'https://api.waifu.pics/sfw/cry';
    fetch(apisfw)
        .then(response => response.json())
        .then(waifuImage => {
            console.log(waifuImage);

            const imgUrl = waifuImage.files;
            document.getElementById('waifu-img').src = `${ waifuImage.url }`;
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