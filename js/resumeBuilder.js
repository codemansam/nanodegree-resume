var name = "Samuel Alexander";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
}
$("#main").append(bio.skills);

var work = {};

work.position = "Lawn Mowing Contractor";
work.employer = "Self";
work.years = "6";
work.city ="Auckland";

var education = {};
education["name"] = "Auckland University"
education["years"] = "1998-2002";
education["city"] = "Auckland, NZ";

$("#main").append(work["position"]);
$("#main").append(education.name);

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
    ]
};