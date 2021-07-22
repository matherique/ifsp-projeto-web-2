import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const dest = path.resolve(__dirname, '..', '..', '..', 'tmp')

export default multer({
  storage: multer.memoryStorage()
}).single('file')

// storage: multer.memoryStorage(
//   {
//   destination: (req, file, cb) => {
//     cb(null, dest)
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${uuidv4()}_${file.originalname}`)
//   }
// }
// )
