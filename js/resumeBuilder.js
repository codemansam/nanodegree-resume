var bio = {
    "name": "Samuel Alexander",
    "role": "Web Developer",
    "contacts": {
        "mob": "022 656 7919",
        "email": "same@stacked.co.nz",
        "github": "https://github.com/codemansam",
        "location": "Auckland, NZ"
    },
    "bioPic": "images.fry.jpg",
    "welcomeMessage": "Hi there!",
    "skills": ["awesomeness", "studying", "manualism", "twaddling"]
};

var work = {
    "jobs": [
        {
            "employer": "self",
            "title": "Boss",
            "dates": "2009 - 2015",
            "description": "Lawn mowing contractor."
        },
        {
            "employer": "NZ Post Inc",
            "title": "Postie",
            "dates": "2004 - 2009",
            "description": "Responsible for sorting and delivering residential mail"
        }
    ]
};

var education = {
    "schools": [
    {
        "name": "Auckland University",
        "city": "Auckland, NZ",
        "degree": "BSc",
        "major": "Geography"
    },
    {
        "name": "Auckland University",
        "city": "Auckland, NZ",
        "degree": "Ba",
        "major": "Philosopy"
    }
    ],
    "onlineCourses": [
        {
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "add text here.",
            "images": [
            "images/image1.jpg",
            "images/image2.jpg"
            ]
        }
    ]
};

/**if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}
*/
var name = "Samuel Alexander";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/**for (job in work.jobs) {
    $("#workExperience").append(HTMLWorkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
}
*/