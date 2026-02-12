document.addEventListener("DOMContentLoaded", function () {

  window.showService = function (service, element) {
    const content = document.getElementById("serviceContent");
    const items = document.querySelectorAll(".service-item");
    const isMobile = window.innerWidth < 992;

    items.forEach(item => {
      if (item !== element) item.classList.remove("active");
    });

    element.classList.toggle("active");

    /* Desktop / tab → update right panel */
    if (!isMobile && content) {

      if (service === "uiux") {
        content.innerHTML = `
          <h2>UI UX Design</h2>
          <ul>
            <li>UX Design</li>
            <li>UI Design</li>
            <li>UX Research</li>
          </ul>
          <a href="#" class="hire-btn" >Hire me</a>
        `;
      }

      if (service === "app") {
        content.innerHTML = `
          <h2>App Design</h2>
          <ul>
            <li>Android App</li>
            <li>iOS App</li>
            <li>App Prototyping</li>
          </ul>
          <a href="#" class="hire-btn">Hire me</a>
        `;
      }

      if (service === "web") {
        content.innerHTML = `
          <h2>Web Design</h2>
          <ul>
            <li>Website UI</li>
            <li>Landing Pages</li>
            <li>Responsive Design</li>
          </ul>
          <a href="#" class="hire-btn">Hire me</a>
        `;
      }
    }
  };

});





// NAV Scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".glass-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});




// google sheet
   /*const scriptURL = "https://script.google.com/macros/s/AKfycbwFFmuvWXmRBPC54_IniVzeFB2MEClAzQ9vP_DVzEPdz3tW3kjwUoHpfwPWliXvisRB/exec";

  document.getElementById("hireMeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("hireName").value,
      email: document.getElementById("hireEmail").value,
      service: document.getElementById("hireService").value,
      message: document.getElementById("hireMessage").value
    };

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Form submitted successfully!");
      document.getElementById("hireMeForm").reset();

      // modal close
      bootstrap.Modal.getInstance(
        document.getElementById("hireMeModal")
      ).hide();
    })
    .catch(() => {
      alert("Error! Please try again.");
    });
  });*/



  //goolge sheet
    const scriptURL = "https://script.google.com/macros/s/AKfycbwFFmuvWXmRBPC54_IniVzeFB2MEClAzQ9vP_DVzEPdz3tW3kjwUoHpfwPWliXvisRB/exec";

  function sendToSheet(formId, nameId, emailId, serviceId, messageId) {

    document.getElementById(formId).addEventListener("submit", function(e) {
      e.preventDefault();

      const data = {
        name: document.getElementById(nameId).value,
        email: document.getElementById(emailId).value,
        service: document.getElementById(serviceId).value,
        message: document.getElementById(messageId).value
      };

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(() => {
        alert("Form submitted successfully!");
        document.getElementById(formId).reset();

        // Agar modal form hai to close karo
        if(formId === "hireMeForm"){
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("hireMeModal")
          );
          if(modal) modal.hide();
        }
      })
      .catch(() => {
        alert("Error! Please try again.");
      });

    });
  }

  // 🔹 Modal Form
  sendToSheet("hireMeForm", "hireName", "hireEmail", "hireService", "hireMessage");

  // 🔹 Contact Section Form
  sendToSheet("contactForm", "name", "email", "service", "message");

