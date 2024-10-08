//$(document).ready(function() {
    let skills = [["JavaScript", "javascript.png"], ["HTML", "html.png"], ["CSS", "css.png"], ["C#", "csharp.png"], ["Python", "python.png"], ["GitHub", "github.png"],
 ["Trello", null], ["REST API", "rest.png"], ["ReactJS", "react.png"], ["Agile Development", null], ["MySQL", null]];

    for(entry in skills) {
        console.log(skills[entry]);
        if(entry[1] !== null) {
            $("#skills_list").append("<p class='skill-item'>" + skills[entry][0] + "<img class='skill-image' src='" + skills[entry][1] +"></p>");
        } else {
            $("#skills_list").append("<p class='skill-item'>" + skills[entry][0] + "</p>");
        }
    }
//})