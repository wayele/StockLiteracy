const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    stocks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Stock"
        }
    ],

    // Changed to take whole stock object rather than just the object id
    // stocks: [
    //     {
    //         type: Schema.Types.Mixed,

    //     }
    // ],
    score: { type: Number, required: true, default: 0 }
});

UserSchema.pre("save", function (next) {

    var user = this;
    console.log(user)

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    console.log('password is modified');

    // generate a salt
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);
        console.log('generated salt')

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            console.log('hash password')

            // override the cleartext password with the hashed one
            user.password = hash;
            return next();
        });
    });


});

//  Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// UserSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };
UserSchema.methods.validPassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
