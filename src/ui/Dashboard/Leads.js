import React, { useCallback, useContext, useEffect, useState } from 'react';
import Title from "../../shared/Title";
import Sidebar from "../../components/Sidebar";
import MainContent from '../../components/Sidebar/MainContent';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import AppDataStore from "../../contexts/AppDataStore";
import { useNavigate } from "react-router-dom";
import { leads } from "../../api/leads";

export default function Leads() {
    const { user } = useContext(AppDataStore);
    const navigate = useNavigate();
    const [leadsData, setLeadsData] = useState([]);
    const [leadBody, setLeadsBody] = useState([[]]);
    const [leadsPagination, setLeadsPagination] = useState({});
    const [type] = useState("all");
    const [page, setPage] = useState(1);
    const [limit] = useState(15);
    const [sortField] = useState("created_at");
    const [sortOrder] = useState("desc");

    const getLeads = useCallback(async () => {
        const data = await leads({ type, page, limit, sortOrder, sortField });
        setLeadsData(data.data);
        setLeadsPagination(data.pagination);
        setLeadsBody(data.data.map(d => {
            return [d.name, d.company, d.email, d.phone, d.sent, d.responded, d.opened]
        }))
    }, [type, page, limit, sortField, sortOrder]);

    useEffect(() => {
        if (!user) {
            navigate('/', { replace: true });
        }
    }, [navigate, user]);

    useEffect(() => {
        getLeads()
    }, [getLeads]);

    return (
        <>
            <Title title="Leads" />
            <Sidebar id={"sidebar"} />
            <MainContent>
                <h1 className='text-4xl font-bold'>Leads</h1>
                {
                    leadsData ?
                        <Table className='mt-3' headings={["Name", "Company", "Email", "Phone", "Sent", "Responded", "Opened"]} body={leadBody} /> : "Loading Data..."
                }
                {
                    leadsPagination ?
                        <Pagination limit={limit} totalItems={leadsPagination.total} onChange={e => {
                            setPage(e.pageNumber);
                        }} /> : ""
                }
            </MainContent>
        </>
    )
}