import express from 'express';
import db from '../models';

const router = express.Router();

/**
 * @swagger
 *  /boards:
 *      get: 
 *          tags:
 *          - board
 *          description: 모든 게시물을 가져온다.
 */