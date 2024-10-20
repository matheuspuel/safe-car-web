import { useState } from "react";
import { providers } from "../data/providers";
import { states } from "../data/states";

export const SearchView = () => {
  const [state, setState] = useState<{
    tag: string;
    type?: string;
    variant?: string;
  }>({ tag: "init" });
  const [uf, setUf] = useState(states[0]);
  const [city, setCity] = useState("none");

  if (state.tag === "init") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Qual é o seu problema?</div>
        <div>
          <button onClick={() => setState({ tag: "problem" })}>
            Tem um problema no meu veículo
          </button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "list" })}>
            Quero encontrar prestadores de serviço
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "problem") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>O que ocorreu?</div>
        <div>
          <button onClick={() => setState({ tag: "pneu" })}>
            Furou um pneu
          </button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "nao-liga" })}>
            Carro não liga
          </button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "chave" })}>
            Problema com a chave
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "chave") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>O que ocorreu?</div>
        <div>
          <button onClick={() => setState({ tag: "" })}>
            Chave ficou dentro do carro fechado
          </button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "" })}>Perdi a chave</button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "" })}>
            Veículo não reconhece a chave (sistema keyless)
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "pneu") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Possui estepe? (pneu reserva)</div>
        <div>
          <button onClick={() => setState({ tag: "estepe-true" })}>Sim</button>
        </div>
        <div>
          <button onClick={() => setState({ tag: "estepe-false" })}>Não</button>
        </div>
      </div>
    );
  }
  if (state.tag === "estepe-true") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Possui macaco?</div>
        <div>
          <button onClick={() => setState({ tag: "macaco" })}>Sim</button>
        </div>
        <div>
          <button
            onClick={() => setState({ tag: "location", type: "borracharia" })}
          >
            Não
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "macaco") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Está disposto a trocar o pneu sozinho?</div>
        <div>
          <button onClick={() => setState({ tag: "trocar" })}>Sim</button>
        </div>
        <div>
          <button
            onClick={() => setState({ tag: "location", type: "borracharia" })}
          >
            Não
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "trocar") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Vamos te ajudar a trocar o pneu!</div>
        <div>
          <iframe
            height="150"
            width="250"
            src="https://www.youtube.com/embed/x0byqTuIKZI"
          ></iframe>
        </div>
      </div>
    );
  }
  if (state.tag === "location") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          Precisamos saber sua localização para que possamos recomendar os
          prestadores de serviço da região
        </div>
        <div>
          <button
            onClick={() =>
              setState({
                tag: "list-place",
                type: state.type,
                variant: state.variant,
              })
            }
          >
            Buscar localização do dispositivo
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "estepe-false") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          Informe o modelo do seu veículo para que o prestador de serviços leve
          um pneu compatível
        </div>
        <div>
          <div>Tipo de veículo</div>
          <select>
            <option>Escolher</option>
            <option>Automóvel</option>
            <option>Pick-up</option>
            <option>Caminhão</option>
            <option>Moto</option>
          </select>
        </div>
        <div>
          <div>Marca</div>
          <select>
            <option>Escolher</option>
            <option>Chevrolet</option>
            <option>Fiat</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>Toyota</option>
            <option>Outros</option>
          </select>
        </div>
        <div>
          <div>Modelo</div>
          <select>
            <option>Escolher</option>
            <option>Cruze</option>
            <option>Montana</option>
            <option>Onix</option>
            <option>Spin</option>
          </select>
        </div>
        <div>
          <div>Ano</div>
          <select>
            <option>Escolher</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
        <div>
          <button onClick={() => setState({ tag: "location", variant: "map" })}>
            Confirmar
          </button>
        </div>
      </div>
    );
  }
  if (state.tag === "list-place" && state.variant === "map") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          Um prestador de serviços está chegando no local para lhe ajudar!
        </div>
        <div>
          <img
            src="img/uber-car.jpg"
            height={200}
            width={300}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  }
  if (state.tag === "list-place") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>Localização:</div>
        <div>São João Batista</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {providers
            .filter((p) => p.city === "São João Batista")
            .filter((p) => p.type === state.type)
            .map((p) => (
              <Provider key={p.name} {...p} />
            ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <div>Estado</div>
        <select
          value={uf.id}
          onChange={(e) => {
            const state = states.find((s) => s.id === e.target.value)!;
            setUf(state);
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
            setCity(uf.cities.find((c) => c === e.target.value)!)
          }
        >
          <option value="none">Selecione</option>
          {uf.cities.map((c) => (
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
      <div>
        <img
          src={`img/${props.image}`}
          height={100}
          width={140}
          style={{ objectFit: "cover" }}
        />
      </div>
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
