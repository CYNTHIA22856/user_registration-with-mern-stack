

const express = require('express');
const router = express.Router();
const registration = require('../models/registrationModel');

router.route('/create').post ((req, res) => {
    const  name=req.body.name;
    const  sex=req.body.sex;
    const  region=req.body.region;
    const  nationality=req.body.nationality;
    const  dob=req.body.dob;
    const  address=req.body.address;
    const  email=req.body.email;
    const  school=req.body.school;
    const  qualification=req.body.qualification;
    const  membership=req.body.membership;
    const  which=req.body.which;
    const  profilePicture=req.body.profilePicture;
    const newregistration = new registration({
        
                name,
                sex,
                region,
                nationality,
                dob,
                address,
                email,
                school,
                qualification,
                membership,
                which,
                profilePicture
        
    });
newregistration.save()
.then(() => res.status(200).json({ message: 'Registration successful!' }))
        .catch(err => res.status(400).json({ error: err.message }));
})
module.exports = router;