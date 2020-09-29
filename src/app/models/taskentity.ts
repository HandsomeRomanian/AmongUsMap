import { Map } from "./map";
import { Task } from "./task";

export class TaskEntity {

    public Id: number;

    public Map: Map;

    public Name: string;

    public Location: [number, number, number, number];

    public static Lenghts = { Short: "Short", Normal: "Normal", Long: "Long" };

    public Lenght = TaskEntity.Lenghts[1];

    public static Types = { Common: "Common", Normal: "Normal", Visual: "Visual", Vent: "Vent", Sabotage: "Sabotage" };

    public Type = TaskEntity.Types.Normal;

    /**
     *
     */
    constructor(map, type, location) {
        this.Map = map;
        this.Name = type;
        this.Location = location;
    }
}
