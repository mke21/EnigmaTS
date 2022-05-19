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
  side1: Socket;
  side2: Socket;
}

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
    "salmon",
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
  private sockets = new Map<string, Socket>();
  private connections = new Map<string, connection>();
  private temp: connection = null;

  constructor() {
    super(["connected", "disconnected"]);
    this.clickedSocket = this.clickedSocket.bind(this);

    let Rows = [
      create("div", ["row"]),
      create("div", ["row"]),
      create("div", ["row"]),
    ];
    for (let i = 0; i < Rows.length; i++) {
      LETTERS[i].forEach((l) => {
        let s = new Socket(l);
        s.addEventListener("clicked", this.clickedSocket);
        this.sockets.set(l, s);
        Rows[i].appendChild(s.div);
      });
    }
    append(this.div, Rows);
  }

  clickedSocket(letter: string): void {
    // if part of connection, remove connection
    if (this.connections.has(letter)) {
      let conn = this.connections.get(letter);
      this.colors.return(conn.side1.color);
      conn.side1.removeColor();
      conn.side2.removeColor();
      this.connections.delete(conn.side1.letter);
      this.connections.delete(conn.side2.letter);
      this._events.disconnected.notify({ // raise disconnected
        side1: conn.side1.letter,
        side2: conn.side2.letter,
      });
      return;
    }

    // else if no connection is already set, set temp connection with one half
    if (this.temp === null) {
      let socket = this.sockets.get(letter);
      socket.color = this.colors.send();
      this.temp = { side1: socket , side2: null };
      return;
    }

    // if this is the current temp setting, remove
    if (this.temp.side1.letter === letter) {
      this.colors.return(this.temp.side1.color);
      this.temp.side1.removeColor(); 
      this.temp = null;
      return;
    }
    // else if half of connection is already set, set connection
    if (this.temp !== null) {
      this.temp.side2 = this.sockets.get(letter);
      this.temp.side2.color = this.temp.side1.color;
      this.connections.set(this.temp.side1.letter, this.temp);
      this.connections.set(this.temp.side2.letter, this.temp);
      this._events.connected.notify({ // raise connected
        side1: this.temp.side1.letter,
        side2: this.temp.side2.letter,
      });
      this.temp = null;
      return;
    }
  }
}
