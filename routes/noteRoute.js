const express = require('express')
const {getNoteById, getNotes, CreateNote, UpdateNote,DeleteNote } = require('../controllers/noteController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/').get(protect,getNotes)
router.route('/create').post(protect,CreateNote)
router.route('/:id').get(getNoteById)
.put(protect,UpdateNote )
.delete(protect, DeleteNote)

module.exports=router
