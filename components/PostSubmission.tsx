import { useCallback, useState } from "react";
import API from "../Api";

interface Input {
  title: string;
  body: string;
}

interface Data extends Input {
  id: number;
}
const Post = ({ addPost }: { addPost: (newPost: Data) => void }) => {
  const [value, setValue] = useState<Input>({ title: "", body: "" });

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    setValue((prevalue) => ({ ...prevalue, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event: React.BaseSyntheticEvent) => {
      event.preventDefault();

      API.post(`/`, {
        title: value.title,
        body: value.body,
      })
        .then((response) => {
          addPost(response.data);
          setValue({ title: "", body: "" });
        })
        .catch((error) => {
          throw error;
        });
    },
    [addPost, value]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          onChange={handleChange}
          required
          value={value.title}
        />
        <label>Body</label>
        <input
          name="body"
          onChange={handleChange}
          required
          value={value.body}
        />
        <button type="submit"> submit</button>
      </form>
    </>
  );
};

export default Post;
