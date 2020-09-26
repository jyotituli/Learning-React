import axios from 'axios';


//customized 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 
        'Client-ID T0defSMGhS6eaqO6mhejTITjxmowF8qE_I-NqqHL3JE'
    }
});