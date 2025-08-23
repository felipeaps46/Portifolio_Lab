let API_URL = "";
if(window.location.hostname === "localhost"){
  API_URL = "http://localhost:8000";
}else{
  API_URL = "https://portifolio-backend-yq9i.onrender.com";
}


export default API_URL;