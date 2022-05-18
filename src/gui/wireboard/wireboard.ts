import "./wireboard.css";
import { EventsBase } from "ev/EventsBaseClass";
import { create, append } from "helper/html";
import { Socket } from "./socket"; 

const LETTERS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
  ["A", "S", "D", "F", "G", "H", "J", "K"],
  ["P", "Y", "X", "C", "V", "B", "N", "M", "L"],
];

interface connection {
  side1: Socket,
  side2: Socket
};

class Colors {
  private used: string[] = [];
  private available: string[] = [
    "red",
    "blue",
    "purple",
    "orange",
    "yellow",
    "green",
    "blueviolet",
    "brown",
    "darkgolden",
    "chartreuse",
    "grey",
    "darksalmon",
    "olive",
  ];

  constructor() {
    this.send = this.send.bind(this);
    this.return = this.return.bind(this);
  }

  send(): string {
    let result = this.available.shift();
    this.used.push(result);
    return result;
  }

  return(color: string): void {
    let index = this.used.indexOf(color);
    this.used.splice(index, 1);
    this.available.push(color);
  }
}

export class WireBoard extends EventsBase {
  public div: HTMLElement = create("div", ["wireboard"]);
  private colors: Colors = new Colors();
  private plugs = new Map<string, Socket>();
  private connections = new Map<string, connection>();
  private temp: connection;

  constructor() {
    super(["connected", "disconnected"]);

    let Rows = [
      create("div", ["row"]),
      create("div", ["row"]),
      create("div", ["row"]),
    ];
    for (let i = 0; i < Rows.length; i++) {
      LETTERS[i].forEach((l) => {
        let s = new Socket(l);
        this.plugs.set(l, s);
        Rows[i].appendChild(s.div);
      });
    }
    append(this.div, Rows);
  }
}
