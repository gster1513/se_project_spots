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
    alt: "Starry night"
  }
];

// card related variables

// modal related variables
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

initialCards.forEach(function (card) {
  console.log(card.name);
});
