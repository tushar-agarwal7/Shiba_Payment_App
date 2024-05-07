"use client"
import { useSession } from "next-auth/react";
import prisma from "@repo/db/client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Chart from "chart.js/auto";

export function Dashboard({ amount }: any) {
    const session = useSession();
    console.log(session)
    const [balance, setBalance] = useState(0);
    const router = useRouter();
    const chartRef = useRef(null);

    useEffect(() => {
        setBalance(amount);

        // Example: Load chart data
        loadChartData();
    }, [amount]);

    const loadChartData = () => {
        // Example: Fetch chart data from backend or generate sample data
        const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
        const data = [1000, 1500, 1200, 1800, balance]; // Example: balance is the current balance

        renderChart(labels, data);
    };

    const renderChart = (labels: string[], data: number[]) => {
        if (chartRef.current !== null) {
            // Destroy existing Chart instance
            chartRef.current.destroy();
        }

        const ctx = document.getElementById("balanceChart") as HTMLCanvasElement;
        chartRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Balance",
                    data: data,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md font-serif">
            <h1 className="text-4xl text-blue-400 mb-4">Hi, {session.data?.user?.name}</h1>
            <h1 className="text-4xl text-dark-400 mb-4">Your balance: {balance/100}</h1>
            <canvas id="balanceChart" width="400" height="200"></canvas>
            <div className="animate-bounce">
                <button onClick={() => router.push("/p2p")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Do Something
                </button>
            </div>
        </div>
    );
}
