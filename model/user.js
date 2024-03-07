const express = require('express');
const app =  express();
const pool = require ('../config/config.js');

// get connection to db helper function
const executeQuery = async (query, params = []) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query(query, params);
      connection.release();
      return rows;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  };

  // * find user by email
const findUserByEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    const result = await executeQuery(query, [email]);
    return result.length > 0 ? result[0] : null;
  };
  
  // * find user by id
const findUserById = async (id) => {
    const query = "SELECT * FROM users WHERE id = ?";
    const result = await executeQuery(query, [id]);
    return result.length > 0 ? result[0] : null;
  };

  //  * create a new user
const createUserWithEmail = async (data) => {
    const query =
      "INSERT INTO users ( first_name, last_name, email, password, user_type) VALUES (?,?,?,?,?)";
    const result = await executeQuery(query, [
      data.first_name,
      data.last_name,
      data.email,
      data.hashedPass,
      data.user_type,
    ]);
    return result;
  };
  // exports
  module.exports =  {
    findUserByEmail,
    createUserWithEmail,
    findUserById,
  };
  