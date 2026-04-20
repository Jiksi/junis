export type Section =
    | 'opening'
    | 'intro'
    | 'couple'
    | 'event'
    | 'wishes'
    | 'gift'
    | 'closing';

export interface Wish {
    id: number;
    name: string;
    message: string;
    created_at: string;
}
