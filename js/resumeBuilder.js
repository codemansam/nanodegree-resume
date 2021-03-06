/**
 * @description Stores biographic information.
 */
var bio = {
    "name": "Samuel Alexander",
    "role": "Web Developer",
    "contacts": {
        "mobile": "022 656 7919",
        "email": "sam@stacked.co.nz",
        "github": "https://github.com/codemansam",
        "twitter": "@placeholder",
        "location": "6 Sispara Place, Auckland, NZ"
    },
    "welcomeMessage": "Hello there!  Welcome to my resume!",
    "skills": ["Impressions", "Studying", "Manualism", "Twaddling"],
    "biopic": "images/kitty.jpg",

    /**
     * @description This function takes bio information, applies helper.js formatting and
     *  attaches it to the relevant HTML section.
     */
    display: function() {

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var idStrings = ["#topContacts", "#footerContacts"];
        for (var i = 0, id; i < idStrings.length; i++) {
            id = idStrings[i];

            $(id).append(formattedMobile);
            $(id).append(formattedEmail);
            $(id).append(formattedGithub);
            $(id).append(formattedTwitter);
            $(id).append(formattedLocation);
        }



        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(formattedPic);



        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills-h3").append(formattedSkill);
        }
    }
};

/**
 * @description Stores an array of tertiary education information and online courses.
 */
var education = {
    "schools": [{
        "name": "Auckland University",
        "location": "22 Princes Street, Auckland, NZ",
        "degree": "BSc",
        "majors": ["Geography (Physical)"],
        "dates": "2002",
        "url": "https://www.auckland.ac.nz/en.html"

    }, {
        "name": "Auckland University",
        "location": "22 Princes Street, Auckland, NZ",
        "degree": "BA",
        "majors": ["Philosophy (Ethics)"],
        "dates": "2002",
        "url": "https://www.auckland.ac.nz/en.html"
    }],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud804"
    }],

    /**
     * @function Takes education information, applies formatting from helper.js and
     * attaches it to the relevant HTML section.
     */
    display: function() {

        $("#education").append(HTMLschoolStart);
        if (education.schools.length > 0) {

            for (var school = 0; school < education.schools.length; school++) {

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $(".education-entry:last").append(formattedSchoolName + " " + formattedDegree);

                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedDates);

                var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedCity);

                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        $("#online-education").append(HTMLonlineClasses);
        if (education.onlineCourses.length > 0) {

            for (var course = 0; course < education.onlineCourses.length; course++) {

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
                $(".online-education-entry:last").append(formattedOnlineTitleAndSchool);

                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $(".online-education-entry:last").append(formattedOnlineDates);

                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                $(".online-education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

/**
 * @description Stores an array of jobs with the corresponding work details.
 */
var work = {
    "jobs": [{
        "employer": "North Shore Lawns",
        "title": "'Boss'",
        "location": "6 Sispara Place, Beach Haven, Auckland, NZ",
        "dates": "2009 - 2015",
        "description": "Lawn mowing contractor."
    }, {
        "employer": "NZ Post Inc",
        "title": "'Postie'",
        "location": "76 Porana Rd, Hillcrest, Auckland, NZ",
        "dates": "2004 - 2009",
        "description": "Responsible for sorting and delivering residential mail."
    }],

    /**
     * @description This function takes work history information, applies formatting from helper.js and
     * attaches it to the relevant HTML section.
     */
    display: function() {
        if (work.jobs.length > 0) {
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
    }
};
/**
 * @description Stores an array of projects with the corresponding information.
 */
var projects = {
    "projects": [{
        "title": "Fusion Power",
        "dates": "2016",
        "description": "Harness the power of the stars?  No problem, Sammy's solved it.",
        "images": ["images/fusion3.jpg", "images/fusion1.jpg"]
    }, {
        "title": "Hyperloop",
        "dates": "2014",
        "description": "Cheap, reliable, super quick travel? Sorted!",
        "images": ["images/hyperloop3.jpg", "images/hyperloop2.jpg"]
    }],

    /**
     * @description This function takes project information, applies formatting from helper.js and
     * attaches it to the relevant HTML section.
     */
    display: function() {
        if (projects.projects.length > 0) {
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
    }
};

/**
 * @description The display methods are called here and the information is processed.
 */
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);


//Google Maps API: "Browser Key 1": "AIzaSyAvoT7YGnNfHpMCDKzcBd31jO9CNeO5qws"