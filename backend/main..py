from fastapi import FastAPI
from routes.router import apiRouter

app = FastAPI()

app.include_router(apiRouter)


