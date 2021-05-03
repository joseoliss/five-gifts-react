
async function getGifsApi({ keyword }) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=8QUhiXcTvy6L9SOCtN9O6ZTp6wdSg6bZ&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    return await fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url }
            })
            return gifs;
        })
};

export default getGifsApi;

