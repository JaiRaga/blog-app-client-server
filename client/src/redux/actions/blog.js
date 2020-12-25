import axios from "axios";
import {
  GET_BLOGS,
  UPDATE_TRENDING,
  TRENDING_ERROR,
  BLOG_ERROR,
  POST_BLOG
} from "./types";

// Get all Blog Posts
export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/blogs");
    dispatch({ type: GET_BLOGS, payload: res.data });
  } catch (err) {
    dispatch({ type: BLOG_ERROR });
  }
};

// Post Blog
export const postBlog = (blog) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const data = JSON.stringify(blog);
  // console.log(data);

  try {
    const res = await axios.post("/api/blogs", data, config);
    // console.log("Blogs POST", res.data);
    dispatch({ type: POST_BLOG, payload: res.data });
  } catch (err) {
    dispatch({ type: BLOG_ERROR });
  }
};

// Toggle trending sidebar
export const toggleTrending = (open) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TRENDING, payload: open });
  } catch (err) {
    dispatch({ type: TRENDING_ERROR });
  }
};
