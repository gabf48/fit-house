import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
export interface Articole {
    id: number,
    color: string,
    icon: IconName | string | IconProp,
    titlu: string,
    poza: string,
    descriere: string;
}