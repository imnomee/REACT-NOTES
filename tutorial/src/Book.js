const Book = (props) => {
    const { title, img, author, number } = props;

    return (
        <article className="item">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className="number">{`# ${number + 1}`}</span>
        </article>
    );
};

export default Book;
