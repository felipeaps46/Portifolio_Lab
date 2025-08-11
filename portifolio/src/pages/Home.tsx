import { Header } from "../components/Header";
import {ExperienceTimeline } from "../components/Experience";

export const Home = () => {
    return (
        <div>
            <Header />
            <ExperienceTimeline></ExperienceTimeline>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}