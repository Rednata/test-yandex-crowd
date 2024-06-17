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
  let num = 0;


  setTimeout(() => {
    if (num >= 5) {
      console.log('=============');
      num = 0;
    }
    membersItems[num].style.transform = `translateX(-${(num) * 100}%)`;
    num++;
  //   console.log('num: ', num);
  //   const widthMembersBox = document.querySelector('.members__box').offsetWidth;

  //   const width = calculateWidth();

  //   const count = getCountCurrentMembers(width);

  //   const index = countMembers / count;
  //   membersItems.forEach((elem, i) =>
  //     elem.style.transform =
  //     `translateX(-${num * widthMembersBox}px)`);
  //   // membersItems[num].style.transform = `translateX(-${(num + 1) * width}px)`;
  //   // membersItems[num + 1].style.transform = `translateX(-${(num + 1) * width}px)`;
  //   // console.log(membersItems[num]);


  //   num += 1;
  }, 5000);
};
