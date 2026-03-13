import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

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
      source: "contact-form",
    };

    console.log("[CONTACT_SUBMISSION]", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent—thanks for reaching out.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
