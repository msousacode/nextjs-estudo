interface PostProps {
  id: number;
  title: string;
  body: string;  
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];  
}