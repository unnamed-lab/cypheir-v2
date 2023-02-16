{
    function calenderyear() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('dateyear').innerText = year;
}
calenderyear();
}

{
    function imageTimeChange() {
        let date = new Date();
        let time = date.getHours();
        let tempImg = document.getElementById('tempImg')

        if (time <= 19) {
            tempImg.innerHTML = `<img src="./assets/img/browser-white.png" alt="">`
        }
        else {
            tempImg.innerHTML = `<img src="./assets/img/browser-dark.png" alt="">`
        }
    }

    imageTimeChange();
}

{
    window.onscroll = function() {pageScroll()};

    function pageScroll() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 300) {
            let arrowBtn = document.getElementById('fwdbtn');
            arrowBtn.classList.add('disable')
        }
    }
}


{
    for (let i = 1; i < 4; i++) {
    let serviceItem = document.getElementById(`service-info-${i}`);
    serviceItem.onmouseover = function() {showDetail(serviceItem)};
    serviceItem.onmouseout = function() {showDetail(serviceItem)};
    }
    function showDetail(item) {
        console.log("Item Hover!");
        console.log(item)
        item.classList.toggle('inactive');
    }
}