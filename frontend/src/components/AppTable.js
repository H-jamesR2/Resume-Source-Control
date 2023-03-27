import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Button, Table, Tag, ConfigProvider } from "antd";
import { FileTextTwoTone, CloseCircleTwoTone, ScheduleTwoTone} from '@ant-design/icons';
import "../cssFiles/application.css";

function AppTable(prop) {
    // const [dataSource, setDataSource] = useState([]);
    const dataSource = prop.data;
    const columns = [
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
                if(record.status === "Scheduling Interview")
                {
                    tagColor = "orange";
                    icon = <ScheduleTwoTone twoToneColor="orange" />;
                }
                if(record.status === "No Offer")
                {
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
                    <Button>Edit</Button>
                </>
            }
        }
    ];
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "006ACC",
                    fontFamily: "Lekton",
                    fontSize: "16px",
                    fontWeightStrong: "900",
                    colorSuccessBg: "red",
                },
            }}
        >
            <Table className="table-container" columns={columns} dataSource={dataSource} />
        </ConfigProvider>


    );
}

export default AppTable;