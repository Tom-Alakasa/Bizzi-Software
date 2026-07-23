export function DownloadCard() {
  return (
    <div className="footer-cta">
      <div>
        <h2>Comece de graça hoje!</h2>
        <p>Não precisa de cadastro, apenas baixe e use.</p>
      </div>

      <a href="#download" className="footer-btn">
        Baixar Axiom
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
  );
}
