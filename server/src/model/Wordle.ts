import client from "../db";

export class Wordle {
  private word: string;

  public constructor(word: string) {
    this.word = word.toLowerCase();
  }

  public static async addWord(word: string) {
    //wont check for duplicates because thats fine
    await client.query("INSERT INTO Wordles (word) VALUES ($1)", [word]);
  }
}
