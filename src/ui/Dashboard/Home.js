import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import MainContent from '../../components/Sidebar/MainContent';
import Card from "../../components/Card";
import Title from "../../shared/Title";
import Chart from "chart.js/auto";

export default function Home() {
  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: months,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "hsl(217, 57%, 51%)",
          borderColor: "hsl(217, 57%, 51%)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
          label: "My Second dataset",
          backgroundColor: "hsl(217, 57%, 51%)",
          borderColor: "hsl(217, 57%, 51%)",
          data: [3, 2, 3, 21, 22, 31, 5],
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
  }, [])

  return (
    <>
      <Title title="Dashboard" />
      <Sidebar id={"sidebar"} />
      <MainContent>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <div className='cards mt-4 grid grid-cols-4 gap-2'>
          <Card className='w-full' style={{ backgroundColor: "rgb(162 28 175)", color: "white" }}>
            <h1 className='text-2xl'>All Leads</h1>
            <span>10</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#0074D9", color: "white" }}>
            <h1 className='text-2xl'>Cold Leads</h1>
            <span>3</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#FF851B", color: "white" }}>
            <h1 className='text-2xl'>Warm Leads</h1>
            <span>2</span>
          </Card>
          <Card className='w-full' style={{ backgroundColor: "#2ECC40", color: "white" }}>
            <h1 className='text-2xl'>Hot Leads</h1>
            <span>5</span>
          </Card>
        </div>

        <canvas className="p-10" id="chart"></canvas>
      </MainContent>
    </>
  )
};
