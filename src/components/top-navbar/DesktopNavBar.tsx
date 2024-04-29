import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Logo from "../../../public/assets/logo2.png";

type DesktopNavBarProps = {
  sections: string[];
  handleSelection: (section: string) => void;
  toggleMenu: () => void;
  openMenu: boolean;
};

const DesktopNavBar: React.FC<DesktopNavBarProps> = (props) => {
  const { sections, handleSelection, toggleMenu, openMenu } = props;
  return (
    <nav className="app__navbar">
      <div className="app__navbar-list">
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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          className="app__navbar-menu-icon"
        >
          {!openMenu ? (
            <MenuIcon onClick={toggleMenu} />
          ) : (
            <CloseIcon onClick={toggleMenu} />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
