import React from 'react';
import Image from 'next/image';

interface MapPhotoProps {
    address: string;
    map: string;
}

const MapPhoto: React.FC<MapPhotoProps> = ({ address, map }) => {

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-0 pb-[66.67%]">
                <Image
                    src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${encodeURIComponent(address)}&key=AIzaSyDV1I-VK7KrnnU78YxHp6qgmyw5CP0UwG0`}
                    alt={`Street View of ${address}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
                <iframe
                    src={`${map}&output=embed`}
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