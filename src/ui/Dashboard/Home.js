import React, { useCallback, useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MainContent from '../../components/Sidebar/MainContent';
import Card from "../../components/Card";
import Title from "../../shared/Title";
import Chart from "chart.js/auto";
import { report } from "../../api/leads";

export default function Home() {
  const [reportData, setReportData] = useState({});

  const getReport = useCallback(async () => {
    const data = await report();
    setReportData(data.data);
  }, [])

  useEffect(() => {
    getReport();
  }, [getReport]);

  useEffect(() => {
    const months = ["January", "February", "March"];
    const data = {
      labels: months,
      datasets: [
        {
          label: "Cold Leads",
          backgroundColor: "#0074D9",
          borderColor: "#0074D9",
          data: [reportData?.cold_leads?.monthly?.["1"] || 0, reportData?.cold_leads?.monthly?.["2"] || 0, reportData?.cold_leads?.monthly?.["3"] || 0],
        },
        {
          label: "Warm Leads",
          backgroundColor: "#FF851B",
          borderColor: "#FF851B",
          data: [reportData?.warm_leads?.monthly?.["1"] || 0, reportData?.warm_leads?.monthly?.["2"] || 0, reportData?.warm_leads?.monthly?.["3"] || 0],
        },
        {
          label: "Hot Leads",
          backgroundColor: "#2ECC40",
          borderColor: "#2ECC40",
          data: [reportData?.hot_leads?.monthly?.["1"] || 0, reportData?.hot_leads?.monthly?.["2"] || 0, reportData?.hot_leads?.monthly?.["3"] || 0],
        }
      ],
    };
    const config = {
      type: "bar",
      data: data,
      options: {},
    };
    const chart = new Chart(
      document.getElementById("chart"),
      config
    );

    return () => {
      chart.destroy();
    }
  }, [reportData])

  return (
    <>
      <Title title="Dashboard" />
      <Sidebar id={"sidebar"} />
      <MainContent>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <div className='cards mt-4 grid grid-cols-4 gap-2'>
          <Card className='w-full' style={{ backgroundColor: "rgb(162 28 175)", color: "white" }}>
            <h1 className='text-2xl'>All Leads</h1>
            <span>{reportData?.all_leads || 0}</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#0074D9", color: "white" }}>
            <h1 className='text-2xl'>Cold Leads</h1>
            <span>{reportData?.cold_leads?.all || 0}</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#FF851B", color: "white" }}>
            <h1 className='text-2xl'>Warm Leads</h1>
            <span>{reportData?.warm_leads?.all || 0}</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#2ECC40", color: "white" }}>
            <h1 className='text-2xl'>Hot Leads</h1>
            <span>{reportData?.hot_leads?.all || 0}</span>
          </Card>
        </div>

        <canvas className="p-10" id="chart"></canvas>
      </MainContent>
    </>
  )
};
