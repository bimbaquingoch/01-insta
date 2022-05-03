import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "bryandresimba",
      userImg: "https://avatars.githubusercontent.com/u/52583430?v=4",
      img: "https://avatars.githubusercontent.com/u/52583430?v=4",
      caption: "hola",
    },
    {
      id: 2,
      username: "bryandresimba",
      userImg: "https://avatars.githubusercontent.com/u/52583430?v=4",
      img: "https://raw.githubusercontent.com/bimbaquingoch/portfolio/master/portfolio.png",
      caption: "This website was made with react and styled components",
    },
    {
      id: 3,
      username: "bryandresimba",
      userImg: "https://avatars.githubusercontent.com/u/52583430?v=4",
      img: "https://raw.githubusercontent.com/bimbaquingoch/portfolio/master/portfolio.png",
      caption: "This website was made with react and styled components",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
