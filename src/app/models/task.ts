import { Map } from "./map";

export class Task {

    public Id: number;

    public Map: Map;

    public Place = null;

    public Name: string;

    public Location: [number, number, number, number];

    public static Lenghts = { Short: "Short", Normal: "Normal", Long: "Long" };

    public Lenght = Task.Lenghts[1];

    public static Types = { Common: "Common", Normal: "Normal", Visual: "Visual", Vent: "Vent", Sabotage: "Sabotage" };

    public Type = Task.Types.Normal;

    /**
     *
     */
    constructor(map, type, location) {
        this.Map = map;
        this.Name = type;
        this.Location = location;
    }
}
