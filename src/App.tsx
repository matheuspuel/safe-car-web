import { useState } from "react";
import "./App.css";

type Route = string;

type SetRoute = React.Dispatch<React.SetStateAction<Route>>;

function App() {
  const [route, setRoute] = useState("home");

  if (route === "home") {
    return;
  } else {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {/* <div style={{ display: "flex", alignSelf: "start" }}>Voltar</div> */}
        {route === "home" ? (
          <HomeView setRoute={setRoute} />
        ) : route === "search" ? (
          <SearchView />
        ) : (
          <SubscribeView />
        )}
      </div>
    );
  }
}

const HomeView = ({ setRoute }: { setRoute: SetRoute }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ fontSize: 32 }}>Safe Car</div>
      <div style={{ fontSize: 24 }}>Imprevisto no trânsito?</div>
      <div style={{ fontSize: 24 }}>
        Encontre um profissional para resolver seu problema!
      </div>
      <div>
        <button onClick={() => setRoute("search")}>
          Buscar prestador de serviços
        </button>
      </div>
      <div>
        <button onClick={() => setRoute("subscribe")}>
          Sou prestador de serviços e quero me inscrever
        </button>
      </div>
    </div>
  );
};

const states = [
  {
    id: "SC",
    cities: ["Brusque", "Nova Trento", "São João Batista"],
  },
  {
    id: "SP",
    cities: ["São Paulo", "Santos", "Sorocaba"],
  },
  {
    id: "PR",
    cities: ["Curitiba", "Ponta Grossa", "Maringá"],
  },
];

const providers = [
  {
    name: "Oficina Stock Car",
    city: "São João Batista",
    phone: "(48) 99999-9999",
    stars: 5,
  },
  {
    name: "Borracharia do Zé",
    city: "São João Batista",
    phone: "(48) 91111-1111",
    stars: 3,
  },
  {
    name: "Guincho do João",
    city: "Nova Trento",
    phone: "(48) 91234-5678",
    stars: 2,
  },
];

const SearchView = () => {
  const [state, setState] = useState(states[0]);
  const [city, setCity] = useState("none");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <div>Estado</div>
        <select
          value={state.id}
          onChange={(e) => {
            const state = states.find((s) => s.id === e.target.value)!;
            setState(state);
            setCity("none");
          }}
        >
          {states.map((s) => (
            <option value={s.id} onSelect={() => console.log(1)}>
              {s.id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>Cidade</div>
        <select
          value={city}
          onChange={(e) =>
            setCity(state.cities.find((c) => c === e.target.value)!)
          }
        >
          <option value="none">Selecione</option>
          {state.cities.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {providers
          .filter((p) => p.city === city)
          .map((p) => (
            <Provider key={p.name} {...p} />
          ))}
      </div>
    </div>
  );
};

const Provider = (props: (typeof providers)[0]) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>{props.name}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {new Array(5).fill(0).map((_, i) => (
          <div key={i}>{props.stars > i ? "★" : "☆"}</div>
        ))}
      </div>
      {show ? (
        <div>{props.phone}</div>
      ) : (
        <button onClick={() => setShow(true)}>Mostrar telefone</button>
      )}
    </div>
  );
};

const SubscribeView = () => {
  return (
    <div>
      <div>Serviço ainda não implementado</div>
      <div>Volte em breve</div>
    </div>
  );
};

export default App;
