let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");  

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};






const projectItems = document.querySelectorAll('.project-item');
const projectDescription = document.querySelector('.project-description');

const projectData = [
  {
    title: 'AI Study Companion',
    status: 'Ongoing',
    description: 'An AI-powered study assistant helping students optimize their learning patterns and track progress through machine learning algorithms.',
    image: 'robot.jpg',
  },
  {
    title: 'Campus Bot',
    status: 'Completed',
    description: 'An automated bot system for campus task management and student queries.',
    image: 'campus-bot.jpg',
  },
  {
    title: 'Smart Campus Network',
    status: 'Upcoming',
    description: 'A smart IoT-enabled campus network for streamlined communication and monitoring.',
    image: 'smart-campus.jpg',
  },
];

projectItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.project-item.active').classList.remove('active');
    item.classList.add('active');
    
    const data = projectData[index];
    projectDescription.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      <p>${data.description}</p>
    `;
  });
});
