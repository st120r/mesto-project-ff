// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button'); 
const popupNewCard = document.querySelector('.popup_type_new-card'); 
const popupCloseButtons = document.querySelectorAll('.popup__close'); 

// @todo: Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// @todo: Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// @todo: Функция создания карточки
function createCard(cardTitle, cardImage, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardImg.alt = cardTitle;
  cardImg.src = cardImage;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCallback);

  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (event) => {
  const item = event.target.closest('.card');
  item.remove();
};

// @todo: Обработчики событий для кнопок закрытия попапов
popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// @todo: Обработчик события для кнопки добавления карточки
addButton.addEventListener('click', () => openPopup(popupNewCard));

// @todo: Вывести карточки на страницу
initialCards.forEach(function({ name, link }) {
  const cardData = createCard(name, link, deleteCard);
  cardList.append(cardData);
});
