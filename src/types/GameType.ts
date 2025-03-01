import { MoveType } from "./MoveType.js"

export interface GdataType extends Document{
    event: string;
    gameTitle: string;
    gameDetails: string;
    white: string;
    black: string;
    result: string;
    moves: MoveType[];
};