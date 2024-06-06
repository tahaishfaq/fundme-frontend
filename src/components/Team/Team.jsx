import React from "react";

const Team = () => {
  const fundraisingTeam = [
    {
      id: 1,
      rating: 5,
      content: `
        Organiser
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
                  
        Beneficiary
                `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ];

  return (
    <div className="py-10 border-b-2 border-t-2">
      <div>
        <h1 className="text-3xl font-medium py-4">Fundraising team (2)</h1>
      </div>
      <div className="flex justify-between px-6">
        {fundraisingTeam.map((member) => {
          return (
            <div key={member.id} className="flex gap-x-4 ">
              <img
                src={member.avatarSrc}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
              <div>
                <h3 className="font-medium text-lg  text-gray-900">
                  {member.author}
                </h3>
                <p className="text-sm">{member.content} </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-5 px-20">
        <button className="py-2 px-6 font-bold rounded-xl border-[1px] border-gray-700 hover:bg-slate-100">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Team;
