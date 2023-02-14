{
    function calenderyear() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('dateyear').innerText = year;
}
calenderyear();
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