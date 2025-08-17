from fastapi import APIRouter
from container import emailController, chatController
from pydantic import BaseModel


apiRouter = APIRouter()

class ChatAskRequest(BaseModel):
    question: str
    prompt: str | None = None

class ChatAnswer(BaseModel):
    answer: str


# @def send_email()
apiRouter.post("/email/send")(emailController.sendEmail)