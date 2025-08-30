const express = require('express');
const db = require('../db');
const router = express.Router();

// Get filtered notes
router.get('/api/notes', (req, res) => {
  const { subject, form, course } = req.query;
  
  let sql = `
    SELECT 
      n.id,
      s.name as subject,
      f.name as form,
      c.name as course,
      n.unit_number,
      n.title,
      n.description,
      n.file_path,
      n.uploaded_at
    FROM notes n
    JOIN courses c ON n.course_id = c.id
    JOIN subjects s ON c.subject_id = s.id
    JOIN forms f ON c.form_id = f.id
    WHERE 1=1
  `;
  
  const params = [];
  
  if (subject) {
    sql += ' AND s.name = ?';
    params.push(subject);
  }
  
  if (form) {
    sql += ' AND f.name = ?';
    params.push(form);
  }
  
  if (course) {
    sql += ' AND c.name = ?';
    params.push(course);
  }
  
  sql += ' ORDER BY n.uploaded_at DESC';
  
  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
