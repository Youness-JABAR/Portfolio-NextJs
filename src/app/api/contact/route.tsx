import { NextResponse } from "next/server";
import { sendSendGridMessage } from "@/services/sendgrid";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Log the received data (optional for debugging)
    console.log("Received data:", body);

    // Send the email using SendGrid
    await sendSendGridMessage(body);

    // Return success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (err) {
    // Handle errors
    console.error("Error occurred:", err);

    // Extract error details
    const errorMessage =
      (err as Error).message || "An unexpected error occurred.";
    const statusCode = (err as any).code || 500; // Default to 500 if no specific code is provided

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: statusCode }
    );
  }
}
