import mongoose, { Schema, Document } from "mongoose";

export interface Move extends Document {
    movePlayed: string;
    bestMove: string;
    evaluation: string;
    comment: string;
};
export interface Gdata extends Document{
    event: string;
    gameTitle: string;
    gameDetails: string;
    white: string;
    black: string;
    result: string;
    moves: Move[];
};

const MoveSchema: Schema<Move> = new Schema({
    movePlayed:{
        type: String,
        required: true
    },
    bestMove:{
        type: String,
    },
    evaluation:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
});

const GdataSchema: Schema<Gdata> = new Schema({
    event:{
        type: String,
        required: true,
        default: "Casual Game"
    },
    gameTitle:{
        type: String,
        required: true
    },
    gameDetails:{
        type: String,
        required: true
    },
    white:{
        type: String,
        required: true
    },
    black:{
        type: String,
        required: true
    },
    result:{
        type: String,
        enum: ["1-0", "0-1", "1/2-1/2", "*"],
        required: true
    },
    moves:{
        type: [MoveSchema],
        default: []
    }
});

const GdataModel = (mongoose.models.Gdata as mongoose.Model<Gdata>) || mongoose.model<Gdata>("Gdata", GdataSchema);

export default GdataModel;
