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
    title: 'PROJECT 1',
    status: 'Ongoing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis facere, repellendus, earum iure ea amet ullam, fugit eveniet ut consectetur necessitatibus accusantium! Alias, nobis? Provident expedita aut nam sunt, nesciunt, optio repellendus quibusdam fugit eaque officiis dignissimos odit sit, facere veritatis consequuntur quisquam rerum? Fugit aliquam aliquid quasi voluptatum nobis inventore, magnam temporibus velit consectetur corrupti similique dolor repellat voluptas amet soluta quis ut ipsa laborum, earum quam laboriosam eum aperiam alias. Sunt necessitatibus illum ducimus assumenda alias. Facilis, vel. Perspiciatis temporibus ullam necessitatibus accusantium odio recusandae unde, veritatis vel non adipisci reprehenderit soluta totam dicta. Tempore impedit dolore mollitia atque dicta minus ex accusamus saepe fugit magni et tempora alias voluptate quo, inventore eos omnis quae. Harum recusandae blanditiis placeat ex, tempora nostrum voluptates accusamus commodi rerum eligendi molestias voluptas laboriosam et sed corporis consequatur expedita. Quae nesciunt ipsa velit delectus iure reiciendis ullam magni sapiente. Voluptates deleniti eius esse tempora recusandae commodi sequi ratione aliquam consequuntur dicta? Alias, accusantium laboriosam, aliquam eligendi odit totam doloribus tempore nam corporis repellendus nihil velit aperiam repellat illo. Quasi, officia numquam consequuntur, neque tempora aliquam iste unde tempore blanditiis perferendis id labore, ratione nulla eius! Odio enim, amet minus vero quis delectus impedit repellat itaque soluta incidunt praesentium eaque dignissimos in perferendis error quod voluptatum nesciunt, quas iusto, totam assumenda? Maiores est facere quisquam vitae magnam quasi voluptatem fuga dolores architecto ipsa? Quae id atque est nostrum quaerat provident maiores tempore. Optio officiis unde sit veritatis dicta voluptatem, illo, eum quisquam eligendi, quidem recusandae sint numquam quasi nobis dignissimos consequuntur. Tempora esse qui necessitatibus distinctio, aliquid sit numquam vel ipsam praesentium quis vero nam voluptas doloribus ea quas maxime recusandae repellat. Minima, incidunt molestias! Sed esse velit voluptatem modi asperiores. Nesciunt odit eum tempore omnis ut facere ducimus, magni ipsam labore repellat illo assumenda obcaecati esse mollitia asperiores dolor doloribus sapiente aperiam libero quas corporis. Rerum ratione voluptates amet quo id minima voluptas, exercitationem quibusdam totam voluptatem, labore at quidem esse dolore doloribus rem facilis corrupti ea, officiis reiciendis! A aliquam quasi quidem consequatur ad quos debitis aspernatur nostrum atque odio consequuntur error eaque nam in porro suscipit perspiciatis reiciendis fugit, assumenda dignissimos dicta quia ex? Asperiores iusto a ullam repellat? Eligendi nihil sapiente repellat explicabo dolorem perspiciatis ipsum? Quas, velit? Eaque molestias saepe officia totam voluptatum maxime temporibus, adipisci ipsum aliquid quasi quis laborum? Facere quaerat quo aliquid quisquam hic.',
    image: 'ai.webp',
  },
  {
    title: 'PROJECT 2',
    status: 'Completed',
    description: 'An automated bot system for campus task management and student queries.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptate, facere est deserunt aliquam laboriosam, sint illum officia repellat repellendus officiis illo. Doloribus adipisci eaque nisi tenetur est omnis necessitatibus, cumque molestiae facere error et quos explicabo atque minima expedita maiores amet a nostrum illo. Earum, magnam. Possimus, blanditiis? Quaerat adipisci dignissimos provident sapiente eaque neque laboriosam consectetur, possimus blanditiis tempora ipsa laudantium inventore dicta itaque aspernatur excepturi suscipit? Placeat tenetur itaque non voluptatum repudiandae vero, vel voluptates quas amet id quasi, eaque debitis, optio quia! Nobis, laborum et. Quas eveniet quo illo, itaque rem ipsam vitae doloremque commodi possimus, a perferendis amet fugiat eaque quam dicta saepe adipisci distinctio, soluta magnam. Voluptatem expedita vero, magni maiores quidem est error similique fugiat ipsam excepturi quia exercitationem numquam, dignissimos eum architecto libero labore corrupti facere accusantium et iure! Cum quaerat tenetur sit quasi nobis voluptate quisquam maxime adipisci. Voluptatum commodi quam nulla, enim voluptates facere cupiditate aut ipsum velit eaque tempora dicta impedit assumenda debitis eius placeat ipsa corrupti consequuntur odit quis fugiat nihil. Vel impedit saepe velit optio? Quos iste rerum, distinctio sequi accusamus est nisi, et quisquam eum quia dolores veritatis id corporis debitis! Numquam doloribus alias repellendus architecto exercitationem? Ipsa atque ea sint tempora optio laborum mollitia accusantium ratione laboriosam in vel eius natus aspernatur, ipsam placeat veritatis itaque numquam iste, fuga officia rem qui. Nobis assumenda sed dolor esse earum? Nostrum excepturi ducimus quasi in animi, labore est, aut architecto sint, nemo vel ab magni blanditiis non omnis deserunt. Ut excepturi dolor at consequatur voluptatem quaerat! Dolor distinctio delectus quos cumque accusamus dignissimos neque, sint doloremque voluptates quas enim optio reiciendis odio deserunt cum? Exercitationem nisi aperiam ducimus ad quae alias saepe, earum praesentium incidunt error perspiciatis adipisci ipsum nulla blanditiis autem iure dolores sint, laboriosam quos tempore? Provident ipsum, dolore eveniet, fuga similique aut odit suscipit et, nesciunt possimus odio dolorem sequi mollitia voluptas. Sapiente soluta eum ab quidem quia voluptatem eligendi maxime ipsa ea, est nam ducimus voluptas, ut optio eius in? Dolorem nihil nulla doloremque, tempora sunt voluptatum ullam aperiam et repellendus ab eligendi. Expedita ipsam earum temporibus qui reiciendis tempore libero numquam culpa praesentium. Dolorem iusto quia facere odit ad, officiis nostrum harum, saepe soluta animi ea hic magni amet, porro rerum explicabo? Ipsam ad quae sunt velit possimus deleniti fuga amet quos quas, adipisci facere ipsa obcaecati? Dicta deleniti excepturi ducimus iusto?',
    image: 'robot.jpg',
  },
  {
    title: 'PROJECT 3',
    status: 'Upcoming',
    description: 'A smart IoT-enabled campus network for streamlined communication and monitoring.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptate, facere est deserunt aliquam laboriosam, sint illum officia repellat repellendus officiis illo. itaque',
    image: 'pending.webp',
  },
];
''

function main (){
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


}
main();



burger = document.querySelector(".burger")
navbar1 = document.querySelector('.navbar-container')

navlist = document.querySelector(".nav-items")

logo = document.querySelector(".logo")


burger.addEventListener('click',()=>{


  logo.classList.toggle("v-class")
  navlist.classList.toggle("v-class")

  navbar1.classList.toggle("h-nav")




})
