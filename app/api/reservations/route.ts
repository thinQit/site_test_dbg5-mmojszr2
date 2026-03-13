import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input.",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const submission = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      source: "reservation-form",
    };

    console.log("[RESERVATION_REQUEST]", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Thanks—your request is in. We’ll confirm shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[RESERVATIONS_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
