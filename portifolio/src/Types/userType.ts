export type User = {
    name: string,
    img?: string,
    desc: string,
    links?: {
        github?: string,
        linkedin?: string,
        email?: string
    },
    telefone?: string,
    curriculo: string,
    caracteristicas: string[]
} 