import "./styles.css";
import "./";
import { BiMoon } from "react-icons/bi";
import { Logo } from "../Logo";
export default function Nav() {
  return (
    <nav id="navbar">
      <div className="container">
        <Logo></Logo>
        <div className="links">
          <a href="#">Como usar</a>
          <a href="#">Preços</a>
          <a href="#">Quem somos?</a>
        </div>
        <div className="nav-buttons-area">
          <a href="#download" className="btn-download">
            Baixar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1v7M3 5.5l3 3 3-3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 9.5h10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
          <button className="color-button">
            {" "}
            {<BiMoon size={20}></BiMoon>}
          </button>
        </div>
      </div>
    </nav>
  );
}
