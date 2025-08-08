from fastapi import APIRouter
from container import emailController

apiRouter = APIRouter()

apiRouter.post("/email/send")(emailController.sendEmail)