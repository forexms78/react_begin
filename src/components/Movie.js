import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Movie = ({coverImg,id,title,summary,genres}) => {
    return (
        <div >
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}
                </Link> </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li>{g}</li>)}
            </ul>
        </div>
    );
}


Movie.prototype = {
    coverImg : PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    generator: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;