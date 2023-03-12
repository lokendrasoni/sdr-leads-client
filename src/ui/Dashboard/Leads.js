import React, { useContext, useEffect } from 'react';
import Title from "../../shared/Title";
import Sidebar from "../../components/Sidebar";
import MainContent from '../../components/Sidebar/MainContent';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import AppDataStore from "../../contexts/AppDataStore";
import { useNavigate } from "react-router-dom";

export default function Leads() {
    const { user } = useContext(AppDataStore);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/', { replace: true });
        }
    }, [navigate, user]);

    return (
        <>
            <Title title="Leads" />
            <Sidebar id={"sidebar"} />
            <MainContent>
                <h1 className='text-4xl font-bold'>Leads</h1>
                <Table className='mt-3' headings={["h1", "h2"]} body={[["b1h1", "b1h2"], ["b2h1", "b2h2"]]} />
                <Pagination limit={10} totalItems={100} onChange={e => { console.log(e.pageNumber) }} />
            </MainContent>
        </>
    )
}