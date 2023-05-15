require('dotenv').config();
const express = require('express');

const asyncHandler = require('express-async-handler')

const db = require('./db')

const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());



//*********** Resumes *****************
//Get all resumes
app.get("/api/v1/resumes", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from resumes");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            resumes: results.rows
        }
    })

}))

//Get a resume
app.get("/api/v1/resumes/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const resume = await db.query("select * from resumes where id = $1", [req.params.id])
    console.log(resume.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            resume: resume.rows[0],
        }

    })

}))

//Create a resume
app.post("/api/v1/resumes", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const resume = await db.query("INSERT INTO resumes (name, version_id) VALUES ($1, $2) returning *", [req.body.name, req.body.version_id]);
    console.log(resume);
    res.status(201).json({
        status: "success",
        data: {
            resume: resume.rows[0]
        }

    })
}))

// Delete a resume
app.delete("/api/v1/resumes/:id", asyncHandler(async(req, res) => {
    const resume = await db.query("DELETE FROM resumes WHERE id = $1", [req.params.id]);
    console.log(resume);
    res.status(204).json({
        status: "success"
    });
}));



//Update a resume
app.put("/api/v1/resumes/:id", asyncHandler(async(req, res)=>{
    const resume = await db.query(
        "UPDATE resumes SET name = $1, version_id = $2 WHERE id = $3 returning *", 
        [req.body.name, req.body.version_id, req.params.id])
    console.log(resume)
    res.status(200).json({
        status: "success",
        data: {
            resume: resume.rows[0]
        }

    })
}))

//**********Application***********
//Get all applications
app.get("/api/v1/applications", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from applications");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            applications: results.rows
        }
    })

}))


//Get application
app.get("/api/v1/applications/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const application = await db.query("select * from applications where id = $1", [req.params.id])
    console.log(application.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            application: application.rows[0],
        }

    })

}))

//Create application
app.post("/api/v1/applications", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const application = await db.query("INSERT INTO applications (resume_id, position, company, submission_date, status) VALUES ($1, $2, $3, $4, $5 ) returning *", [req.body.resume_id, req.body.position, req.body.company, req.body.submission_date, req.body.status]);
    console.log(application);
    res.status(201).json({
        status: "success",
        data: {
            application: application.rows[0]
        }

    })
}))

// Delete application
app.delete("/api/v1/applications/:id", asyncHandler(async(req, res) => {
    const application = await db.query("DELETE FROM applications WHERE id = $1", [req.params.id]);
    console.log(application);
    res.status(204).json({
        status: "success"
    });
}));



//Update application
app.put("/api/v1/applications/:id", asyncHandler(async(req, res)=>{
    const application = await db.query(
        "UPDATE applications SET resume_id = $1, position = $2, company = $3, submission_date = $4, status = $5, WHERE id = $6 returning *", 
        [req.body.resume_id, req.body.position, req.body.company, req.body.submission_date,req.body.status, req.params.id])
    console.log(application)
    res.status(200).json({
        status: "success",
        data: {
            application: application.rows[0]
        }

    })
}))


//**********Contacts***********
//Get all contacts
app.get("/api/v1/contacts", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from contacts");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            contacts: results.rows
        }
    })

}))


//Get contact
app.get("/api/v1/contacts/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const contact = await db.query("select * from contacts where id = $1", [req.params.id])
    console.log(contact.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            contact: contact.rows[0],
        }

    })

}))

//Create contact
app.post("/api/v1/contacts", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const contact = await db.query("INSERT INTO contacts (name, email, phone_number, linkedin, github, portfolio_website) VALUES ($1, $2, $3, $4, $5, $6) returning *", [req.body.name, req.body.email, req.body.phone_number, req.body.linkedin, req.body.github, req.body.portfolio_website]);
    console.log(contact);
    res.status(201).json({
        status: "success",
        data: {
            contact: contact.rows[0]
        }

    })
}))

// Delete contact
app.delete("/api/v1/contacts/:id", asyncHandler(async(req, res) => {
    const contact = await db.query("DELETE FROM contacts WHERE id = $1", [req.params.id]);
    console.log(contact);
    res.status(204).json({
        status: "success"
    });
}));



