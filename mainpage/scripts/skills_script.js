$(document).ready(function() {
    let skills = [["JavaScript", "images/javascript.png"], ["HTML", "images/html.png"], ["CSS", "images/css.png"], ["C#", "images/csharp.png"], 
    ["Python", "images/python.png"], ["GitHub", "images/github.png"], ["Trello", null], ["REST API", "images/rest.png"], ["ReactJS", "images/react.png"], 
    ["Agile Development", null], ["MySQL", null]];

    for(entry in skills) {
        console.log(skills[entry][1]);
        if(skills[entry][1] !== null) {
            $("#skills_list").append("<p class='skill-item'>" + skills[entry][0] + "<img class='skill-image' src='" + skills[entry][1] +"></p>");
        } else {
            $("#skills_list").append("<p class='skill-item'>" + skills[entry][0] + "</p>");
        }
    }
})