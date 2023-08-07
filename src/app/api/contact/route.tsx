// import type { NextApiRequest, NextApiResponse } from 'next';
// export async function GET(req: NextApiRequest) {
//     return new Response("This is a new API route");
//   }

  import type { NextApiRequest, NextApiResponse } from 'next';
  import { ResponseError } from '@sendgrid/mail';
  import { NextResponse } from 'next/server'
import { validateCaptcha } from '@/services/recaptcha';
import { sendSendGridMessage } from '@/services/sendgrid';


  
  export  async function POST(request: Request) {
            const body  = await request.json();
            try {
                  console.log(body);
                  // await validateCaptcha(body['g-recaptcha-response']);
                  await sendSendGridMessage(body);
                  return NextResponse.json({
                    success: true,
                  }, { status: 200 });
                } catch (err) {
                  const error = err as ResponseError;
                  const code = error.code || 400;
                  return NextResponse.json({
                    success: false,
                    message: error.message,
                  }, { status: code });
                }
    }

  