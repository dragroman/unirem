import { NextRequest, NextResponse } from "next/server"
import { drupal } from "@/lib/drupal"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const url = drupal.buildUrl("/webform_rest/submit")

    console.log(body)

    // Submit to Drupal.
    const result = await drupal.fetch(url.toString(), {
      method: "POST",
      body: JSON.stringify({
        webform_id: "call_back",
        name: body.name,
        phone: body.phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!result.ok) {
      throw new Error("Ошибка при отправке формы в Drupal")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: unknown) {
    console.error("Ошибка при обработке запроса:", error)

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(
      { error: "Произошла неизвестная ошибка" },
      { status: 400 }
    )
  }
}
