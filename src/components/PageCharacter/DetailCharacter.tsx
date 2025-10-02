import type { Character } from "../../types/character";
import styles from "./DetailCharacter.module.scss";

interface Props extends Character {}

const DetailCharacter: React.FC<Props> = ({ name, actor, dateOfBirth, house, patronus, alive, image }) => { 

    const houseClass = house ? styles[house.toLowerCase()] : "";

    return (
        <div className={`${styles.card} ${houseClass}`}>
            <img src={image || "../public/hpcasaslogo.png"} alt={name} />
            <h2>{name}</h2>
            <p><strong>Ator:</strong> {actor}</p>
            <p><strong>Nascimento:</strong> {dateOfBirth || "Desconhecido"}</p>
            <p><strong>Casa:</strong> {house || "-----"}</p>
            <p><strong>Patrono:</strong> {patronus || "-----"}</p>
            <span className={alive ? styles.alive : styles.dead}>
                {alive ? "Vivo" : "Morto"}
            </span>
        </div>
    );
};

export default DetailCharacter;