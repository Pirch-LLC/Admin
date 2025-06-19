// const baseUrl = "https://0fbc-223-178-213-136.ngrok-free.app/";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
// const baseUrl ="https://02cc-2405-201-5023-4037-f45c-a87a-73b9-f00e.ngrok-free.app/";
const endPointUrl = baseUrl + "api/";
const constants = { endPointUrl, baseUrl };
export default constants;
