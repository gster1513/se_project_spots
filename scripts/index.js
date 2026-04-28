const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Val Thorens",
  },
  {
    name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    alt: "Restaurant Terrace",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    alt: "A very long bridge, over the forest and through the trees",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    alt: "Tunnel with morning light",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Moutain house",
  },
  {
    name: "Starry night",
    link: "https://images.unsplash.com/photo-1776358051594-0f2061a7151f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Starry night",
  },
];

// edit profile related variables
const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton =
  editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

// post related variables
const postAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const postModalCloseButton = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const postImageLinkInput = newPostModal.querySelector("#add-card-link-input");
const postCaptionInput = newPostModal.querySelector("#add-card-name-input");

// edit profile related elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editModalCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

postAddBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

postModalCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const name = editProfileNameInput.value;
  const description = editProfileDescriptionInput.value;

  profileNameEl.textContent = name;
  profileDescriptionEl.textContent = description;

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// Create the form submission handler for new posts.
function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const imageLink = postImageLinkInput.value;
  const caption = postCaptionInput.value;

  // Log both input values to the console.
  console.log(imageLink, caption);

  newPostModal.classList.remove("modal_is-opened"); // Close the modal.
}
// Create the submit listener.
newPostForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (card) {
  console.log(card.name);
});
