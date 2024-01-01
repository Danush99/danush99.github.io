// projects.js

const Techs = {
	react: "reactjs-icon.svg",
	jira: "atlassian_jira-icon.svg",
	dart: "dartlang-icon.svg",
	docker: "docker-icon.svg",
	firebase: "firebase-icon.svg",
	flutter: "flutterio-icon.svg",
	bootstrap: "getbootstrap-icon.svg",
	git: "git-scm-icon.svg",
	java: "java-icon.svg",
	mui: "icons8-material-ui.svg",
	mongoDB: "mongodb-ar21.svg",
	mysql: "mysql-icon.svg",
	nodeJS: "nodejs-horizontal.svg",
	openAPI: "openapis-icon.svg",
	php: "php-icon.svg",
	python: "python-icon.svg",
	ts: "typescriptlang-icon.svg",
	pytorch: "pytorch-icon.svg",
	fastAPI: "fastapi-1.svg",
	tensorflow: "tensorflow-icon.svg",
	openAI: "openAI.svg",  //not working
	symfony: "symfony-icon.svg", 
	laravel: "laravel-icon.svg", 
	openCV: "opencv-icon.svg",
	html: "w3_html5-icon.svg",
	js: "javascript-icon.svg",
	django: "djangoproject-icon.svg",
	rea: "reactjs.svg",
}

const projects = [
	{
		"title": "Sri-Doc",
		"imageSrc": "images/projects/sridoc.png",
		"description": "A comprehensive framework for extracting information from Sinhala documents such as forms, while preserving privacy of users to make document digitization workflows efficient.",
		"techs": [Techs.tensorflow, Techs.pytorch, Techs.react, Techs.python, Techs.ts, Techs.mongoDB]
	},
	{
		"title": "AMC flash-card mobile app",
		"imageSrc": "images/projects/amc.png",
		"description": "This application offers flashcards designed to aid Australian medical students preparing for the Australian Medical Council exam. Users can create bookmarks, customize their own study cards, and access a preset collection of study card packs.",
		"techs": [Techs.flutter, Techs.dart, Techs.openAPI]
	},
	{
		"title": "Work load management system (WAMS)",
		"imageSrc": "images/projects/wams.png",
		"description": "The main objective of WAMS was to provide a modeling platform for transparent planning, ongoing monitoring, and management of balanced Academic Workload delivery in accordance with agreed frameworks.",
		"techs": [Techs.ts, Techs.react, Techs.docker, Techs.php, Techs.openAPI,]
	},
	{
		"title": "Salon booking system",
		"imageSrc": "images/projects/salonbooking.png",
		"description": "This website facilitates online salon bookings in Australia. During that period, every intern at the company contributed to building this mock project.",
		"techs": [Techs.react, Techs.firebase, Techs.mongoDB, Techs.nodeJS]
	},
	{
		"title": "SPA booking system",
		"imageSrc": "images/projects/spa.png",
		"description": "This project is designed for a Swedish spa, facilitating users to schedule massage appointments. Admins possess the capability to add massage services, announcements, and manage holidays, among other functions.",
		"techs": [Techs.ts, Techs.react, Techs.mui]
	},
	{
		"title": "AI resume builder",
		"imageSrc": "images/projects/resume.png",
		"description": "This website enables users to select a resume template and input the personal details required for the resume. The AI functionality on the website comes into play when users provide a paragraph of their biodata; the website recognizes and extracts relevant data for the sections based on the selected resume template.",
		"techs": [Techs.react, Techs.nodeJS, Techs.mui, Techs.openAI]
	},
	{
		"title": "Personal legislative drafting website for a draftsman",
		"imageSrc": "images/projects/legislative.png",
		"description": "This project is designed for an individual draftsman specializing in legislative drafting. The website aims to attract clients seeking legislative drafting services.",
		"techs": [Techs.react, Techs.mui]
	},
	{
		"title": "Website for a investment firm",
		"imageSrc": "images/projects/ijs.png",
		"description": "This is an investment firm that is committed to investing and building innovative solutions for businesses.",
		"techs": [Techs.react, Techs.nodeJS]
	},
	{
		"title": "Construction website",
		"imageSrc": "images/projects/construction.png",
		"description": "This is a website for a construction site that creates modern houses and luxury apartments to a high standard of architectural design under the observation of qualified Engineers. The website aims to attract clients seeking construction services.",
		"techs": [Techs.react, Techs.nodeJS]
	},
	{
		"title": "Agriculture Marketplace Dashboard",
		"imageSrc": "images/projects/agrimart.png",
		"description": "A web-based application and a mobile application. The web-based application is for the admins and officers and the mobile application is for farmers to sell their products in the marketplace and buyers can buy their products.",
		"techs": [Techs.react, Techs.mongoDB, Techs.firebase, Techs.nodeJS]
	},
	{
		"title": "News Website",
		"imageSrc": "images/projects/news.png",
		"description": "A web application where users can get updated with the latest news updates by subscribing, and reporters can update the website with the latest events by registering on the platform.",
		"techs": [Techs.react, Techs.php, Techs.bootstrap, Techs.mysql, Techs.laravel,]
	},
	{
		"title": "Human Resource Management System",
		"imageSrc": "images/projects/hrms.png",
		"description": "A web-based application where the employees of a company can keep their records on the platform, apply for leaves, the management can approve the requests, can query the reports under various categories.",
		"techs": [Techs.mysql, Techs.bootstrap, Techs.react, Techs.nodeJS]
	},
	{
		"title": "Driver Assistant System ",
		"imageSrc": "images/projects/driver.png",
		"description": "A python application that can take a real-time video stream as the input and identify the obstacles to warn the driver by predicting collisions.",
		"techs": [Techs.python, Techs.openCV]
	},
	{
		"title": "E-nstitute web Application ",
		"imageSrc": "images/projects/enstitute.png",
		"description": "Web application to establish a productive relationship between private teachers and students.",
		"techs": [Techs.js, Techs.html, Techs.mysql]
	},
	{
		"title": "Students Requests Management System",
		"imageSrc": "images/projects/studentRequest.png",
		"description": "A web-based application where students can make requests under several categories such as deadline extensions, leaves, etc., and the academic staff can respond to the requests. A portal for real-time chatting was also included.",
		"techs": [Techs.django, Techs.python, Techs.html, Techs.bootstrap]
	},
	{
		"title": "E-Pharmacy web Application",
		"imageSrc": "images/projects/epharmacy.png",
		"description": "A web-based application where the patients can upload their prescriptions to the system and then according to availability deliver the medicine to their doorstep.",
		"techs": [Techs.react, Techs.firebase, Techs.bootstrap]
	},
  ];
  
// Export the projects array using a function
export default projects;
  