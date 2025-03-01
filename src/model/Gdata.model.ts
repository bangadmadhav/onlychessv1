import mongoose, { Schema, Document } from "mongoose";
import { GdataType } from "@/types/GameType";
import { MoveType } from "@/types/MoveType.js"

const MoveSchema: Schema<MoveType> = new Schema({
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

const GdataSchema: Schema<GdataType> = new Schema({
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

const Gdata = (mongoose.models.Gdata as mongoose.Model<GdataType>) || mongoose.model<GdataType>("Gdata", GdataSchema);

export default Gdata;
