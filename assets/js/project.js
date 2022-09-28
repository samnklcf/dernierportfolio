AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Ecole 241 Business <br> <b>Juillet 2022</b>",
    cardImage: "assets/images/2.png",
    description: "",
    tagimg: "",
    Previewlink: "https://business.ecole241.com",
    Githublink: "",
  },
  {
    title: "Portfolio de BENAZO Gisèle pour le Métaverse <br> <b>Juillet 2022</b>",
    cardImage: "assets/images/4.png",
    description: "",
    tagimg: "",
    Previewlink: "https://benazo-jessica.netlify.app/",
    Githublink: "",
  },
  {
    title: "Portfolio de KAMBA Joseph pour le Métaverse <br> <b>Juillet 2022</b>",
    cardImage: "assets/images/7.png",
    description:
      "",
    tagimg: "",
    Previewlink: "https://joseph-kamba.netlify.com/",
    Githublink: "",
  },
  {
    title: "Portfolio de KAMBA Joseph pour le Métaverse <br> <b>Juillet 2022</b>",
    cardImage: "assets/images/10.png",
    description: "",
    tagimg:"",
    Previewlink: "https://styfen-n.netlify.app/",
    Githublink: "",
  },
  {
    title: "Sambas Professionnels <br> <b>Juin 2022</b>",
    cardImage: "assets/images/1.png",
    description: "",
    tagimg: "",
    Previewlink: "http://tedusite2.ga/",
    Githublink: "",
  },
  {
    title: "Beraca Site <br> E-commerce(Juste le front) <br> <b>Avril 2022</b>",
    cardImage: "assets/images/3.png",
    description: "",
    tagimg: "",
    Previewlink: "http://beraca.netlify.app",
    Githublink: "",
  },
  {
    title: "Site de Gabon BTP-Services <br> <b>Avril 2022</b>",
    cardImage: "assets/images/5.png",
    description: "",
    tagimg:"",
    Previewlink: "https://gabon-btp-services.netlify.app/",
    Githublink: "",
  },
 
 
  {
    title: "Projet personnel dans mes débuts <br> <b>Mars 2022</b>",
    cardImage: "assets/images/8.png",
    description: "",
    tagimg:"",
    Previewlink: "http://onedesigncompany.netlify.app/",
    Githublink: "",
  },
  {
    title: "Projet personnel dans mes débuts <br> <b>Février 2022</b>",
    cardImage: "assets/images/9.png",
    description:
      "",
    tagimg:"",
    Previewlink: "https://soupcuisine.netlify.app/",
    Githublink: "",
  },
 
  {
    title: "Projet personnel dans mes débuts <br> <b>Février 2022</b>",
    cardImage: "assets/images/11.png",
    description: "",
    tagimg:"",
    Previewlink: "https://yvettesamuel.netlify.app/",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
