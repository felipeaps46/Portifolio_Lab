export type ProjectType = 'Sites' | 'Landing Pages' | 'Aplicativos' | 'E-Commerce' | 'Outros';

export interface CardType {
    id: string,
    title: string,
    description: string,
    languages: string[],
    type: ProjectType,
    image?: string,
    video?: string,
    highlight?: boolean
    date: string
    siteLink?: string,
    gitHubLink?: string
}

