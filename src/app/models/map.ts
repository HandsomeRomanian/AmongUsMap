import { TaskEntity } from "./taskentity";

export class Map {

    public tasks : TaskEntity[];

    private _id : string;
    public get id() : string {
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

    public get image() : string {
        return "/assets/HD/"+this._id+".png";
    }
    public get logo() : string {
        return "/assets/logo/"+this._id+".png";
    }
    
    constructor(name: string) {
        this.Name = name;
    }



}
