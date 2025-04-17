import React, { Suspense, lazy} from 'react';

const ProgressBar = lazy (() => import ('../components/ProgressBar'));

export default function progress()
{
    return(
        <div>
             <Suspense fallback={<p>Loading ...</p>}>
        <ProgressBar />
        </Suspense>
        </div>
    )
}