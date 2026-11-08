// Shows an offering's details on the home page when it is hovered, clicked or tapped.
const offerings = document.querySelectorAll(".offering");

function showOffering(selected) {
  offerings.forEach((offering) => {
    const isSelected = offering === selected;
    offering.setAttribute("aria-expanded", String(isSelected));
    document.getElementById(offering.getAttribute("aria-controls")).hidden = !isSelected;
  });
}

offerings.forEach((offering) => {
  offering.addEventListener("mouseenter", () => showOffering(offering));
  offering.addEventListener("click", () => showOffering(offering));
});
