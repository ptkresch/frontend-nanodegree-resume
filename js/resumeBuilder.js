
  	var bio = {
  		name : "Preston Kresch",
	  	role : "Web Developer",
	  	contacts : {
	  		mobile : "111-111-1111 ",
	  		email : "ptkresch@gmail.com ",
	  		github : "ptkresch ",
	  		location : "Santa Barbara "
	  	},
	  	welcomeMessage : "ah suhh dude",
  		skills : ["Tomato Thrower", "Monkey Comber", "Cereal Connoisseur"],
  		biopic : "images/fry.jpg",
  		display : function(){
  			var formattedName = HTMLheaderName.replace("%data%", bio.name);
  			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").prepend(formattedRole);
  			$("#header").prepend(formattedName);
  			$("#header").prepend(formattedbiopic);
  			$("#topContacts").append(formattedMobile);
  			$("#topContacts").append(formattedEmail);
  			$("#topContacts").append(formattedGithub);
  			$("#topContacts").append(formattedLocation);
  			$("#footerContacts").append(formattedMobile);
  			$("#footerContacts").append(formattedEmail);
  			$("#footerContacts").append(formattedGithub);
  			$("#footerContacts").append(formattedLocation);
  			$("#header").append(formattedWelcome);
			$("#header").append(HTMLskillsStart);
  			for (var i = 0; i < bio.skills.length; i++){
  				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  				$("#skills").append(formattedSkill);
  			}
  		}
  	};

  	bio.display();

  	var education = {
	  	schools: [
	  	  	{
	  	  		name : "UC Santa Barbara",
	  	  		location : "Goleta, CA",
	  	  		degree : "Bachelors of Science",
	  	  		majors : ["Physics"],
	  	  		dates : "2013 - 2015",
	  	  		url : "http://www.ucsb.edu/"
	  	  	},
	  	  	
	  	  	{
	  	  		name : "Santa Barbara City College",
	  	  		location : "Santa Barbara, CA",
	  	  		degree : "Bachelors of Science",
	  	  		majors : ["Physics"],
	  	  		dates : "2012 - 2013",
	  	  		url : "http://www.sbcc.edu/"
	  	  	}
	  	],

	  	onlineCourses : [
	  		{
	  			title : "Front-End Web Developer",
	  			school : "Udacity",
	  			date : "Nov 2015 - ",
	  			url : "https://www.udacity.com/"
	  		}
	  	],

	  	display : function(){
	  		$("#education").append(HTMLschoolStart);

	  		for (school in education.schools){
	  			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	  			$("#education").append(formattedName);
	  			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	  			$("#education").append(formattedDegree);
	  			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	  			$("#education").append(formattedDates);
	  			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	  			$("#education").append(formattedLocation);
	  			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
	  			$("#education").append(formattedMajor);
	  		}

	  		$("#education").append(HTMLonlineClasses);

	  		for (course in education.onlineCourses){
	  			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	  			$("#education").append(formattedTitle);
	  			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	  			$("#education").append(formattedSchool);
	  			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
	  			$("#education").append(formattedDates);
	  			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	  			$("#education").append(formattedURL);
	  		}
	  	}
	};

	education.display();


  	var work = {
  		jobs : [
  			{
  				employer : "Chess Society of Randomness",
  				title : "Quantum Chess Player",
  				location : "Concord, CA",
  				dates : "January 2016 - ",
  				description : "Description goes here"
  			}
  		],

  		display : function(){
  			$("#workExperience").append(HTMLworkStart);
  			for(job in work.jobs){
	  			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  			var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  			$("#workExperience").append(formattedEmployerTitle);
	  			$("#workExperience").append(formattedLocation);
	  			$("#workExperience").append(formattedDates);
	  			$("#workExperience").append(formattedDescription);
  			}
 		}
  	};

 	work.display();

 	$(document).click(function(loc) {
 		var x = loc.pageX;
 		var y = loc.pageY;

 		logClicks(x,y);

 	});

 	function locationizer(work_obj){
 		var locationArray = [];
 		for (job in work_obj.jobs){
 			var newLocation = work_obj.jobs[job].location;
 			locationArray.push(newLocation);
 			return locationArray;

 		}
 	}

 	$("#main").append("internationalizeButton");
 	function inName(name){
 		var namearray = name.split(" ");
 		lastname = namearray[1];
 		uppercaselast = lastname.toUpperCase();
 		newname = namearray[0] + " " + uppercaselast;
 		return newname
 	}


  	var projects = {
  		projects: [
  			{
  				title : "Portfolio",
  				dates : "Nov. 2015",
  				description : "See my Portfolio page of all my work!",
  				images : ["imageurl"]
  			},

  			{
  				title : "Frogger Game!",
  				dates : "Mar. 2016",
  				description : "See my frogger clone!",
  				images : ["imageurl"]
  			}
  		]
  	};

  	projects.display = function() {
  		for (project in projects.projects){
  			$("#projects").append(HTMLprojectStart);

  			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  			$(".project-entry:last").append(formattedDates);

  			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  			$(".project-entry:last").append(formattedDescription);

  			if (projects.projects[project].images.length > 0) {
  				for (image in projects.projects[project].images) {
  					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
  					$(".project-entry:last").append(formattedImage);
  				}
  			}

  		}
  	}

  	projects.display();

  	$("#mapDiv").append(googleMap);