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
            "title": "Fusion Power",
            "dates": "2016",
            "description": "Harness the power of the stars!",
            "images": [
            "images/fusion1.jpg",
            "images/fusion2.jpg"
            ]
        },
        {
            "title": "Hyperloop",
            "dates": "2014",
            "description": "Cheap, reliable, super quick travel!",
            "images": [
            "images/hyperloop1.jpg",
            "images/hyperloop2.jpg"
            ]
        }

    ]
};

var work = {
    "jobs": [
        {
            "employer": "North Shore Lawns",
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

// Skills
$("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkill);
}
var displayWorkExperience = function() {

    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWorkExperience();

//projects title dates description images
var displayProjects = function() {
    for (var project = 0; project < projects.projects.length; project++) {
         $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            //console.log("projects.projects[project].images.length " + projects.projects[project].images.length);
            for (var image = 0; image < projects.projects[project].images.length; image++) {
            //console.log("Checks for loop and image = " + image);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            console.log("formattedProjectImage is now " + formattedProjectImage);
            $(".project-entry:last").append(formattedProjectImage);
            }
        }

    }
}
displayProjects();
//project images
//schools
//online courses

// DOn't forget encapsulation before you hand in!


