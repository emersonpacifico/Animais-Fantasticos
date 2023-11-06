function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const itemAccordion = document.querySelectorAll(".js-accordion dt");
  const classAtivo = "ativo";
  if (itemAccordion.length) {
    itemAccordion[0].classList.add(classAtivo);
    itemAccordion[0].nextElementSibling.classList.add(classAtivo);
    function activeAccordion() {
      this.classList.toggle(classAtivo);
      this.nextElementSibling.classList.toggle(classAtivo);
    }

    itemAccordion.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
