const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editProfileModal.querySelector(".modal__close-btn");

profileEditBtn.addEventListener("click", function() {
  editProfileModal.classList.add("modal_is-opened");
});

editModalCloseButton.addEventListener("click", function() {
  editProfileModal.classList.remove("modal_is-opened");
});

const postAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const postModalCloseButton = newPostModal.querySelector(".modal__close-btn");

postAddBtn.addEventListener("click", function() {
  newPostModal.classList.add("modal_is-opened");
});

postModalCloseButton.addEventListener("click", function() {
  newPostModal.classList.remove("modal_is-opened");
});