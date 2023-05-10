export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toMovie = ({ id }) => `/movies/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/person/${id}`;
