const stagesBtnLeft = document.querySelector('.pagination__btn_left');
const stagesBtnRight = document.querySelector('.pagination__btn_right');
const stagesList = document.querySelector('.stages__list');
const countStage = document.querySelectorAll('.item').length;
const paginationItems = document.querySelectorAll('.pagination__switch');

const getIndexActiveItemPagination = () => Number(
    document.querySelector('.pagination__switch_active').dataset.num);

const calculateWidth = () => {
  const widthBox = document.querySelector('.stages__box').offsetWidth;
  const widthItem = stagesList.querySelector('.stages__item').offsetWidth;
  return (widthItem - widthBox) >= 16 ? widthItem : widthBox;
};

const setActiveItemPagination = (index) => {
  paginationItems.forEach(item => {
    item.classList.remove('pagination__switch_active');
  });
  paginationItems[index].classList.add('pagination__switch_active');
};

const setStageListStyleTransform = (index, width) => {
  stagesList.style.transform =
  `translateX(-${index * (width)}px)`;
};

const setBtnDisabled = (elem, flag) => elem.disabled = flag;

const widthMediaQuery = window.matchMedia('(max-width: 860px)');

const removeStageListStyleTransform = (e) => {
  if (!e.matches) {
    stagesList.style.transform = '';
    paginationItems.forEach(item => {
      item.classList.remove('pagination__switch_active');
    });
    paginationItems[0].classList.add('pagination__switch_active');
    setBtnDisabled(stagesBtnLeft, true);
    setBtnDisabled(stagesBtnRight, false);
  }
};

widthMediaQuery.addEventListener('change', removeStageListStyleTransform);

const handleClickBtnLeft = (e) => {
  const index = getIndexActiveItemPagination() - 1;
  const width = calculateWidth();

  if (index <= countStage) {
    setBtnDisabled(stagesBtnRight, false);
  }

  if (!index) {
    setBtnDisabled(stagesBtnLeft, true);
  }
  setActiveItemPagination(index);
  setStageListStyleTransform(index, width);
};

const handleClickBtnRight = (e) => {
  const index = getIndexActiveItemPagination() + 1;
  const width = calculateWidth();

  if (index >= 1) {
    setBtnDisabled(stagesBtnLeft, false);
  }
  if (index >= countStage - 1) {
    setBtnDisabled(stagesBtnRight, true);
  }
  setActiveItemPagination(index);
  setStageListStyleTransform(index, width);
};

export const stagesSliderControl = () => {
  stagesBtnLeft.addEventListener('click', handleClickBtnLeft);
  stagesBtnRight.addEventListener('click', handleClickBtnRight);
};

