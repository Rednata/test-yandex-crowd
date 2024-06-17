const memberCards = document.querySelectorAll('.card__img');

export const animationMemberCard = () => {
  memberCards.forEach(card =>
    card.addEventListener('click', () => {
      memberCards.forEach(elem => {
        elem.classList.remove('card__rotate');
      });
      card.classList.add('card__rotate');
      setTimeout(() => {
        card.classList.remove('card__rotate');
      }, 1000);
    })
  );
};
