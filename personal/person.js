$(document).ready(function(){
    $("#submit_btn").click(function(){

        var cName=$("#inputName").val()
        var cEmail=$("#inputEmail4").val()
        var cMobile=$("#inputMobile").val()
        var cPlace=$("#inputPlace").val()
        var cAddress=$("#inputAddress").val()
        var cComments=$("#inputComments").val()
        alert(cName)

        if(!cName){
        }else if(cEmail==null){
            Email.send({
                Host: "smtp.gmail.com",
                Username: "cName",
                Password: "Enter your password",
                To: 'edwinbabymj@gmail.com',
                From: "cEmail",
                Subject: "Enquiry",
                Body: "cComments",
            })
                .then(function (message) {
                    alert("E-Mail sent successfully")
                });
        }
        
    })
})
function sendEmail() {
            
        }
