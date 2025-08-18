import type { User } from "../Types/userType";
import profileImg from "../assets/profile.jpeg";
import curriculo from "../assets/curriculo.pdf"

export const userData: User = {
    name: "Guilherme Vieira",
    img: profileImg,
    desc: "Desenvolvedor Full Stack",
    links:{
        github: "https://github.com/GuilhermeVieira",
        linkedin: "https://www.linkedin.com/in/guilherme-arvieira/",
        email: "guilhermearv3@gmail.com"
    },
    telefone: "+5531986991214",
    curriculo,
    caracteristicas:[
        "Fullstack",
        "Backend",
        "de IA",
        "de Software"
    ]
}