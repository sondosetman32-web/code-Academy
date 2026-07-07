

const TODAY = new Date();

const MS_IN_A_DAY = 1000 * 60 * 60 * 24;


const courseNames = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
];

const courseStatuses = [
    "Open Now",
    "Coming Soon",
    "Open Now",
    "Open Now"
];

const courseLaunchDates = [
    "2026-07-15",
    "2026-08-01",
    "2026-08-20",
    "2026-09-10"
];

const courseImages = [
    "./html.png",
    "./css.png",
    "./bootstrap.png",
    "./javascript.png"
];

const courseDescriptions = [

    "Learn the basics of HTML5.",

    "Style your website using CSS3.",

    "Build responsive websites using Bootstrap.",

    "Make websites interactive using JavaScript."

];



function daysLeft(date){

    const targetDate = new Date(date);

    return Math.ceil(

        (targetDate - TODAY) / MS_IN_A_DAY

    );

}


function filterByStatus(status){

    console.log("===== " + status + " =====");

    for(let i=0;i<courseNames.length;i++){

        if(courseStatuses[i]===status){

            console.log(courseNames[i]);

        }

    }

}


let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const courseTitle = document.getElementById("courseTitle");
const courseDescription = document.getElementById("courseDescription");

function showCourse(index){

    sliderImage.src = courseImages[index];

    courseTitle.textContent = courseNames[index];

    courseDescription.textContent = courseDescriptions[index];

}

document.getElementById("nextBtn").addEventListener("click", function(){

    currentIndex++;

    if(currentIndex >= courseNames.length){

        currentIndex = 0;

    }

    showCourse(currentIndex);

});

document.getElementById("prevBtn").addEventListener("click", function(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = courseNames.length - 1;

    }

    showCourse(currentIndex);

});



setInterval(function(){

    currentIndex++;

    if(currentIndex >= courseNames.length){

        currentIndex = 0;

    }

    showCourse(currentIndex);

},3000);



const form = document.getElementById("registerForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if(name==="" || email==="" || password===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Registration Successful 🎉");

    form.reset();

});



console.log("===== Upcoming Courses =====");

for(let i=0;i<courseNames.length;i++){

    console.log(

        courseNames[i] +
        " | " +
        courseStatuses[i] +
        " | Days Left: " +
        daysLeft(courseLaunchDates[i])

    );

}

filterByStatus("Open Now");

console.log("Website Loaded Successfully");


showCourse(currentIndex);