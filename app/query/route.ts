import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: process.env.NODE_ENV === "production" ? "require" : false,
});

export async function GET() {
  try {
    const result = await sql`SELECT NOW()`;
    return Response.json({
      success: true,
      message: "Connected to PostgreSQL",
      time: result[0].now,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
