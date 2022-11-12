import { API_URL_SEARCH, API_URL_SHOWS, API_URL_SHOWS_STANDARD } from "./api"

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
    const res = await fetch(`${API_URL_SHOWS_STANDARD}/${id}`)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    alert("Data failed to be fetched.")
  }
  
}