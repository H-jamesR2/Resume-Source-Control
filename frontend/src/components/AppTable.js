import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Button, Table, Tag, Form, Modal, ConfigProvider } from "antd";
import { FileTextTwoTone, CloseCircleTwoTone, ScheduleTwoTone, EditTwoTone, DeleteTwoTone, PlusOutlined} from '@ant-design/icons';
import "../cssFiles/application.css";

function AppTable(prop) {
    const [isEditing, setIsEditing] = useState(false);
    const [dataSource, setDataSource] = useState(prop.data);
    //setDataSource(prop.data);
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
            dataIndex: "submissionDate",
            key: "submissionDate"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                let tagColor;
                let icon;
                if (record.status === "Scheduling Interview") {
                    tagColor = "orange";
                    icon = <ScheduleTwoTone twoToneColor="orange" />;
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
            key: "resume",
            dataIndex: "resume",
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
            render: (_, record) => {
                return <>
                    <EditTwoTone onClick={() => { editApplicationRecord(record) }}/>
                    <DeleteTwoTone onClick={() => { deleteData(record) }} className="action-icon" twoToneColor="red" />
                </>
            }
        }
    ].filter(item => !item.hidden);
    const addData = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newApplication = {
            id: randomNumber,
            position: 'position'+randomNumber,
            company: 'company'+randomNumber,
            submissionDate: 'date'+randomNumber,
            status: 'Status'+randomNumber,
            resume: 'Resume'+randomNumber,
        };
        setDataSource((pre) => {
            console.log("add");
            return [...pre, newApplication];
        });
    };
    const deleteData = (record) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this application record?',
            okText: 'Yes',
            onOk: () => {
                setDataSource((pre) => {
                    console.log(record.id);
                    // insert code to delete data row
                    return pre.filter((application) => application.id !== record.id);
                });
            }
        })
    };
    const editApplicationRecord = (record) => {
        Modal.confirm({
            title: 'Update Status',
            okText: 'Save',
            onOk: () => {
                setDataSource((pre) => {
                    console.log(record.id);
                    // insert code to delete data row
                    return pre;
                });
            }
        })
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#6892FE",
                    fontFamily: "Lekton",
                    fontSize: "18px",
                    fontWeightStrong: "900",
                    colorSuccessBg: "red",
                },
            }}>
            <Form className="application-wrapper">
                <Button className="addButton" type="primary" icon={<PlusOutlined /> } onClick={() => { addData() }}>
                    <span className="addButton-span">Add</span>
                </Button>
                
                <Table className="table-container" columns={columns} dataSource={dataSource} />
                <Modal 
                    title='Edit Status'
                    onCancel={()=>{
                        setIsEditing(false);
                    }}
                    onOk={()=>{
                        setIsEditing(false);
                    }}
                    ></Modal>
            </Form>
        </ConfigProvider>


    );
}

export default AppTable;