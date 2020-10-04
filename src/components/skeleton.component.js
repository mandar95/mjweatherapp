import React from 'react';
import Skeleton from 'react-loading-skeleton';


function CitySkeleton() {
    return (
        <div className="w-row">
            <div className="w-left">
                <i><Skeleton style={{
                    'borderRadius': '50%',
                    'height': '150px',
                    'width': '150px',
                    'marginTop': '50px'
                }} /></i><br />
                <div className="w-city" style={{ 'marginTop': '10px' }}>
                    <span><Skeleton width={150} /></span><br />
                    <span><Skeleton width={180} /></span>
                </div>
            </div>
            <div className="w-right">
                <div className="w-right-child">
                    <div><Skeleton width={100} /></div>
                    <div><Skeleton width={150} /></div>
                    <div><Skeleton width={50} /></div>
                    <div><Skeleton width={50} /></div>
                </div>
            </div>
        </div>
    )
}

function ForecastSkeleton() {
    return [1, 2, 3, 4, 5, 6].map((item, i) => {
        return (
            <div className="w-card" key={i}>
                <div className="w-body" style={{ 'display': 'grid' }}>
                    <Skeleton width={60} />
                    <Skeleton circle={true} height={50} width={50} style={{ 'margin': '20px' }} />
                    <div>
                        <Skeleton width={40} />
                    </div>
                </div>
            </div>
        )
    })
}

export {
    CitySkeleton,
    ForecastSkeleton
}