//Update contact
app.put("/api/v1/contacts/:id", asyncHandler(async(req, res)=>{
    const contact = await db.query(
        "UPDATE contacts SET name = $1, email = $2, phone_number = $3, linkedin = $4, github = $5, portfolio_website = $6 WHERE id = $7 returning *", 
        [req.body.name, req.body.email, req.body.phone_number, req.body.linkedin, req.body.github, req.body.portfolio_website, req.params.id])
    console.log(contact)
    res.status(200).json({
        status: "success",
        data: {
            contact: contact.rows[0]
        }

    })
}))


//**********Education***********
//Get education
app.get("/api/v1/education", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from education");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            education: results.rows
        }
    })

}))


//Get education
app.get("/api/v1/education/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const education = await db.query("select * from education where id = $1", [req.params.id])
    console.log(education.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            education: education.rows[0],
        }

    })

}))

//Create education
app.post("/api/v1/education", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const education = await db.query("INSERT INTO education (name, start_date, end_date, degree, relevant_coursework) VALUES ($1, $2, $3, $4, $5) returning *", 
    [req.body.name, req.body.start_date, req.body.end_date, req.body.degree, req.body.relevant_coursework]);
    console.log(education);
    res.status(201).json({
        status: "success",
        data: {
            education: education.rows[0]
        }

    })
}))

// Delete education
app.delete("/api/v1/education/:id", asyncHandler(async(req, res) => {
    const education = await db.query("DELETE FROM education WHERE id = $1", [req.params.id]);
    console.log(education);
    res.status(204).json({
        status: "success"
    });
}));



//Update education
app.put("/api/v1/education/:id", asyncHandler(async(req, res)=>{
    const education = await db.query(
        "UPDATE education SET name = $1, start_date = $2, end_date = $3, degree = $4, relevant_coursework = $5  WHERE id = $6 returning *", 
        [req.body.name, req.body.start_date, req.body.end_date, req.body.degree, req.body.relevant_coursework, req.params.id])
    console.log(education)
    res.status(200).json({
        status: "success",
        data: {
            education: education.rows[0]
        }

    })
}))

//**********Projects***********
//Get projects
app.get("/api/v1/projects", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from projects");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            projects: results.rows
        }
    })

}))


//Get project
app.get("/api/v1/projects/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const project = await db.query("select * from projects where id = $1", [req.params.id])
    console.log(project.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            project: project.rows[0],
        }

    })

}))

//Create project
app.post("/api/v1/projects", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const project = await db.query("INSERT INTO projects (name, role, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5) returning *", 
    [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description]);
    console.log(project);
    res.status(201).json({
        status: "success",
        data: {
            project: project.rows[0]
        }

    })
}))

// Delete project
app.delete("/api/v1/projects/:id", asyncHandler(async(req, res) => {
    const project = await db.query("DELETE FROM projects WHERE id = $1", [req.params.id]);
    console.log(project);
    res.status(204).json({
        status: "success"
    });
}));



//Update project
app.put("/api/v1/projects/:id", asyncHandler(async(req, res)=>{
    const project = await db.query(
        "UPDATE projects SET name = $1, role=$2, start_date = $3, end_date = $4, description = $5 WHERE id = $6 returning *", 
        [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description, req.params.id])
    console.log(project)
    res.status(200).json({
        status: "success",
        data: {
            project: project.rows[0]
        }

    })
}))

//**********Jobs***********
//Get jobs
app.get("/api/v1/jobs", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from jobs");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            jobs: results.rows
        }
    })

}))


//Get job
app.get("/api/v1/jobs/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const job = await db.query("select * from jobs where id = $1", [req.params.id])
    console.log(job.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            job: job.rows[0],
        }

    })

}))

//Create job
app.post("/api/v1/jobs", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const job = await db.query("INSERT INTO jobs (name, role, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5) returning *", 
    [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description]);
    console.log(job);
    res.status(201).json({
        status: "success",
        data: {
            job: job.rows[0]
        }

    })
}))

// Delete job
app.delete("/api/v1/jobs/:id", asyncHandler(async(req, res) => {
    const job = await db.query("DELETE FROM jobs WHERE id = $1", [req.params.id]);
    console.log(job);
    res.status(204).json({
        status: "success"
    });
}));



