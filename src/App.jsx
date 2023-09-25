import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';



const App = ()=> (
    <>
        <h1 className="heading">List of popular Netflix Series to watch.</h1>
        {Sdata.map((val, index) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link} />
            );
        })
        }
    </>
);

export default App;

