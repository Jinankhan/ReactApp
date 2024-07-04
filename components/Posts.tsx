import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Post from "./PostSubmission";
import React from "react";
import API from "../Api";
interface Data {
  title: string;
  body: string;
  id: number;
}

const Posts = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await API.get(`/`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          throw error;
        });
    };

    fetchData();
  }, []);

  const addPost = useCallback((newPost: Data) => {
    setData((prevpost) => [...prevpost, newPost]);
  }, []);

  const deletePost = useCallback((id: number) => {
    API.delete(`/${id}`).then(() => {
      setData((prevalue) => prevalue.filter((data) => data.id !== id));
    });
  }, []);

  return (
    <>
      <Post addPost={addPost} />

      {data.map((data) => (
        <React.Fragment key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <button
            onClick={() => {
              deletePost(data.id);
            }}
          >
            Delete
          </button>
        </React.Fragment>
      ))}
    </>
  );
};

export default Posts;
