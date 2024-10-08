const $ = function(id) 
{
    return document.getElementById(id);
}

let skills = [["JavaScript", "javascript.png"], ["HTML", "html.png"], ["CSS", "css.png"], ["C#", "csharp.png"], ["Python", "python.png"], ["GitHub", "github.png"],
 ["Trello", null], ["REST API", "rest.png"], ["ReactJS", "react.png"], ["Agile Development", null], ["MySQL", null]];
$(document).ready(function() {
    for(entry in skills) {
        setTimeout(function() {
            if(entry[1] !== null) {
                $("skills_list").innerHTML += "<p class='skill-item'>" + entry[0] + "<img class='skill-image' src='" + entry[1] +"></p>" 
            } else {
                $("skills_list").innerHTML += "<p class='skill-item'>" + entry[0] + "</p>"
            }
        }, 500);
    }
})