const express = require('express');
const Expense = require('../Models/Expense');

exports.getexpense = async(req,res) => {
    try {
        const { projectId } = req.params;

        if (!projectId) {
          return res.status(400).json({ message: 'Project ID is required' });
        }

        const expenses = await Expense.find({
          project:projectId,
        }); 

        res.status(200).json(expenses);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};