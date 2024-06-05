

import { Link } from 'react-router-dom';

const Story = ({ story }) => {
  const { _id, couple, image, marriageDate, reviewStar, storyText } = story;

  const shortReview = storyText.slice(0, 60);

  return (
    <div className="card w-96 mb-10 bg-base-100 shadow-xl">
    <figure className="h-[200px]"><img src={image} alt="Shoes" /></figure>
    <div className="card-body ">
      <h2 className="card-title"> {couple}</h2>
      <div className="card-actions justify-between mt-4 mb-4">
        <div className="badge badge-outline">{marriageDate}</div>
        <div className="badge badge-outline">{reviewStar}</div>
      </div>
      <p>
        {shortReview} <Link><span className="text-red-500">Read more</span></Link>
      </p>
    </div>
  </div>
  );
};

export default Story;