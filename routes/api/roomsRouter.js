const express = require('express');
const roomsRouter = express.Router();
const db = require("../../db/database");

// view all roomslist
roomsRouter.get('/', (req, res) => {
	let sql = 'SELECT * FROM roomList';
	let query = db.query(sql, (err, result) => {
		if (err) {
			throw err.message;
		}
		console.log(result);
		res.send(result);
	});
});

// view particular roomItem
roomsRouter.get("/:id",(req,res)=>{
    let sql = `SELECT * FROM roomList WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,result)=>{
        if(err){
            throw err.message;
        }
        console.log(result);
        res.send(result);
    });
});

// Add a Room
roomsRouter.post('/:id', (req, res) => {
	let room = { name: `Room ${req.params.id}`, description: `This is Room Number ${req.params.id}` };
	let sql = 'INSERT INTO roomList SET ?';
	let query = db.query(sql, room, (err, result, fields) => {
		if (err) {
			throw err.message;
		}
		console.log(result);
		res.send(result);
	});
});

// update a room Item
roomsRouter.put(`/:id`,(req,res)=>{
    let sql =`UPDATE roomList SET name='Room is ${req.params.id+1}' WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,result)=>{
        if(err){
            throw err.message;
        }
        console.log(result);
        res.send(result);
    })
});

//delete a room item
roomsRouter.delete('/:id',(req,res)=>{
    let sql=`DELETE FROM roomList WHERE id=${req.params.id}`
    let query = db.query(sql,(err,result)=>{
        if(err){
            throw err.message;
        }
        console.log(result);
        res.send(result);
    });
});

module.exports = roomsRouter;


