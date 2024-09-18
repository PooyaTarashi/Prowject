const Comment = ({ name, rating, image, comment }) => {
    return (
        <div className="comment-card">
            <i className="comment-rating"><b>{rating}</b>/5</i>
            <div className="commenter">
                <img src={image} className="commenter-image" height={'70px'}/>
                <h3>{name}</h3>
            </div>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;