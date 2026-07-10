import Card from "../Card";
import "./features.css";
import { BigText } from "../BigText";
import { FaBoxes, FaLock, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdBolt } from "react-icons/md";
export default function Features() {
  return (
    <>
      <BigText>Por que nos escolher?</BigText>
      <>
        <div className="cardArea">
          <div className="cardContainer">
            <Card
              description="Cadastre, edite e organize seus produtos de forma rápida e intuitiva."
              icon={<FaBoxes size={30} />}
              title="Gestão de Produtos Simplificada"
            ></Card>
            <Card
              description="Acompanhe entradas, saídas e quantidade disponível sem complicação."
              icon={<GoGraph size={30} />}
              title="Controle de Estoque em Tempo Real"
            ></Card>
            <Card
              description="Encontre tudo o que precisa em poucos cliques, sem curva de aprendizado."
              icon={<MdBolt size={30} />}
              title="Interface Rápida e Intuitiva"
            ></Card>
            <Card
              description="Localize qualquer produto instantaneamente por nome, categoria ou código."
              icon={<FaSearch size={25} />}
              title="Busca Inteligente"
            ></Card>
            <Card
              description="Tenha uma visão clara do desempenho do seu estoque para tomar melhores decisões."
              icon={<FaRegNewspaper size={30} />}
              title="Relatórios e Indicadores"
            ></Card>
            <Card
              description="Dados protegidos para gerenciar seu comercio tranquilamente. "
              icon={<FaLock size={25} />}
              title="Segurança e Confiança"
            ></Card>
          </div>
        </div>
      </>
    </>
  );
}
