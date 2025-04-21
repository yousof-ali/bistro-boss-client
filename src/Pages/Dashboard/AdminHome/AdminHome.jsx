import React from 'react';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaUsers } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { BsCalendarEvent } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data
        }

    })
    const pieData = chartData.map(data => {
        return {name:data._id , value:data.revenue}
    })
    return (
        <div>
            <div>
                {
                    user ? <h2 className='text-3xl font-semibold'>Hi, <span className='text-orange-400'>{user.displayName}</span> WellCome!</h2> : <h2 className='text-3xl font-semibold'>Hi WellCome Back!</h2>
                }

            </div>
            <div className="stats shadow ml-8 mt-8">
                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className='flex items-center text-3xl gap-6'>
                        <BsCalendarEvent />

                        <div className="stat-value text-secondary">{stats?.revenue}</div>
                    </div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>

                    <div className='flex items-center text-3xl gap-6'>
                        <FaUsers />
                        <div className="stat-value text-secondary">{stats?.users}</div>
                    </div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Products</div>
                    <div className='flex items-center text-3xl gap-6'>
                        <LuChefHat />

                        <div className="stat-value text-secondary">{stats?.products}</div>
                    </div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className='flex items-center text-3xl gap-6'>
                        <GrDeliver />

                        <div className="stat-value text-secondary">{stats?.orders}</div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="_id" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-1/2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                      
                    </ResponsiveContainer>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminHome;