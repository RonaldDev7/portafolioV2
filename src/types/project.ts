export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string[];
    repo: string;
    year: string;

    demo?: string;
    featured?: boolean;
    image?: string;
}