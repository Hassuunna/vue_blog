import axios from "axios";
const url = "/api/post/";

export default class API {
  // to get all posts from server
  static async getAllPosts() {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  // to get post by id
  static async getPostById(id) {
    try {
      const res = await axios.get(`${url}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  // to create a new post
  static async createPost(post) {
    //  create a new post
    try {
      const res = await axios.post(url, post);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  // to update an existing post
  static async updatePost(id, post) {
    try {
      const res = await axios.patch(`${url}/${id}`, post);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  // to delete an existing post
  static async deletePost(id) {
    try {
      const res = await axios.delete(`${url}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  // to delete all post
  static async deleteAllPosts() {
    try {
      const res = await axios.delete(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
