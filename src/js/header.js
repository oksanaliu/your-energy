export function handleNavClick() {
  const navSelector = document.querySelector(".js-header-nav-list");
  const logoElement = document.querySelector(".logo");

  const savedPath = localStorage.getItem("activePath");
  const currentPath = window.location.pathname;

  navSelector.querySelectorAll(".nav-link").forEach(navLink => {
    const navItem = navLink.closest(".nav-item");

    if (
      navLink.getAttribute("href") === savedPath ||
      navLink.getAttribute("href") === currentPath ||
      (currentPath === "/" && navLink.getAttribute("href") === "./index.html")
    ) {
      navLink.classList.add("js-nav-link-active");
      navItem.classList.add("js-nav-item-active");
    } else {
      navLink.classList.remove("js-nav-link-active");
      navItem.classList.remove("js-nav-item-active");
    }
  });

  navSelector.addEventListener("click", event => {
    const navLink = event.target.closest(".nav-link");

    if (!navLink) {
      return;
    }

    const navItem = navLink.closest(".nav-item");

    navSelector.querySelectorAll(".js-nav-link-active").forEach(link => {
      link.classList.remove("js-nav-link-active");
    });
    navSelector.querySelectorAll(".js-nav-item-active").forEach(item => {
      item.classList.remove("js-nav-item-active");
    });

    navLink.classList.add("js-nav-link-active");
    navItem.classList.add("js-nav-item-active");

    localStorage.setItem("activePath", navLink.getAttribute("href"));
  });

  logoElement.addEventListener("click", () => {
    navSelector.querySelectorAll(".js-nav-link-active").forEach(link => {
      link.classList.remove("js-nav-link-active");
    });
    navSelector.querySelectorAll(".js-nav-item-active").forEach(item => {
      item.classList.remove("js-nav-item-active");
    });

    const homeLink = navSelector.querySelector('.nav-link[href="./index.html"]');
    const homeItem = homeLink?.closest(".nav-item");

    if (homeLink && homeItem) {
      homeLink.classList.add("js-nav-link-active");
      homeItem.classList.add("js-nav-item-active");
    }

    localStorage.setItem("activePath", "./index.html");
  });
}

handleNavClick();
