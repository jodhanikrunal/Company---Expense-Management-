const express = require("express");
const Project = require("../Models/Projects");

const router = express.Router();

router.get("/allprojects", async (req, res) => {
  try {
    const projects = await Project.find({
      company:req.user,
    }); 
    // console.log(company);
    console.log(req.user);
    
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
