const membersBtnLeft = document.querySelector('.members__btn_left');
const membersBtnRight = document.querySelector('.members__btn_right');
const membersList = document.querySelector('.members__list');
const membersItems = Array.from(document.querySelectorAll('.card'));
const countMembers = document.querySelectorAll('.card').length;
const memberCountCurrentElem =
  document.querySelector('.members__count-current');
// const membersItems = Array.from(document.querySelectorAll('.card'));
// console.log('membersItems: ', membersItems);

const getCountCurrentMembers = () => {
  const windowWidth = document.body.offsetWidth;
  return windowWidth > 1280 ? 3 :
    windowWidth <= 860 ? 1 : 2;
};

const calculateWidth = () =>
  document.querySelector('.members__box').offsetWidth;

// const setMembersListStyleTransform = () => {
// };

export const membersSliderControl = () => {
  const width = calculateWidth();
  const count = getCountCurrentMembers(width);
  console.log(' coefficient: ', count);

  memberCountCurrentElem.textContent = count;
};
