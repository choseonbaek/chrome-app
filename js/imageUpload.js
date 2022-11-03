const upload = document.querySelector(".upload");
let uploaded_image = "";
document
  .querySelector(".user .userImage .material-icons")
  .addEventListener("click", () => upload.click());

upload.addEventListener("change", fileUpload);

function fileUpload() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      ".userImage"
    ).style.backgroundImage = `url(${uploaded_image})`;
    localStorage.setItem("image", uploaded_image);
  });
  reader.readAsDataURL(this.files[0]);
}

let saveImage = localStorage.getItem("image");
document.querySelector(
  ".userImage"
).style.backgroundImage = `url(${saveImage})`;
