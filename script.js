function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
}

<<<<<<< HEAD
if (screen.width <= 650) {
=======
if (screen.width <= 720) {
>>>>>>> 75d146fa4b7ee1de6bc7601ba26c81cbac2c1b66
    var now = new Date();
    var dateStr = now;
    var day = getDayName(dateStr, "en-US");
    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var table = document.getElementById("phone");

            for (var i = 0; i < data.days.length; i++) {
                if (data.days[i].day == day) {
                    console.log(i);
                    table.innerHTML +=
                        '<div class="day" id="' +
                        day +
                        '"><div class="dayname">' +
                        day +
                        "</div></div>";
                    var dayname = document.getElementById(day);
                    for (var j = 0; j < data.days[i].subjects.length; j++) {
                        dayname.innerHTML +=
                            '<a href="' +
                            data.days[i].subjects[j].link +
                            '" target="_blank"><div class="period"><h2>' +
                            data.days[i].subjects[j].name +
                            "<br>" +
                            data.days[i].subjects[j].time +
                            "</h2></div></a>";
                    }
                    break;
                }
            }
        });
}

fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var table = document.getElementById("content");
        for (var i = 0; i < data.days.length; i++) {
            var dayname = data.days[i].day;

            table.innerHTML +=
                '<div class="day" id="' +
                dayname +
                '"><div class="dayname">' +
                dayname +
                "</div></div>";

            var day = document.getElementById(dayname);
            for (var j = 0; j < data.days[i].subjects.length; j++) {
                day.innerHTML +=
<<<<<<< HEAD
                    '<a href="' +
                    data.days[i].subjects[j].link +
                    '" target="_blank"><div class="period"><h2>' +
                    data.days[i].subjects[j].name +
                    "<br>" +
                    data.days[i].subjects[j].time +
                    "</h2></div></a>";
=======
                    data.days[i].subjects[j].link +
                    '" <div class="period"><h2>' +
                    data.days[i].subjects[j].name +
                    "</h2><p>";
                data.days[i].subjects[j].time + "</p><h3></h3>";
                ("</div>");
>>>>>>> 75d146fa4b7ee1de6bc7601ba26c81cbac2c1b66
            }
        }
    });
