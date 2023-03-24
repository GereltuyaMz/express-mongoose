import User from "../model/userModel.js";
import cloudinary from "../cloudinary.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res.status(200).json({ message: "User field empty!" })
    }
    res.status(201).json({ message: "Found users information", users });
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  const { name, profileImg, email, password, phone } = req.body;
  const { path } = req.file;

  try {
    const uploadCloud = await cloudinary.v2.uploader.upload(path);

    // 1. validation
    const userExist = await User.findOne({ email })
    if (!name || !email || !password) {
      res.status(400).json({ message: "Must not leave empty field!" })
    }

    // 2. check user exist
    if (userExist) {
      res.status(409).json({ message: "User already exist. Please Log In" })
    }

    // 3. hash user password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreate = await User.create({
      name,
      profileImg: uploadCloud.secure_url,
      email,
      password: hashedPassword,
      phone
    })

    res.status(201).json({ message: "Successfully created user", userCreate })

  } catch (error) {
    next(error)
  }
}

const generateToken = (id, email) => {
  return jwt.sign(
    { id, email }, process.env.JWT_TOKEN, {
    expiresIn: '2h'
  })
}

export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // 1. validation
    if (!(email && password)) {
      res.status(400).json({ message: "Must not empty field!" })
    }

    // 2. compare password
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id, user.email)
      })
    } else {
      res.status(409).json({ message: "The password not match" })
    }
  } catch (error) {
    next(error)
  }

}

export const getUser = async (req, res, next) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: "Must not leave id field empty!" })
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: `Cant't found by id ${id}` })
    }
    res.status(200).json({ message: `Found the user by id ${id}`, user })
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Must not leave id field empty!" })
  }

  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ message: `Cant't found by id ${id}` })
    }
    res.status(200).json({ message: `Updated the user by id ${id}`, user })
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Must not leave id field empty!" })
  }

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: `Deleted the user by id ${id}`, user })
  } catch (error) {
    next(error)
  }
}

export const getMe = (req, res, next) => {
  return res.json(req.user);
}