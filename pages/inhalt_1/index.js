document.addEventListener("DOMContentLoaded", () => {
  const allDetails = document.querySelectorAll("details");
  const imageMap = {
    "koerperhaltung-details": document.getElementById("koerperhaltung-image"),
    "bewegung-details": document.getElementById("bewegung-image"),
  };

  allDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        allDetails.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.open = false;
          }
        });
        for (const [id, imageBox] of Object.entries(imageMap)) {
          if (id === detail.id) {
            imageBox.style.display = "flex";
          } else {
            imageBox.style.display = "none";
          }
        }
      } else {
        const imageBox = imageMap[detail.id];
        if (imageBox) {
          imageBox.style.display = "none";
        }
      }
    });
  });
});
