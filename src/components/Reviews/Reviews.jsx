import React from "react";
const Reviews = () => {
  const reviews = {
    average: 4,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
             This icon pack is just what I need for my latest project. 
            `,
        date: "July 16, 2021",
        datetime: "2021-07-16",
        author: "Emily Selman",
        avatarSrc:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      },
      {
        id: 2,
        rating: 5,
        content: `
              Blown away by how polished this icon pack is.
            `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      },
      {
        id: 3,
        rating: 5,
        content: `
              Blown away by how polished this icon pack is.
            `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      },
      // More reviews...
    ],
  };
  return (
    <div className="py-6">
      <div>
        <h1 className="text-3xl font-medium py-4">Words of support (29)</h1>
        <p>Please donate to share words of support.</p>
      </div>
      {reviews.featured.map((review, reviewIdx) => (
        <div key={review.id} className="flex space-x-4 items-center text-sm ">
          <div className="flex gap-x-3 py-10">
            <img
              src={review.avatarSrc}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />

            <div>
              <h3 className="font-medium text-lg  text-gray-900">
                {review.author}
              </h3>
              <p>
                <time dateTime={review.datetime}>{review.date}</time>
              </p>
              <p className="sr-only">{review.rating} out of 5 stars</p>
              <p>{review.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
