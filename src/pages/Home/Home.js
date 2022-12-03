import React, { useEffect, useState } from 'react';
import ExpCard from './ExpCard';
import SearchField from './SearchField/SearchField';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allExp, setAllExp] = useState([])
    useEffect(() => {
        fetch("expdata.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllExp(data)
            })
    }, [])

    return (
        <div className='md:flex md:px-10 lg:px-10 space-x-5'>
            <div className=''> <SearchField /> </div>



            <div className='flex-1'>
                <div>home card</div>
                <div>
                    <h1>exp card</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {/* {
                            allExp.map(exp => <ExpCard exp={exp} />)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;