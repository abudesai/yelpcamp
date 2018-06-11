
var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

var campgrounds = [
	{name:"SalmonCreek", image: "https://pixabay.com/get/e833b3092cf5033ed1584d05fb1d4e97e07ee3d21cac104497f8c77caee4b7bf_340.jpg"},
	{name:"Granite Hill", image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
	{name:"Mountain Goat's Rest", image: "https://pixabay.com/get/e83db80d2cfd053ed1584d05fb1d4e97e07ee3d21cac104497f8c77caee4b7bf_340.jpg"},
]


app.set("view engine", "ejs");


app.get("/", function(req, res){
	// res.send("Hello from YelpCamp!");
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	campgrounds.push({name: name, image: image});
	res.redirect("/campgrounds");
	res.send("You hit the post route");

	//redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs")
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("YelpCamp app is running.");
});