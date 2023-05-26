const baseUrl = process.env.NODE_ENV === "production" 
? 'https://ariadne.inc' 
: 'http://localhost:3000';

export default baseUrl;