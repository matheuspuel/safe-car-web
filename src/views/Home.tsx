import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ fontSize: 32 }}>Safe Car</div>
      <div style={{ fontSize: 24 }}>Imprevisto no trânsito?</div>
      <div style={{ fontSize: 24 }}>
        Vamos te ajudar a resolver seu problema!
      </div>
      <div>
        <Link to="search">
          <button>Preciso de ajuda!</button>
        </Link>
      </div>
      <div>
        <Link to="subscribe">
          <a>Sou prestador de serviços e quero me inscrever</a>
        </Link>
      </div>
    </div>
  );
};
