AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>Le language incontournable du Web</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Permet de styliser le html</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>Ajoute du dynamisme côté client</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node. js sert à faire du Javascript server side, et peut être utilisé dans des applications de bases de données.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python est un langage de programmation interprété, multiparadigme et multiplateformes.</li>",
  },
  {
    langImage: "assets/images/techstack-page/express.js.png",
    langName: "Express Js",
    langDesc: "<li>Express Web Framework Node js Express est une infrastructure d'application (framework), écrit en JavaScript et hébergée dans l'environnement d'exécution node. js</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git est un logiciel de gestion de versions décentralisé. Git permet donc de travailler de manière collaborative.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap est un framework de frontend gratuit qui devient de plus en plus populaire parmi les développeurs de frontend</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React Js est une bibliothèque JavaScript libre développée par Facebook depuis 2013.</li>",
  },
  {
    langImage:"assets/images/techstack-page/Electron.svg.png",
    langName:"Electron Js",
    langDesc:"<li>Ce framework permet de créer des logiciels bureau robustes</li>"
  },
  {
    langImage:"assets/images/techstack-page/django.png",
    langName:"Django",
    langDesc:"<li>Django permet de créer des applications web dynamiques et robustes</li>"
  },
  {
    langImage:"assets/images/techstack-page/djangorest.png",
    langName:"Django",
    langDesc:"<li>Django permet de créer des API</li>"
  },
  {
    langImage:"assets/images/techstack-page/php.jpeg",
    langName:"PHP",
    langDesc:"<li>PHP permet de créer des applications web dynamiques <br> <b>(En cours d'apprentissage...)</b></li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
