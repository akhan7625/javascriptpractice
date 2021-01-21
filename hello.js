function say_hello() {
    console.log("the function is working");
    var person_name = document.getElementById("name").value; 
    document.getElementById("p1").innerHTML = "Hello " + person_name;
}