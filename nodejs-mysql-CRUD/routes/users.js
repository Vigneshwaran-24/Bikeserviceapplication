var express = require('express')
var app = express()

// SHOW LIST OF USERS
app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM booking ORDER BY id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				res.render('user/list', {
					title: '', 
					data: ''
				})
			} else {
				// render to views/user/list.ejs template file
				res.render('user/list', {
					title: '', 
					data: rows
				})
			}
		})
	})
})


// SHOW EDIT USER FORM
app.get('/edit/(:id)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM booking WHERE id = ?', [req.params.id], function(err, rows, fields) {
			if(err) throw err
			
			// if user not found
			if (rows.length <= 0) {
				req.flash('error', 'User not found with id = ' + req.params.id)
				res.redirect('/users')
			}
			else { // if user found
				// render to views/user/edit.ejs template file
				res.render('user/edit', {
					title: 'Edit User', 
					//data: rows[0],
					id: rows[0].id,
					name: rows[0].name,
					email: rows[0].email,					
					wno: rows[0].wno,					
					model: rows[0].model,					
					vno: rows[0].vno,					
					date: rows[0].date,					
					// general: rows[0].general,					
					// oil: rows[0].oil,					
					// water: rows[0].water					
				})
			}			
		})
	})
})

// EDIT USER POST ACTION
app.put('/edit/(:id)', function(req, res, next) {
	req.assert('name', 'Name is required').notEmpty()           //Validate name
    req.assert('email', 'A valid email is required').isEmail()  //Validate email
    req.assert('wno', 'A valid Mobile no is required').notEmpty()  //Validate wno
    req.assert('model', 'A valid Model is required').notEmpty()  //Validate model
    req.assert('vno', 'A valid Vehicle no is required').notEmpty()  //Validate vno
    req.assert('date', 'A valid date is required').notEmpty()  //Validate date
    // req.assert('general').notEmpty()  //Validate general
    // req.assert('oil').notEmpty()  //Validate oil
    // req.assert('water').notEmpty()  //Validate water

    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.username = '   a user    ';

		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('username').trim(); // returns 'a user'
		********************************************/
		var user = {
			name: req.sanitize('name').escape().trim(),
			email: req.sanitize('email').escape().trim(),
			wno: req.sanitize('wno').escape().trim(),
			model: req.sanitize('model').escape().trim(),
			vno: req.sanitize('vno').escape().trim(),
			date: req.sanitize('date').escape().trim(),
			// general: req.sanitize('general').escape().trim(),
			// oil: req.sanitize('oil').escape().trim(),
			// water: req.sanitize('water').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('UPDATE booking SET ? WHERE id = ' + req.params.id, user, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/user/add.ejs
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						name: req.body.name,
						email: req.body.email,
						wno: req.body.wno,
						model: req.body.model,
						vno: req.body.vno,
						date: req.body.date,
						//  general: req.body.general,
						//  oil: req.body.oil,
						//  water: req.body.water
					})
				} else {
					req.flash('success', 'Data updated successfully!')
					
					// render to views/user/add.ejs
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						name: req.body.name,
						email: req.body.email,
						wno: req.body.wno,
						model: req.body.model,
						vno: req.body.vno,
						date: req.body.date,
						//  general: req.body.general,
						//  oil: req.body.oil,
						//  water: req.body.water
					})
				}
			})
		})
	}
	else {   //Display errors to user
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})
		req.flash('error', error_msg)
		
		/**
		 * Using req.body.name 
		 * because req.param('name') is deprecated
		 */ 
        res.render('user/edit', { 
            title: 'Edit User',            
						id: req.params.id,
						name: req.body.name,
						email: req.body.email,
						wno: req.body.wno,
						model: req.body.model,
						vno: req.body.vno,
						date: req.body.date,
						// general: req.body.general,
					    // oil: req.body.oil,
						// water: req.body.water
        })
    }
})

// DELETE USER
app.delete('/delete/(:id)', function(req, res, next) {
	var user = { id: req.params.id }
	
	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM booking WHERE id = ' + req.params.id, user, function(err, result) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				// redirect to users list page
				res.redirect('/users')
			} else {
				req.flash('success', 'User deleted successfully! id = ' + req.params.id)
				// redirect to users list page
				res.redirect('/users')
			}
		})
	})
})

module.exports = app
