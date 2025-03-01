import {Gdata as GdataType} from "@/model/Gdata.model";


export interface ApiResponse{
    success: boolean;
    message: string;
    data: GdataType;
}