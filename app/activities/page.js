import React, { Suspense, lazy} from 'react';

const ActivityCard = lazy (() => import ('../components/ActivityCard'));

export default function activities()
{
    return(
        <div>
            <Suspense fallback={<p>Loading ...</p>}>
        <ActivityCard />
        </Suspense>
        </div>
    )
}