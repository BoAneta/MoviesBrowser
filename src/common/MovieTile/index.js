import { Tile, Poster, Content, Title, Year, Tags, Tag, TagName, Rating, Star, Rate, Votes, PosterWrapper } from "./styled";
import { img } from "../../core/apiCodes";
import { Genres } from "../../features/MoviesList/Genres";
import noPoster from "../img/no-poster.svg";

export const MovieTile = ({ movie, genres }) => {
    const genresMovie = Genres.filter((genre) => genres.includes(genre.id));
    return (
        <Tile>
            <PosterWrapper>
                {movie.poster_path ? (
                    <Poster src={`${img}${movie.poster_path}`} alt="movie poster" />
                ) : (
                    <img src={noPoster} alt="poster in not available" />
                )}

            </PosterWrapper>
            <Content>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                <Tags>
                    {genres ? genresMovie.map((genre) => (
                        <Tag key={genre.id}>
                            <TagName>{genre.name}</TagName>
                        </Tag>
                    )) : null}
                </Tags>
                <Rating>
                    <Star />
                    <Rate>{movie.vote_average}</Rate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rating>
            </Content>
        </Tile>
    )
}