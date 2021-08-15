const form = $("#registerForm");
document.getElementById("registerForm").addEventListener("submit", function(event){
    // event.preventDefault();
    console.log(event)
    var values = {};
    $.each($('#registerForm').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    console.log(values);
});