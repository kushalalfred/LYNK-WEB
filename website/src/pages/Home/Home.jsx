import React from 'react';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section6 from './Section6/Section6';
 
import { useMediaQuery } from 'react-responsive';
 
export default function Home() {
  // Define the media query for large devices (you can adjust the breakpoint as needed)
  const isLargeDevice = useMediaQuery({ minWidth: 1024 }); // For example, 1024px and above is considered large.

  return (
    <div className='w-full bg-[#F7F5F0]'>
      <Section1 />
      <Section6/>
      {/* Conditionally render Section2 or Section3 based on screen size */}
      {isLargeDevice ? <Section3 /> : <Section2 />}
      {/* <Section5/> */}
      <Section4 />

    </div>
  );
}
