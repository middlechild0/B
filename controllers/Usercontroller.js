const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const {createUserWithEmail, findUserByEmail} = require ('../model/user');


const handleNormalUserRegistration = async (req, res) => {
    const {  first_name, last_name , email, password, user_type } = req.body;
  
    try {
      // check if user with email exists
      const user = await findUserByEmail(email);
      // something is returned, then such user exists
      if (user) {
        return res.status(400).json({ message: "User already exists!" });
      }
      // hash the password
      const hashedPass = await bcrypt.hash(password, parseInt(process.env.HASH_ROUNDS));
      const data = {
        email,
        hashedPass,
        user_type,
        first_name,
        last_name,
      };

    
      const createUser = await createUserWithEmail(data);
      if (!createUser) {
        return res
          .status(400)
          .json({ message: "An error occurred while creating account" });
      }
      // send email to user to verify email
      // jwt payload
      
     const payload = {
        user_id: createUser.insertId,
        email: email,
        role: role,
     }
      // create token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // send email
      const link = `${process.env.CLIENT_URL}/api/v1/verify?token=${token}`;
      console.log(link);
      const content = `<h1>Verify your email</h1>
      <p>Click the link below to verify your email</p>
      <a href="${link}">Verify Email</a>`;
      const subject = "Verify your email";
      const send = await sendEmail.sendEmail(content, subject, email);
      return res.status(201).json({ message: "User registered successfully, now verify email" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
  };

  module.exports = {handleNormalUserRegistration }; 
  