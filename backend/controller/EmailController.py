from fastapi import Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from model.Email import Email
from service.EmailService import EmailService

class EmailRequest(BaseModel):
    recipient: EmailStr
    subject: str
    body: str


class EmailController:
    def __init__(self, email_service: EmailService):
        self.email_service = email_service

    def sendEmail(self, email_request: EmailRequest):
        ok, msg = self.email_service.send_email(email_request.recipient, email_request.subject, email_request.body)
        if not ok:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=msg)
        return {"message": msg}