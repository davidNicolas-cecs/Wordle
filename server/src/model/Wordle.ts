import client from "../db";

export class Wordle {
  private word: string;
  private static TABLE_NAME: string = "Wordles";
  public constructor(word: string) {
    this.word = word.toLowerCase();
  }

  public static async addWord(word: string) {
    //wont check for duplicates because thats fine
    const query = `INSERT INTO ${this.TABLE_NAME} (word) VALUES ($1)`;
    await client.query(query, [word]);
  }
}
