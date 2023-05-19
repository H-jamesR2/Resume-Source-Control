import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import TopNav from "../components/TopNav";
import AppTable from "../components/AppTable";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from "../context/UniContext";
import { Button, Table, Tag, Form, Modal, Input, Select, DatePicker, ConfigProvider, theme } from "antd";
import { FileTextTwoTone, CloseCircleTwoTone, ScheduleOutlined, EditTwoTone, DeleteTwoTone, PlusOutlined, ClockCircleOutlined, CheckCircleOutlined, CarryOutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


function Application(prop) {

    const { getUserSession } = useContext(SessionContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        getUserSession().then(() => {
            setIsLoggedIn(true);
        });

    }, []);


    const [isEditing, setIsEditing] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [position, setPosition] = useState("")
    const [company, setCompany] = useState("")
    const [submission_date, SetSubmissionDate] = useState("")
    const [status, setStatus] = useState("")
    const [resume, SetResume] = useState("")
    const [applications,setApplications] = useState([]);
    let navigate = useNavigate();


    // const {deleteApplications, setDeleteApplications} = useContext(UniContext)



    //function to post input into database
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/applications", {
                position,
                company,
                submission_date,
                status,
                resume,
        })
        // addApplicatons(response.data.data.application)
        }catch(err){}
        window.location.reload(false);
    }

    //function to delete data from database
    const handleDelete =  async (e, id) =>{
        try{
            const response = await ResumeUrl.delete( `/v1/applications/${id}`)
            setApplications(applications.filter(application=>{
                return application.id !== id
            }))
            console.log(response)
        }catch (err) {
    
        }
    }

    const editApplicationRecord = (record) => {
        setIsEditing(true);
        setEditingRecord({ ...record });
    };

    const handleEdit = async (e, id) => {
        navigate(`/data/${id}/updateApplication`);
      }

    useEffect (() =>{
        const fetchData = async () =>{
            try{
            const response = await ResumeUrl.get('/v1/applications');
            setApplications(response.data.data.applications)
            console.log('Application: ', response)
        }catch(err){}}
        fetchData();
    },[])



    //layout of data to be outputted
    const columns = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
            hidden: true
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position"
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company"
        },
        {
            title: "Submission Date",
            dataIndex: "submission_date",
            key: "submission_date"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                let tagColor;
                let icon;
                if (record.status === "Applied") {
                    tagColor = "default";
                    icon = <ClockCircleOutlined color="gray" />;
                }
                if (record.status === "Interviewing") {
                    tagColor = "cyan";
                    icon = <ScheduleOutlined color="cyan" />;
                }
                if (record.status === "Under Consideration") {
                    tagColor = "gold";
                    icon = <CarryOutOutlined color="gray" />;
                }
                if (record.status === "Hired") {
                    tagColor = "green";
                    icon = <CheckCircleOutlined color="green" />;
                }
                if (record.status === "No Offer") {
                    tagColor = "red";
                    icon = <CloseCircleTwoTone twoToneColor="red" />;
                }
                return <>
                    <Tag className="tag-text" color={tagColor} icon={icon} key={record.status} >
                        <span>{record.status}</span>
                    </Tag>
                </>
            }
        },
        {
            title: "Resume Used",
            key: "resume_id",
            dataIndex: "resume_id",
            render: (_, record) => {
                return <>
                    <Tag className="tag-text" color="geekblue" key={record.resume} >
                        <FileTextTwoTone />
                        <Link to="/" className="resume-tag-text">{record.resume}</Link>
                    </Tag>
                </>
            }
        },
        {
            title: "Action",
            render: (_, application) => {
                return <>
                    <EditTwoTone onClick={() => { handleEdit(application.id) }} />
                    <DeleteTwoTone onClick={(e) => {handleDelete(e,application.id)}} className="action-icon" twoToneColor="red" />
                </>
            }
        },

    ].filter(item => !item.hidden);

    //prebuilt data
    const dataSource = [
        {
            id: 1,
            position: 'Software Engineer',
            company: 'Google',
            submissionDate: '03/05/2023',
            status: 'Interviewing',
            resume: 'Software Engineer Resume',
        },
        {
            id: 2,
            position: 'Game Developer',
            company: 'Roblox',
            submissionDate: '03/06/2023',
            status: 'Interviewing',
            resume: 'Game Dev Resume',
        },
        {
            id: 3,
            position: 'Software Engineer',
            company: 'Facebook',
            submissionDate: '03/09/2023',
            status: 'No Offer',
            resume: 'Software Engineer Resume',
        }
    ];
    return (
        <div>
            {isLoggedIn &&
                <>
                    <TopNav3 />
                    <div className="page-wrapper">
                        <NavBar />
                        <div className="main-content">
                            <div>Applications Tracker</div>
                            
                            {/* <Table className="table-container" dataSource={applications} columns = {columns}/> */}
                            
                            {/* <ApplicationList/> */}
                            {/* <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: "#6892FE",
                                        fontFamily: "Lekton",
                                        fontSize: "18px",
                                    },
                                }}>
                                    <br/>
                                    <Form>
                                    <Form.Item name='position' label='Position' style={{ width: 300 }} size='large'
                            rules={[
                                { required: true, message: "Please input the title of job position!" }
                            ]}
                        >
                            <Input value={position} onChange={e=>setPosition(e.target.value)} type='text' />
                        </Form.Item>
                        <Form.Item name='company' label='Company' style={{ width: 300 }} size='large'
                            rules={[
                                { required: true, message: "Please input the company name!" }
                            ]}
                        >
                            <Input value={company} onChange={e=>setCompany(e.target.value)} type='text' />
                        </Form.Item>
                        <Form.Item name='submissionDate' label='Date Applied' size='large'
                            rules={[
                                { required: true, message: "Please input the date applied!" }
                            ]}
                        >
                            <input value={submission_date} onChange={e=> {SetSubmissionDate(e.target.value)}} type='date' />
                        </Form.Item>
                        <Form.Item name='status ' label='Status: (Applied, Interviewing, Under Considerations, Hired, No Offer)' style={{ width: 1000 }} size='large'
                            rules={[
                                { required: true, message: "Please select your application status! " }
                            ]}
                        >
                            <select value={status} onChange={e=>setStatus(e.target.value)}>
                                <option value='Applied'>Applied</option>
                                <option value='Interviewing'>Interviewing</option>
                                <option value='Under Consideration'>Under Consideration</option>
                                <option value='Hired'>Hired</option>
                                <option value='No Offer'>No Offer</option>
                            </select>
                        </Form.Item>

                        <Form.Item name='resume' label='Resume Used' style={{ width: 250 }} size='large'
                            rules={[
                                { required: true, message: "Required!" }
                            ]}
                        >
                            <select value={resume} onChange={e=>SetResume(e.target.value)}>
                                <option value='jake ryan, TESTING2'>Jake Ryan</option>
                                 </select>
                    
                        </Form.Item>
                        <button onClick={handleSubmit} type='submit'>Add</button>

                        
                                    </Form>
                            </ConfigProvider> */}
                            <AppTable data={dataSource} />

                        </div>
                    </div>
                </>
            }
        { !isLoggedIn && (
            <div>   
                <TopNav/>
                <div className="page-wrapper">
                    <div className="main-content">
                    You are not logged in. Please log in or sign up to continue.
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default Application;



