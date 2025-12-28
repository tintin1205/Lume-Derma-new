// Mobile menu toggle
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp booking message
function openWhatsApp(e){
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "";

  const form = e.target;
  const name = (form.name.value || "").trim();
  const phone = (form.phone.value || "").trim();
  const concern = form.concern.value;
  const message = (form.message.value || "").trim();

  const waNumber = "919949772048"; // clinic WhatsApp

  const text =
`Hello LUMÉ DERMA,
Name: ${name}
Phone: ${phone}
Concern: ${concern}
Message: ${message || "-"}
Location: Ashok Nagar, Himayath Nagar, Hyderabad

I would like to book an appointment with Dr. Yashwitha Badam.`;

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");

  status.textContent = "Opening WhatsApp…";
  return false;
}
