import { Logo } from "../Logo";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        

        <div className="footer-grid"></div>

        <div className="footer-bottom">
          <Logo></Logo>

          <div className="footer-social">
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </footer>
    </>
  );
}
