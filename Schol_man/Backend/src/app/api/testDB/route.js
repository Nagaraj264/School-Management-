import { db } from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    return new Response(JSON.stringify({ message: "DB Connected!", result: rows[0].result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
