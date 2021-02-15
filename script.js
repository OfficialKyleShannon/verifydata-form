function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let nameRegex = /^[A-Z]/;

    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert('Yay! Your inputs were correct!');
        console.log(true);
    }
    else {
        alert("Oh no! That's an invalid format");
        console.log(false);
    }
}
