
import "./styles.css";
import './'
export default function Nav() {
  
  return (
    <nav id="navbar">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z"
                fill="white"
                fill-opacity="0.9"
              />
              <path d="M8 5L11 6.8V10.2L8 12L5 10.2V6.8L8 5Z" fill="white" />
            </svg>
          </div>

          <span>Bizzi</span>
        </div>

        <div className="links">
          <a href="#">Como usar</a>
          <a href="#">Preços</a>
          <a href="#">Quem somos?</a>
        </div>

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

      </div>
    </nav>
  );
}
