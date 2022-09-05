import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ index }) => {
  const iconsArray = [
    faCircleQuestion,
    faStarHalfStroke,
    faUtensils,
    faChartLine,
    faAddressBook,
  ];

  const icon = iconsArray[index];

  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
