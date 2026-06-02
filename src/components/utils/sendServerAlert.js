import { Urlconstant } from "../constant/Urlconstant";

export const sendServerAlert = async (bodyMessage) => {
  try {
    const payload = {
      Recipients: {
        To: [
          "xworkzdev@gmail.com",
          "xworkzdev2@gmail.com",
          "xworkzdev3@gmail.com",
          "xworkzdev4@gmail.com",
        ],
      },

      Content: {
        From: "contact@x-workz.in",

        FromName: "X-workz",

        Subject: "Backend Service Alert",

        ReplyTo: "contact@x-workz.in",

        Body: [
          {
            ContentType: "PlainText",

            Content: bodyMessage,
          },
        ],
      },
    };

    const response = await fetch(
      "https://api.elasticemail.com/v4/emails/transactional",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-ElasticEmail-ApiKey": Urlconstant.ELASTIC_API,
        },
        body: JSON.stringify(payload),
      },
    );

    const result = await response.json();

    console.log("Elastic Result:", result);

    if (!response.ok) {
      throw new Error(JSON.stringify(result));
    }

    console.log("Mail sent successfully");
  } catch (error) {
    console.log(
      "Elastic Error",
      error,
    );
  }
};
