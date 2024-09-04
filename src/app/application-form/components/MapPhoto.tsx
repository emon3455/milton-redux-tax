import React from 'react';

interface MapPhotoProps {
    address: string;
    map: string;
}

const MapPhoto: React.FC<MapPhotoProps> = ({ address, map }) => {
    console.log(address);
    console.log(map);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
                <img
                    src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${encodeURIComponent(address)}&key=AIzaSyBC9ytu3b3UnI1x1BTW_c1mIUU_TxXEmYA`}
                    alt={`Street View of ${address}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
                <iframe
                    src={`${map}&output=embed`}
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default MapPhoto;
