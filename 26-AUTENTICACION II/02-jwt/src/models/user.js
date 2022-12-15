import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt);
}

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}  

export const UserModel = mongoose.model('user', UserSchema);

