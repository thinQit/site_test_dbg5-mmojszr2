import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

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
      source: "newsletter-form",
    };

    console.log("[NEWSLETTER_SIGNUP]", submission);

    return NextResponse.json(
      {
        success: true,
        message: "You’re in—welcome to the Bake List.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[NEWSLETTER_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
