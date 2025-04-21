import client from "../db";
export class History {
  private static TABLE_NAME: string = "history";

  public static async createHistoryEntry(userId: string) {
    const query = `INSERT INTO ${this.TABLE_NAME} (user_id, games_played, games_won) VALUES ($1, 0, 0)`;
    await client.query(query, [userId]);
  }

  public static async getUserHistory(userId: string) {
    const query = `SELECT games_played, games_won FROM ${this.TABLE_NAME} WHERE user_id = $1`;
    const result = await client.query(query, [userId]);
    return result.rows[0];
  }

  public static async incrementGameWon(userId: string) {
    const query = `UPDATE ${this.TABLE_NAME} SET games_won = games_won + 1, games_played = games_played + 1 WHERE user_id = $1`;
    await client.query(query, [userId]);
  }
  public static async incrementTotalGames(userId: string) {
    const query = `UPDATE ${this.TABLE_NAME} SET games_played = games_played + 1 WHERE user_id = $1`;
    await client.query(query, [userId]);
  }
}
