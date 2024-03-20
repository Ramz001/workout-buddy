const mailOptions = (email, otpCode) => {
  return {
    from: {
      name: "Mr Workout Buddy",
      address: "rkenjaev1@gmail.com",
    },
    to: email,
    subject: "One-time verification code",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OTP verification code</title>
        <style>
          body {
            margin: 0;
            background-color: rgb(241 245 249);
          }
          table {
            border-spacing: 0;
          }
          td {
            padding: 0;
          }
          img {
            border: 0;
          }
        </style>
      </head>
      <body>
        <main class="wrapper" style="width: 100%; table-layout: fixed">
          <table
            style="
              max-width: 600px;
              margin: 0 auto;
              border-spacing: 0;
              font-family: 'Inter', sans-serif;
            "
            width="100%"
          >
            <tr>
              <td>
                <table>
                  <h1
                    style="color: rgb(22 163 74); text-align: center"
                    title="Mr Workout Buddy"
                  >
                    Mr Workout Buddy
                  </h1>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style="
                  background-color: rgb(226 232 240);
                  border-radius: 10px;
                  padding: 0.5rem 1rem 1.5rem 1rem;
                "
              >
                <table width="100%">
                  <p>
                    You are receiving this email because a request was made for a
                    one-time code that can be used for authentication.
                  </p>
                  <p>Please enter the following code for verification:</p>
                  <code
                    style="
                      font-weight: bold;
                      font-size: 1.5rem;
                      letter-spacing: 0.1rem;
                      text-align: center;
                    "
                  >
                    ${otpCode}
                  </code>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <p style="font-size: 0.8rem; color: rgb(148 163 184)">
                    This message was sent from Mr Workout Buddy's creator.
                  </p>
                </table>
              </td>
            </tr>
          </table>
        </main>
      </body>
    </html>
    `,
  };
};

/* :root {
    --slate-50: rgb(248 250 252);
    --slate-100: rgb(241 245 249);
    --slate-200: rgb(226 232 240);
    --slate-300: rgb(203 213 225);
    --slate-400: rgb(148 163 184);
    --slate-800: rgb(30 41 59);
    --slate-900: rgb(15 23 42);
    --green-600: rgb(22 163 74);
  } */

module.exports = mailOptions;
