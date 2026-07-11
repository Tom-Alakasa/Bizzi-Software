import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-cta">
          <div>
            <h2>Comece de graça hoje!</h2>
            <p>Não precisa de cadastro, apenas baixe e use.</p>
          </div>

          <a href="#download" className="footer-btn">
            Baixar Bizzi
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v8M4 7.5l3 3 3-3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12h10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z"
                    fill="white"
                    fill-opacity=".9"
                  />
                  <path
                    d="M8 5L11 6.8V10.2L8 12L5 10.2V6.8L8 5Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span>Lumis</span>
            </div>

            <p>
              The workspace for focused people. Fast, local-first, and
              beautifully simple.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Lumis Inc. All rights reserved.</p>

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
