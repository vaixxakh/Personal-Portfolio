function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".sidebar-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function  sendMail(){
  var params = {
    name:document.getElementById("name").value ,
    email:document.getElementById("email").value ,
    message:document.getElementById("message").value ,
  };
  const serviceId = "service_hyr0ct9";
const templateId ="template_g1khwpm"

emailjs.send(serviceId,templateId,params)
.then(

  res =>{
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("your message sent successfully");
  }
)
.catch((err) => console.log(err));

}