//Update job
app.put("/api/v1/jobs/:id", asyncHandler(async(req, res)=>{
    const job = await db.query(
        "UPDATE jobs SET name = $1, role=$2, start_date = $3, end_date = $4, description = $5 WHERE id = $6 returning *", 
        [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description, req.params.id])
    console.log(job)
    res.status(200).json({
        status: "success",
        data: {
            job: job.rows[0]
        }

    })
}))

//**********Extracurriculars***********
//Get extracurriculars
app.get("/api/v1/extracurriculars", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from extracurriculars");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            extracurriculars: results.rows
        }
    })

}))


//Get extracurricular
app.get("/api/v1/extracurriculars/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const extracurricular = await db.query("select * from extracurriculars where id = $1", [req.params.id])
    console.log(extracurricular.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            extracurricular: extracurricular.rows[0],
        }

    })

}))

//Create extracurricular
app.post("/api/v1/extracurriculars", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const extracurricular = await db.query("INSERT INTO extracurriculars (name, role, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5) returning *", 
    [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description]);
    console.log(extracurricular);
    res.status(201).json({
        status: "success",
        data: {
            extracurricular: extracurricular.rows[0]
        }

    })
}))

// Delete extracurricular
app.delete("/api/v1/extracurriculars/:id", asyncHandler(async(req, res) => {
    const extracurricular = await db.query("DELETE FROM extracurriculars WHERE id = $1", [req.params.id]);
    console.log(extracurricular);
    res.status(204).json({
        status: "success"
    });
}));



//Update extracurricular
app.put("/api/v1/extracurriculars/:id", asyncHandler(async(req, res)=>{
    const extracurricular = await db.query(
        "UPDATE extracurriculars SET name = $1, role=$2, start_date = $3, end_date = $4, description = $5 WHERE id = $6 returning *", 
        [req.body.name, req.body.role, req.body.start_date, req.body.end_date, req.body.description, req.params.id])
    console.log(extracurricular)
    res.status(200).json({
        status: "success",
        data: {
            extracurricular: extracurricular.rows[0]
        }

    })
}))


//**********Skills***********
//Get skills
app.get("/api/v1/skills", asyncHandler(async(req, res)=>{
    const results = await  db.query("select * from skills");
    console.log(results)
    res.status(200).json({
        status: "Success",
        results: results.rows.length,
        data: {
            skills: results.rows
        }
    })

}))


//Get skill
app.get("/api/v1/skills/:id", asyncHandler(async(req, res)=>{
    //console.log(req)

    console.log(req.params.id)
    const skill = await db.query("select * from skills where id = $1", [req.params.id])
    console.log(skill.rows[0])
    res.status(200).json({
        status: "success",
        data: {
            skill: skill.rows[0],
        }

    })

}))

//Create skill
app.post("/api/v1/skills", asyncHandler(async(req, res)=>{
    console.log(req.body)
    const skill = await db.query("INSERT INTO skills (hard_skills, soft_skills, technology, languages) VALUES ($1, $2, $3, $4) returning *", 
    [req.body.hard_skills, req.body.soft_skills, req.body.technology, req.body.languages]);
    console.log(skill);
    res.status(201).json({
        status: "success",
        data: {
            skill: skill.rows[0]
        }

    })
}))

// Delete skill
app.delete("/api/v1/skills/:id", asyncHandler(async(req, res) => {
    const skill = await db.query("DELETE FROM skills WHERE id = $1", [req.params.id]);
    console.log(skill);
    res.status(204).json({
        status: "success"
    });
}));



//Update skill
app.put("/api/v1/skills/:id", asyncHandler(async(req, res)=>{
    const skill = await db.query(
        "UPDATE skills SET hard_skills = $1, soft_skills=$2, technology = $3, languages = $4 WHERE id = $5 returning *", 
        [req.body.hard_skills, req.body.soft_skills, req.body.technology, req.body.languages, req.params.id])
    console.log(skill)
    res.status(200).json({
        status: "success",
        data: {
            skill: skill.rows[0]
        }

    })
}))






const port = process.env.PORT || 3008;
app.listen(port, ()=>{
    console.log(`Server is up and listening on port ${port}`)
});
