'use strict';
const pool = require('../database/db');
const userRoute = require('../routes/userRoute');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query(
        'SELECT user_id, name, email, password FROM wop_user');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.query(
        'SELECT * FROM wop_user WHERE user_id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertUser = async (user) => {
  try {
    console.log('insert user?', user);
    const [rows] = await promisePool.query(
        'INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?)', [ user.name, user.email, user.password ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updateUser = async (user) => {
  try {
    console.log('insert user?', user);
    const [rows] = await promisePool.query(
        'UPDATE wop_user SET name = ?, email = ?, password = ?', [ user.name, user.email, user.password ]);
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deleteUser = async (id) => {
  try {
    console.log('delete user', id);
    const [rows] = await promisePool.query(
        'DELETE FROM wop_user WHERE wop_user.user_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deleteUser model', e.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
};