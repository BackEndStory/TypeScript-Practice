import { NextFunction } from "express";
import express from 'express';
// const express = require('express');
const router = express.Router();
import conn from '../config/db.js';
// const conn = require('../config/db.js');
const mysql = require('mysql2/promise');
const Hangul = require('hangul-js');    // 한글 자모자 분리 library


interface Data{
    word : unknown,
    mean : unknown,
    spell : unknown
};



/** spread 10 words : 10개 단어 보내줌  */
router.get('/', async (req: express.Request, res: express.Response, next: NextFunction) => {      
    try {  
        var connection : conn = await mysql.createConnection(conn.real); // DB 커넥션 생성
        await connection.connect();   // DB 접속

        const username      = req.params.username;
        const correct_cnt   = req.body.correct_cnt;
        const query : string  = `SELECT WORD, MEAN FROM WORDS ORDER BY RAND() LIMIT 10;`; 
        const res_data : conn  = await connection.query(query);

        if(res_data == null || undefined){
            return res.status(404).json({
                "code": 404,
                "message": "Not found words"
            });
        }

        let word_list = new Array() ;
        for(let i in res_data[0]){
            let data : Data = {
                word : res_data[0][i].WORD,
                mean : res_data[0][i].MEAN,
                spell : Hangul.disassemble(res_data[0][i].WORD)
            };
		

            word_list.push(data);
        }
        // console.log(arr);
        return res.status(200).json({
            word_list,
            "code": 200,
            "message": "spread 10 words success"
        });   
    } catch (error) {
        console.error(error);  
        res.status(500).json({
            "code":500,
            "message": "server error"
        });
    }finally{
        connection.end();
     }
});


module.exports = router;