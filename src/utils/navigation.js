


export const internalLinkNavigation = (link="") => {
    window.location.hash = link;
    document.querySelector("#" + link).scrollIntoView({ behavior: "smooth" });
}

export const redirectToNewTab = (url) => {
  if (!url) return
  window.open(url, "_blank");
};
