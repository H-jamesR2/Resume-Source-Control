import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Button, Table, Tag, Form, Modal, Input, Select, DatePicker, ConfigProvider, theme } from "antd";
import { FileTextTwoTone, CloseCircleTwoTone, ScheduleOutlined, EditTwoTone, DeleteTwoTone, PlusOutlined, ClockCircleOutlined, CheckCircleOutlined, CarryOutOutlined } from '@ant-design/icons';
import "../cssFiles/application.css";


import dayjs from 'dayjs';


function AppTable(prop) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [addingRecord, setAddingRecord] = useState(null);
    const [dataSource, setDataSource] = useState(prop.data);
    const [form] = Form.useForm();
    const currentDate = new Date();
    const currentDateFormatted = new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate());
    let resumeData = [];

    form.setFieldsValue({
        status: 'Applied',
        submissionDate: dayjs(currentDateFormatted)
    });

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
                    <EditTwoTone onClick={() => { editApplicationRecord(record) }} />
                    <DeleteTwoTone onClick={() => { deleteData(record) }} className="action-icon" twoToneColor="red" />
                </>
            }
        }
    ].filter(item => !item.hidden);

    const addData = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newApplication = {
            id: randomNumber,
            position: 'position' + randomNumber,
            company: 'company' + randomNumber,
            submissionDate: 'date' + randomNumber,
            status: 'Applied',
            resume: 'Resume' + randomNumber,
        };

        //setAddingRecord(newApplication);
        console.log(addingRecord);
        console.log(dataSource.length);
        for (let i = 0; i < dataSource.length; i++) {
            resumeData.push(dataSource[0].resume);
        }
        setIsAdding(true);
        // setDataSource((pre) => {
        //     console.log([...pre, newApplication]);
        //     return [...pre, newApplication];
        // });
    };
    const deleteData = (record) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this application record?',
            className: 'modal-style',
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
        setIsEditing(true);
        setEditingRecord({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingRecord(null);
    }
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#6892FE",
                    fontFamily: "Lekton",
                    fontSize: "18px",
                },
            }}>
            <Form className="application-wrapper">
                <Button className="addButton" type="primary" icon={<PlusOutlined />} onClick={() => { addData() }}>
                    <span className="addButton-span">Add</span>
                </Button>

                <Table className="table-container" columns={columns} dataSource={dataSource} />
                <Modal
                    title='Add new application record'
                    open={isAdding}
                    closable={false}
                    keyboard={false}
                    okText='Add'
                    onCancel={() => {
                        setIsAdding(false);
                    }}
                    onOk={() => {
                        form
                            .validateFields()
                            .then(values => {
                                form.resetFields();
                                setDataSource((pre) => {
                                    console.log([...pre, values]);
                                    setAddingRecord(null);
                                    setIsAdding(false);
                                    return [...pre, values];
                                });
                            })
                            .catch(info => {
                                console.log('Validate Failed:', info);
                            });
                    }}
                >
                    <Form form={form} layout="vertical">

                        <Form.Item name='position' label='Position' style={{ width: 250 }} size='large'
                            rules={[
                                { required: true, message: "Please input the title of job position!" }
                            ]}
                        // onChange={(e) => {
                        //     setAddingRecord((pre) => {
                        //         return { ...pre, position: e.target.value };
                        //     })
                        // }} 
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name='company' label='Company' style={{ width: 250 }} size='large'
                            rules={[
                                { required: true, message: "Please input the company name!" }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name='submissionDate' label='Date Applied' size='large'
                            rules={[
                                { required: true, message: "Please input the date applied!" }
                            ]}
                        >
                            <DatePicker  format='MM/DD/YYYY' allowClear={false} locale style={{ width: 250 }} />
                        </Form.Item>
                        <Form.Item name='status' label='Status' style={{ width: 250 }} size='large'
                            rules={[
                                { required: true, message: "Please select your application status!" }
                            ]}
                        >
                            <Select
                                placeholder='Applied'
                                defaultValue='Applied'
                                options={[
                                    {
                                        value: 'Applied',
                                        label: 'Applied'
                                    },
                                    {
                                        value: 'Interviewing',
                                        label: 'Interviewing'
                                    },
                                    {
                                        value: 'Under Consideration',
                                        label: 'Under Consideration'
                                    },
                                    {
                                        value: 'Hired',
                                        label: 'Hired'
                                    },
                                    {
                                        value: 'No Offer',
                                        label: 'No Offer'
                                    }
                                ]} />
                        </Form.Item>
                        <Form.Item name='resume' label='Resume Used' style={{ width: 250 }} size='large'
                            rules={[
                                { required: true, message: "Required!" }
                            ]}
                        >
                            <Select
                                options={[
                                    {
                                        value: dataSource[0].resume,
                                        label: dataSource[0].resume
                                    }
                                ]} />
                        </Form.Item>
                        {/* <Input placeholder='Company' style={{ width: 250 }} size='large' onChange={(e) => {
                            setAddingRecord((pre) => {
                                return { ...pre, company: e.target.value };
                            })
                        }} /><br />
                        <DatePicker format='MM/DD/YYYY' allowClear={false} locale onChange={(e) => {
                            setAddingRecord((pre) => {
                                //console.log(e.$d.getMonth()+1 + '/' + e.$d.getDate() + '/' + e.$d.getYear());
                                return { ...pre, submissionDate: e.$d.getMonth() + 1 + '/' + e.$d.getDate() + '/' + e.$d.getYear() };
                            })
                        }} /><br />
                        <Select
                            placeholder='Applied'
                            defaultValue='Applied'
                            style={{ width: 250 }}
                            size='large'
                            options={[
                                {
                                    value: 'Applied',
                                    label: 'Applied'
                                },
                                {
                                    value: 'Interviewing',
                                    label: 'Interviewing'
                                },
                                {
                                    value: 'Under Consideration',
                                    label: 'Under Consideration'
                                },
                                {
                                    value: 'Hired',
                                    label: 'Hired'
                                },
                                {
                                    value: 'No Offer',
                                    label: 'No Offer'
                                }
                            ]}
                            onChange={(e) => {
                                console.log(e);
                                setAddingRecord((pre) => {
                                    return { ...pre, status: e };
                                })
                            }} />
                        <Input placeholder='Resume' style={{ width: 250 }} size='large' onChange={(e) => {
                            setAddingRecord((pre) => {
                                return { ...pre, resume: e.target.value };
                            })
                        }} /> */}
                    </Form>
                </Modal>
                <Modal
                    title='Edit Status'
                    open={isEditing}
                    closable={false}
                    keyboard={false}
                    okText='Save'
                    onCancel={() => {
                        resetEditing();
                    }}
                    onOk={() => {
                        setDataSource((pre) => {
                            return pre.map(record => {
                                if (record.id === editingRecord.id) {
                                    //code to update database
                                    return editingRecord;
                                } else {
                                    return record;
                                }
                            })
                        })
                        resetEditing();
                    }}
                >
                    <Select
                        placeholder={editingRecord?.status}
                        style={{ width: 250 }}
                        size='large'
                        options={[
                            {
                                value: 'Applied',
                                label: 'Applied'
                            },
                            {
                                value: 'Interviewing',
                                label: 'Interviewing'
                            },
                            {
                                value: 'Under Consideration',
                                label: 'Under Consideration'
                            },
                            {
                                value: 'Hired',
                                label: 'Hired'
                            },
                            {
                                value: 'No Offer',
                                label: 'No Offer'
                            }
                        ]}
                        onChange={(e) => {
                            setEditingRecord((pre) => {
                                return { ...pre, status: e };
                            })
                        }} />
                </Modal>
            </Form>
        </ConfigProvider>


    );
}

export default AppTable;