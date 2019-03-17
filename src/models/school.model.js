import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SchoolSchema = new Schema({
    school_name: {type: String}
});

const School = mongoose.model('school', SchoolSchema);
export { School };