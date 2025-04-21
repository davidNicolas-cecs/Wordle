import client from "../db";
import { UserCreate } from "../types";
import { History } from "../model/History";

export class User {
  private static TABLE_NAME: string = "user";

  public static async addUser(user: Partial<UserCreate>) {
    const query = `INSERT INTO "user" (username, email) VALUES ($1, $2) RETURNING id`;
    const result = await client.query(query, [user.username, user.email]);
    // Create history entry for user
    await History.createHistoryEntry(result.rows[0].id);
    return result.rows[0]?.id;
  }
  public static async loginUser(user: Partial<UserCreate>) {
    const query = `SELECT id FROM "user" WHERE username = $1 AND email = $2 `;
    const result = await client.query(query, [user.username, user.email]);
    return result.rows[0]?.id;
  }
  public static async getUserFavorites(userId: number) {
    const query = `
      SELECT u.username, u.email, f.word_id, w.word 
      FROM public."user" u 
      JOIN public."favorites" f ON u.id = f.user_id 
      JOIN public."wordles" w ON f.word_id = w.id
      WHERE u.id = $1
    `;
    const result = await client.query(query, [userId]);
    return result.rows;
  }
}
