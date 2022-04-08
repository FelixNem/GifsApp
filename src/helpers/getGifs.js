
export const getGifs = async( category, cant=10 ) => {
    const api_key='TFz1GBaO67SZ0CaDgboIG8nqAL6jshnv';
    //encodeURI es para poder meter un texto con espacio a una link d eurl
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${ encodeURI(cant) }&api_key=${ api_key }`;
    
    const resp =await fetch( url );
    const { data } =await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
