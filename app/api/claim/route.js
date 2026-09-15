import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const allowedFileTypes = [
    "image/jpeg",
    "video/mp4",
];

function escapeHtml(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(req) {
    try {
        const formData = await req.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const state = formData.get("state");
        const smsAuthorization = formData.get("smsAuthorization");

        const productType = formData.get("productType");
        const purchaseDate = formData.get("purchaseDate");
        const failureDate = formData.get("failureDate");
        const productIssue = formData.get("productIssue");

        const attachments = formData.getAll("attachments");

        if (
            !name ||
            !email ||
            !phone ||
            !state ||
            !smsAuthorization ||
            !productType ||
            !purchaseDate ||
            !failureDate ||
            !productIssue
        ) {
            return Response.json(
                {
                    success: false,
                    message: "Please complete all required fields.",
                },
                {
                    status: 400,
                },
            );
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return Response.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                {
                    status: 400,
                },
            );
        }

        for (const file of attachments) {
            if (!file || typeof file === "string") continue;

            if (!allowedFileTypes.includes(file.type)) {
                return Response.json(
                    {
                        success: false,
                        message:
                            "Only JPG and MP4 files are allowed.",
                    },
                    {
                        status: 400,
                    },
                );
            }

            if (file.size > MAX_FILE_SIZE) {
                return Response.json(
                    {
                        success: false,
                        message:
                            "Each attachment must be 2 MB or smaller.",
                    },
                    {
                        status: 400,
                    },
                );
            }
        }

        const mailAttachments = await Promise.all(
            attachments
                .filter(
                    (file) =>
                        file &&
                        typeof file !== "string" &&
                        file.size > 0,
                )
                .map(async (file) => ({
                    filename: file.name,
                    content: Buffer.from(
                        await file.arrayBuffer(),
                    ),
                    contentType: file.type,
                })),
        );

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"TruCare Claims" <${process.env.EMAIL_USER}>`,

            to:
                process.env.CLAIMS_EMAIL ||
                process.env.EMAIL_USER,

            replyTo: email,

            subject: `New TruCare Claim - ${name} - ${productType}`,

            attachments: mailAttachments,

            html: `
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            font-family: Arial, Helvetica, sans-serif;
            color: #171717;
          "
        >
          <div
            style="
              background: #dc2626;
              padding: 24px 28px;
              border-radius: 14px 14px 0 0;
            "
          >
            <h1
              style="
                margin: 0;
                font-size: 24px;
                color: #ffffff;
              "
            >
              New TruCare Claim
            </h1>
          </div>

          <div
            style="
              border: 1px solid #e5e5e5;
              border-top: 0;
              padding: 28px;
              border-radius: 0 0 14px 14px;
            "
          >
            <h2 style="margin-top: 0;">
              Customer Information
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone:</strong>
              ${escapeHtml(phone)}
            </p>

            <p>
              <strong>State / Province:</strong>
              ${escapeHtml(state)}
            </p>

            <p>
              <strong>SMS Authorization:</strong>
              ${escapeHtml(smsAuthorization)}
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #e5e5e5;
                margin: 28px 0;
              "
            />

            <h2>
              Product Information
            </h2>

            <p>
              <strong>Product Type:</strong>
              ${escapeHtml(productType)}
            </p>

            <p>
              <strong>Date of Delivery / Purchase:</strong>
              ${escapeHtml(purchaseDate)}
            </p>

            <p>
              <strong>Failure Report Date:</strong>
              ${escapeHtml(failureDate)}
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #e5e5e5;
                margin: 28px 0;
              "
            />

            <h2>
              Product Issue
            </h2>

            <p
              style="
                white-space: pre-wrap;
                line-height: 1.7;
              "
            >
              ${escapeHtml(productIssue)}
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #e5e5e5;
                margin: 28px 0;
              "
            />

            <p>
              <strong>Attachments:</strong>
              ${mailAttachments.length
                    ? `${mailAttachments.length} file(s) attached`
                    : "No attachments"
                }
            </p>
          </div>
        </div>
      `,
        });

        return Response.json({
            success: true,
            message: "Claim submitted successfully.",
        });
    } catch (error) {
        console.error("Claim submission error:", error);

        return Response.json(
            {
                success: false,
                message:
                    "Unable to submit your claim. Please try again.",
            },
            {
                status: 500,
            },
        );
    }
}