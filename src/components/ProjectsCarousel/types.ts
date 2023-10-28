import { ProjectCardProps } from "./ProjectCard/types";

export interface ProjectsCarouselProps  {
    itemList: ProjectCardProps[];
    activeItem: number;
}

export enum NavOptions  {
    prev = 'PREV',
    next = 'NEXT'
}