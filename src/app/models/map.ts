import { TaskEntity } from "./taskentity";

export class Map {

    public Tasks : TaskEntity[];

    public Width : number;

    private _id : string;
    public get Id() : string {
        return this._id;
    }    
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
        this._id = v.toLowerCase().replace(" ","")
    }



    public get Image() : string {
        return "/assets/HD/"+this._id+".png";
    }
    public get Logo() : string {
        return "/assets/logo/"+this._id+".png";
    }
    
    constructor(name: string , width: number) {
        this.Name = name;
        this.Width = width;
    }



}
