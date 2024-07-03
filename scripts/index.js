// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const popupNewCard = document.querySelector('.popup_type_new-card'); // попап для новой карточки
const popupCloseButtons = document.querySelectorAll('.popup__close'); // кнопки закрытия попапов
const formNewCard = popupNewCard.querySelector('.popup__form'); // форма создания новой карточки

// @todo: Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// @todo: Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

// @todo: Обработчики событий для кнопок закрытия попапов
popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// @todo: Обработчик события для кнопки добавления карточки
addButton.addEventListener('click', () => openPopup(popupNewCard));

// @todo: Обработчик события для формы создания новой карточки
formNewCard.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardTitle = formNewCard.querySelector('.popup__input_type_card-name').value;
  const cardImage = formNewCard.querySelector('.popup__input_type_url').value;
  const cardData = createCard({ name: cardTitle, link: cardImage }, deleteCard);
  cardList.prepend(cardData); // Добавляем новую карточку в начало списка
  closePopup(popupNewCard); // Закрываем попап после добавления карточки
  formNewCard.reset(); // Сбрасываем форму
});

// @todo: Вывести карточки на страницу
initialCards.forEach(cardData => {
  const cardElement = createCard(cardData, deleteCard);
  cardList.append(cardElement);
});
