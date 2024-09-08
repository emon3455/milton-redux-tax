"use client";
import React, { useState, useEffect, MouseEvent, FormEvent } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { useAppSelector } from '@/Redux/hooks';
import MapPhoto from './MapPhoto';
import { errorAlert, successAlert } from '@/utils/alert-function';
import { useRouter } from 'next/navigation';
import CButton from '@/utils/CButton/CButton';

const libraries: Array<"places"> = ["places"];

const ApplicationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
    const addressInfo = useAppSelector(
        (state) => state.addressSlice.addressInfo
    );

    const [propertyFields, setPropertyFields] = useState<string[]>([
        addressInfo?.formatted_address || ''
    ]);

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [mobilePhone, setMobilePhone] = useState<string>('');
    const [alternatePhone, setAlternatePhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pinCode, setPinCode] = useState<string>('');
    const [sendTextUpdates, setSendTextUpdates] = useState<boolean>(false);
    const [autocompleteInstances, setAutocompleteInstances] = useState<google.maps.places.Autocomplete[]>([]);

    const router = useRouter();

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDV1I-VK7KrnnU78YxHp6qgmyw5CP0UwG0",
        libraries,
    });

    useEffect(() => {
        if (isLoaded) {
            const newInstances: google.maps.places.Autocomplete[] = [];
            propertyFields.forEach((_, index) => {
                const input = document.getElementById(`property-address-${index}`) as HTMLInputElement;
                if (input) {
                    const autocomplete = new google.maps.places.Autocomplete(input);
                    autocomplete.addListener("place_changed", () => {
                        const place = autocomplete.getPlace();
                        if (place && place.formatted_address) {
                            const updatedFields = [...propertyFields];
                            updatedFields[index] = place.formatted_address;
                            setPropertyFields(updatedFields);
                        }
                    });
                    newInstances.push(autocomplete);
                }
            });
            setAutocompleteInstances(newInstances);
        }
    }, [isLoaded, propertyFields]);

    const addPropertyField = () => {
        setPropertyFields([...propertyFields, '']);
    };

    const handlePropertyChange = (index: number, value: string) => {
        const fields = [...propertyFields];
        fields[index] = value;
        setPropertyFields(fields);
    };

    const removePropertyField = (index: number) => {
        const fields = [...propertyFields];
        fields.splice(index, 1);
        setPropertyFields(fields);
    };

    const handleClearFields = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPropertyFields([addressInfo?.formatted_address || '']);
        setFirstName('');
        setLastName('');
        setMobilePhone('');
        setAlternatePhone('');
        setEmail('');
        setPinCode('');
        setSendTextUpdates(false);
    };

    const handleFindAddress = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            mobilePhone,
            alternatePhone,
            email,
            pinCode,
            sendTextUpdates,
            properties: propertyFields
        };

        try {
            const response = await fetch('https://services.leadconnectorhq.com/hooks/Hl1CNBmuHQSHveigtUSl/webhook-trigger/99fe8983-6b13-4ed1-a6c6-42134c69e582', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                successAlert({
                    title: "Form Submitted Successfully!",
                    text: "We have sent you an Agreement to sign from DocuSign. Please check your Email inbox or spam, Thank you.",
                    timer: 12000
                })
            }
        } catch (error) {
            console.log(error);
            errorAlert({
                title: "Form submission failed!",
                text: "Something went wrong! Please try again.",
            })
        }
        finally{
          setLoading(false)
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Application</h2>
            <div className="w-16 h-1 bg-blue-400 mt-2 mb-6"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="First Name*"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                        <input
                            required
                            type="text"
                            placeholder="Last Name*"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                        <input
                            required
                            type="text"
                            placeholder="Mobile Phone*"
                            value={mobilePhone}
                            onChange={(e) => setMobilePhone(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={sendTextUpdates}
                                onChange={(e) => setSendTextUpdates(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <label className="">Send me text updates.</label>
                        </div>
                        <input
                            type="text"
                            placeholder="Alternate Phone (Optional)"
                            value={alternatePhone}
                            onChange={(e) => setAlternatePhone(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                        <input
                            type="text"
                            placeholder="PIN Code (Optional)"
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                        />
                    </div>

                    <div className="space-y-4">
                        {propertyFields.map((property, index) => (
                            <div key={index} className="flex flex-col space-y-2">
                                <input
                                    required
                                    id={`property-address-${index}`}
                                    type="text"
                                    placeholder="Enter Your Property Address"
                                    value={property}
                                    onChange={(e) => handlePropertyChange(index, e.target.value)}
                                    className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                                />
                                {index === propertyFields.length - 1 && (
                                    <button
                                        type="button"
                                        onClick={addPropertyField}
                                        className="bg-gradient-to-r from-[#9b65e7] to-[#39cbce] text-white px-6 font-semibold py-3 rounded-md"
                                    >
                                        + Add Another Property
                                    </button>
                                )}
                                {propertyFields.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removePropertyField(index)}
                                        className="text-red-500 text-sm"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {
                addressInfo && <MapPhoto address={addressInfo?.formatted_address} map={addressInfo?.url}/>
                }
                <div className="flex mt-4 space-x-4">
                    <CButton
                      variant="solid"
                      type='submit'
                      className='bg-gradient-to-r from-[#9b65e7] to-[#39cbce] text-white px-6  font-semibold lg:py-2 rounded-lg'
                      fontSize="text-lg"
                      loading={loading}
                    >
                      Submit
                    </CButton>
                    <button onClick={handleClearFields} className="bg-gray-500 text-white px-4 font-semibold lg:py-2 rounded-sm">Clear Fields</button>
                    <button onClick={handleFindAddress} className="bg-blue-500 text-white px-6 lg:font-semibold lg:py-2 rounded-sm">Can not find my address?</button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
