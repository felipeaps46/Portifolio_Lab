from service.EmailService import EmailService
from model.Email import Email
from controller.EmailController import EmailController


emailService = EmailService(Email())
emailController = EmailController(emailService)
