type RPSObject = "rock" | "paper" | "scissors";

const getMsg = (n: number): string => `Player ${n} won!`;

export function rps(p1: RPSObject, p2: RPSObject): string {
  switch (p1) {
    case "rock":
      switch (p2) {
        case "scissors":
          return getMsg(1);
        case "paper":
          return getMsg(2);
        case "rock":
          return "Draw!";
      }
    case "paper":
      switch (p2) {
        case "rock":
          return getMsg(1);
        case "scissors":
          return getMsg(2);
        case "paper":
          return "Draw!";
      }
    case "scissors":
      switch (p2) {
        case "paper":
          return getMsg(1);
        case "rock":
          return getMsg(2);
        case "scissors":
          return "Draw!";
      }
  }
}
