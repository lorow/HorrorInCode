from django.core.mail import send_mail as email_send


def send_email(name: str, email: str, subject: str, message: str) -> None:
    email_send(
        subject=subject,
        message=f"From:{name} \n\n" + message,
        from_email=email,
        recipient_list=['goik.zdzislaw@gmail.com']
    )
