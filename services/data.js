import { API_URL, API_URL_SEARCH, API_URL_SHOWS } from "./api"

export const tvMazeGirls = async (movie = 'girls') => {
  try {
    const res = await fetch(`${API_URL_SHOWS}${Boolean(movie) ? movie : 'girls'}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    alert("Data failed to be fetched.")
  }
}

export const tvMazeSearch = async (movie = '') => {
  const res = await fetch(`${API_URL_SEARCH}${movie}`)
  const data = await res.json();
  return data;
}

export const tvMazeShowsDetail = async (id) => {
  try {
    const res = await fetch(`${API_URL_SHOWS}/${id}`)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    alert("Data failed to be fetched.")
  }
  
}