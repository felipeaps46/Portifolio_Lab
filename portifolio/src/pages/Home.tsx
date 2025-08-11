import { Header } from "../components/Header";
import {ExperienceTimeline } from "../components/Experience";
import { ProjectCard } from "../components/Card";
import type { CardType } from "../Types/cardType";

export const Home = () => {

    const meuProjeto: CardType = {
  id: '1',
  title: 'Wavy Movies',
  description: 'Plataforma para encontrar filmes e séries. Permite favoritar conteúdos e direciona para sites oficiais.',
  languages: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'TypeScript'],
  type: 'Sites',
  image: 'https://cdn.discordapp.com/attachments/992497645167097946/1179612745304324206/WhatsApp_Image_2023-11-29_at_17.06.31_24e0b04c.jpg'
};

    return (
        <div>
            <Header />
            <ExperienceTimeline></ExperienceTimeline>
            <ProjectCard 
                project={meuProjeto}
            />
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}