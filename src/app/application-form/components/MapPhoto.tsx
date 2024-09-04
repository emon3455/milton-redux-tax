import React from 'react';

interface MapPhotoProps {
    address: string;
    map: string;
}
const MapPhoto: React.FC<MapPhotoProps> = ({ address, map }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
            <img
                src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=4007+Barker+Cypress+Rd,+Houston,+TX+77084&key=AIzaSyBC9ytu3b3UnI1x1BTW_c1mIUU_TxXEmYA"
                alt="Street View of 4007 Barker Cypress Rd, Houston, TX 77084"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
        </div>
        <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
            <iframe
                src="https://maps.google.com/maps?q=7007%20NE%20Cornfoot%20Rd,%20Portland,%20OR%2097218&output=embed"
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
