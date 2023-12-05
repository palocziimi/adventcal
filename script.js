var actdate = document.getElementById("actdate");
var daysuntil = document.getElementById("daysuntil");
var calendar = document.querySelector("calendar");

var d = new Date();

actdate.innerText = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
daysuntil.innerText = `${24 - d.getDate()}`;

for (let i = 0; i < 24; i++) {
    let newday = document.createElement("div");
    newday.classList.add("day");
    newday.innerText = i+1;
    document.querySelector(".calendar").appendChild(newday);
}

const calendarClick = (event) => {
    if (parseInt(event.target.innerText) > d.getDate()) {
        alert("Még nem tartunk ott :(");
    }
    else {
        alert(`Boldog december ${d.getDate()}. napját! Még ${24 - d.getDate()} nap!`);

    }
}

document.querySelectorAll(".day").forEach(itemday => {
    itemday.addEventListener("click", (e) => calendarClick(e));
});
