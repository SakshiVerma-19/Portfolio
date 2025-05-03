let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let selector = 'header nav a[href="#' + id + '"]';
                let activeLink = document.querySelector(selector);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

   
};
document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzG8kWB00JM3nyt8IqF3U8ZTJa7xeltgfKyNrkNx5WwjoZEC86xSmQyY3zxGp9B2j0E/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(data => {
      alert("Form submitted successfully!");
      document.getElementById("contact").reset();
    })
    .catch(err => {
      alert("Error submitting form.");
      console.error(err);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const factBox = document.getElementById('factBox');
    const factText = document.getElementById('factText');
  
    const facts = [
      "Sakshi has over 100 million lens views on Snapchat!",
      "She built more than 200 AR lenses!",
      "She's in the NCC Air Wing aiming for the IAF.",
      "Sakshi created content for Under25 and Microsoft clubs.",
      "She loves graphic design and public speaking!",
      "Built a robot that dodges obstacles. Smarter than most humans. ",
      "Problem-solving is her superpower.",
      "Turns any chat into a TED Talk.",
      "Big dreams, bigger ambitions.",
      "Gold fish Memory, so carries a small diary with her",
      "Weird blend of perfectionist and a procastinator",
      "She Hates coffee!",
      "Low-key addicted to collecting cute notebooks, but never writes in them.",
      "Has a hidden superpower: turning deadlines into a challenge.",
      "Thinks in memes, speaks in quotes.",
      "Takes “I work best under pressure” to a whole new level.",
      "Loves Instagram stories, but texting back? That’s a whole different story.",
      "Fries are her soulmate—seriously.",
      "Don’t bother calling her after she’s home—she’s probably busy posting a story about how she doesn’t like answering calls.",
      "Flight Radar 24? More like her personal airshow at her fingertips."

      
    ];
  
    function getRandomFact() {
      const randomIndex = Math.floor(Math.random() * facts.length);
      return facts[randomIndex];
    }

    // Change fact on hover and move box
    factBox.addEventListener('mouseenter', () => {
      const randomFact = getRandomFact(); // Get random fact
      factText.textContent = randomFact; // Display the fact

      const maxX = window.innerWidth - factBox.offsetWidth - 20;
      const maxY = window.innerHeight - factBox.offsetHeight - 20;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      // Move the fact box to a random position
      factBox.style.left = randomX + 'px';
      factBox.style.top = randomY + 'px';
      factBox.style.bottom = 'auto';
      factBox.style.right = 'auto';
    });
  });
  