import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn"

export const SubscribeForm = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => {
        return (
          <div>
            <MailchimpSubscribe onSubmitted={formData => subscribe(formData)} />
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </div>
        )
      }}
    />
  )
}
