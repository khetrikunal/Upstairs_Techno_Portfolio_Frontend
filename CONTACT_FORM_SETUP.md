# Contact form delivery

The contact page submits to `POST /api/contact`. The route validates the submitted fields and sends accepted enquiries through Resend to `contact@upstairstechno.com`.

Configure these server-side environment variables in the deployment environment to enable delivery:

- `RESEND_API_KEY`: Resend API key. Keep this secret and do not prefix it with `NEXT_PUBLIC_`.
- `CONTACT_FROM_EMAIL`: sender address verified with Resend for the sending domain.

If either value is missing, the API returns a service-unavailable response with the direct contact email. If Resend rejects the request or is unavailable, the API returns an error; the page only shows success after Resend accepts the message.
