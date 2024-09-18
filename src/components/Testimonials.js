import Comment from "./Comment";
import profilePhoto from '../icons_assets/prof.jpg'

const Testimonials = () => {
    const cmnt = {
        name: 'John',
        rating: 5,
        image: profilePhoto,
        comment: "Very good meal! I enjoyed a lot.",
    };

    const comments = []
    for (let index = 0; index < 4; index++) {
        comments.push(
            <Comment 
                name={cmnt.name}
                rating={cmnt.rating}
                image={cmnt.image}
                comment={cmnt.comment}
            />
        );
    }
    
    return (
        <div className="testimonials">
            {/* <Comment
                name={cmnt.name}
                rating={cmnt.rating}
                image={cmnt.image}
                comment={cmnt.comment}
            /> */}
            { comments }
        </div>
    );
}

export default Testimonials;