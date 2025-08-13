import os
from langchain import hub
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import PyPDFLoader 
from langchain_chroma import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv

load_dotenv()

key = os.environ["GEMINI_API_KEY"]

model = ChatGoogleGenerativeAI(
    model="gemini-2.5-pro",
    google_api_key=key

)

pdf_path = "media/Profile.pdf"
loader = PyPDFLoader(pdf_path)

docs = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
)

chunks = text_splitter.split_documents(
    documents=docs
)

embedding = GoogleGenerativeAIEmbeddings(model="gemini-embedding-001", google_api_key=key)

vector_store = Chroma.from_documents(
    documents=chunks,
    embedding=embedding,
    collection_name="profile_information"
)

retriever = vector_store.as_retriever()

prompt = hub.pull('rlm/rag-prompt')

rag_chain = (
    {
        'context': retriever,
        'question': RunnablePassthrough()
    }
    | prompt
    | model
    | StrOutputParser()
)

question = "Me conte sobre as experiências profissionais de Guilherme"

response = rag_chain.invoke(question)

print(response)