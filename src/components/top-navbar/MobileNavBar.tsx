import Image from "next/image";
import Logo from "../../../public/assets/logo2.png";

type MobileNavBarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  sections: string[];
  handleSelection: (section: string) => void;
};

const MobileNavBar: React.FC<MobileNavBarProps> = (props) => {
  const { isOpen, toggleMenu, sections, handleSelection } = props;
  return (
    <div
      className={`mobile_menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile_menu_container">
        <Image src={Logo} width={300} height={100} alt="Logo" />
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                className={`app__navbar-item`}
                onClick={() => handleSelection(section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
