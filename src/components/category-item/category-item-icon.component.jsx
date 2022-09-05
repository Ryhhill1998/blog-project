import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

const Icon = ({ index }) => {
  const iconsArray = [
    faCircleQuestion,
    faStar,
    faUtensils,
    faChartLine,
    faAddressBook,
  ];

  const icon = iconsArray[index];

  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
