import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { 
            Authorization: 'Client-ID K04fs0vEbpvHWByqZ1RzNNfasno049eoGZLQ_4A4VsY'
        }, 
        params: {
            query: term,

        }
    });

    return response.data.results;
};

export default searchImages;