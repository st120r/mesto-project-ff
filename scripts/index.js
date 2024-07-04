// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard({ name, link }, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = name;
  cardImg.alt = name;
  cardImg.src = link;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCallback);

  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (event) => {
  const item = event.target.closest('.card');
  item.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(cardData => {
  const cardElement = createCard(cardData, deleteCard);
  cardsContainer.append(cardElement);
});
