import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });

window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


