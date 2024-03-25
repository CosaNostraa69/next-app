'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage
 } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {

    const [publicId, setPublicId] = useState(''); 
  return (
    <>
    {publicId &&
     <CldImage src={publicId} width={270} height={180} alt='Banner from Wavoon' />}
    <CldUploadWidget uploadPreset='wsyzknhg'
    options={{
        sources: ['local'],
        multiple: false,
        maxFiles: 5,
        styles: {
            palette: {
                window: '#000000',
                windowBorder: '#90a0b3',
                tabIcon: '#0078ff',
                menuIcons: '#2AD9FF',
                textDark: '#000000',
                textLight: '#FFFFFF',
                link: '#0078ff',
                action: '#FF620C',
                inactiveTabIcon: '#0E2F5A',
                error: '#F44235',
                inProgress: '#0078ff',
                complete: '#20B832',
                sourceBg: '#FFFFFF',
            },
            fonts: {
                default: null,
                "'Space Mono', monospace": {
                    url: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap',
                    active: true,
                },
        }},
    }}
    onUpload={(result, widget) =>{
if (result.event !== 'success') 
return;
const info = result.info as CloudinaryResult;
setPublicId(info.public_id);

}}>
        {({ open }) => 
        <button
         className='btn btn-primary'
         onClick={() => open() }>Upload</button>}
    </CldUploadWidget>
    </>
    );
};


export default UploadPage