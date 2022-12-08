const mongoose = require('mongoose')
const uuidv1 = require('uuidv1')
const crypto = require('crypto')

// mongoose schema for user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true, // cannot have duplicates
    lowercase: true // formatting for valid username
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // cannot have duplicates
    lowercase: true // formatting for valid email
  },
  hashedPassword: { // raw passwords are not stored in database
    type: String,
    required: true
  },
  salt: String
},
{
  timestamps: true
})

// virtual field
userSchema.virtual('password').set(function (password) {
  // create temp variable
  this._password = password

  // generate a timestamp, uuidv1 gives us the unix timestamp
  this.salt = uuidv1()

  // encrypt password function call
  this.hashedPassword = this.encryptPassword(password)
})

// methods
userSchema.methods = {
  encryptPassword: function (password) { // encrypt password for user privacy protection
    if (!password) return ''

    try {
      return crypto
        .createHmac('sha256', this.salt) // this hashes the password so that the raw text is not stored in database
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  authenticate: function (plainText) { // this method checks if given password is the same as stored password
    return this.encryptPassword(plainText) === this.hashedPassword
  }
}

// export user schema to database
module.exports = mongoose.model('User', userSchema)
