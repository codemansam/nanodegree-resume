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
        "major": "Geography",
        "date": "1998-2002"
    },
    {
        "name": "Auckland University",
        "city": "Auckland, NZ",
        "degree": "Ba",
        "major": "Philosopy",
        "date": "1998-2002"
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
            "description": "Harness the power of the stars?  No problem, Sammy's solved it.",
            "images": [
            "images/fusion3.jpg",
            "images/fusion1.jpg"
            ]
        },
        {
            "title": "Hyperloop",
            "dates": "2014",
            "description": "Cheap, reliable, super quick travel? Sorted!",
            "images": [
            "images/hyperloop3.jpg",
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
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic  = HTMLbioPic.replace("%data%", bio.pic);

    $("#header").prepend(formattedPic);
    $("#header").prepend(formattedWelcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mob);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var idStrings = ["#topContacts", "#footerContacts"];
    for (var i = 0, id; i < idStrings.length; i++) {
        id = idStrings[i];

        $(id).append(formattedLocation);
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedGithub);
    }
}
bio.display();

// Skills
$("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkill);
}
var displayWorkExperience = function() {
    //if
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
    //if
    for (var project = 0; project < projects.projects.length; project++) {
         $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
            }
        }

    }
}
displayProjects();

var displayEducation = function() {
    //if
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        $(".education-entry:last").append(formattedSchoolName + " " + formattedDegree);


        //$(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $(".education-entry:last").append(formattedDates);

        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
        }
}
//university + degree (BSc or Ba)
//dates
//Major

displayEducation();

//online courses

// DOn't forget encapsulation before you hand in! everything within an if whatever is > 0 etc


