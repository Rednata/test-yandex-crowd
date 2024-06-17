import { animationMemberCard } from './modules/animationMemberCard.js';
import { animationPlane } from './modules/animationPlane.js';
import { membersSliderControl } from './modules/membersSliderControl.js';
import { stagesSliderControl } from './modules/stagesSliderControl.js';


const init = () => {
  stagesSliderControl();
  membersSliderControl();
  animationPlane();
  animationMemberCard();
};

init();
