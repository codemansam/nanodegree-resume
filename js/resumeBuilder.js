var bio = {
    "name": "Samuel Alexander",
    "role": "Web Developer",
    "contacts": {
        "mob": "022 656 7919",
        "email": "sam@stacked.co.nz",
        "github": "https://github.com/codemansam",
        "location": "Auckland, NZ"
    },
    "pic": "images/fry.jpg",
    "welcomeMessage": "Hi there!",
    "skills": ["awesomeness", "studying", "manualism", "twaddling"]
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

var work = {
    "jobs": [
        {
            "employer": "Self-employed",
            "title": "'Boss'",
            "dates": "2009 - 2015",
            "description": "Lawn mowing contractor"
        },
        {
            "employer": "NZ Post Inc",
            "title": "'Postie'",
            "dates": "2004 - 2009",
            "description": "Responsible for sorting and delivering residential mail"
        }
    ]
};
// Name and Role
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

//Contact info

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mob);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedPic  = HTMLbioPic.replace("%data%", bio.pic);
    $("#header").append(formattedPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkill);
    }


// Work Experience
    for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $("#main").append(formattedDescription);
}
