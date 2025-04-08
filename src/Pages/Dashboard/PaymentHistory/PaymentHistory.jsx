import SectionTitle from '../../../Components/SectionTitle';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments, isLoading, isError, error } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            console.log(res.data);
            return res.data;
        },
        enabled: !!user?.email, // Only fetch if user.email is available
    });

    if (isLoading) {
        return <div>Loading...</div>; // Loading message or spinner
    }

    if (isError) {
        return <div>Error: {error?.message || 'An error occurred while fetching data'}</div>; // Error message
    }

    return (
        <div>
            <div>
                <SectionTitle Heading={'PAYMENT HISTORY'} subHeading={'At a Glance!'} />
            </div>
            <div className='bg-white rounded shadow md:mx-12 p-4'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>TOTAL PAYMENTS : {payments?.length}</h2>
                </div>
                <div className="mt-6">
                    <table className="table-auto w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>ITEM Quantity</th>
                                <th>TOTAL AMOUNT</th>
                                <th>Transaction ID</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {payments?.map((single, indx) => (
                                <tr key={indx}>
                                    <td>{indx + 1}</td>
                                    <td>
                                        <p>{single.email}</p>
                                    </td>
                                    <td>{single.menuItemIds.length}</td>
                                    <td>{single.price}</td>
                                    <td>
                                        <p className='bg-base-300 px-2 rounded-full'>{single.transactionsId}</p>
                                    </td>
                                    <td>{single.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
