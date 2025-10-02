import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/api";
import DetailCharacter from "../components/PageCharacter/DetailCharacter";
import type { Character } from "../types/character";
import "../styles/globals.scss";

const Home: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState<number>(20);

    useEffect(() => {
        const load = async () => {
            const data = await fetchCharacters();
            setCharacters(data);
            setLoading(false);
        };
        load();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 20);
    };

    if (loading) return <p className="loading">Carregando...</p>;

    return (
        <div className="container">
            <div className="banner"><img src="../../public/castlehogwarts.jpg" alt="" /></div>
            <h1>Personagens Saga Harry Potter</h1>
            <div className="grid">
                {characters.slice(0, visibleCount).map((c, index) => (
                    <DetailCharacter key={index} {...c} />
                ))}
            </div>
            <div  className="load-more-button">
                {visibleCount < characters.length && (
                    <button onClick={handleLoadMore}>
                        Carregar Mais
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;