import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = orderSchema.safeParse(body);

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
      source: "pickup-order-form",
    };

    console.log("[PICKUP_ORDER_REQUEST]", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Pickup request received—watch your inbox for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ORDERS_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
