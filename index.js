
function sendEmail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_iy75nog", "template_d521mib", params).then(function (res) {
        alert("Success!" + res.status);
    })
}