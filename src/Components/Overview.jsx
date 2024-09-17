import React from 'react'
import { Link } from 'react-router-dom';
import socialLinks from '../Data/social.json'; // Adjust the path to your social.json file
import { LinkedIn, GitHub, Code, Article, YouTube, Subscriptions, Book, Instagram, Twitter } from '@mui/icons-material';

const iconComponents = {
  LinkedIn: LinkedIn,
  GitHub: GitHub,
  Code: Code,
  Article: Article,
};
export default function Overview() {
  return (
    <div className=' py-5 m-5 lg:m-0 lg:p-5 p-10 border rounded-md border-yellow-400 block lg:min-w-full lg:relative'>
          <p className='text-white text-justify text-us'>
            Shubham K. Jha is a native Indian from Varanasi. He has honed skills in web development persuing 
            bachelors in software engineering from IIIT Kalyani.<br/>
            During his recent SDE intership at Superbolter he has been interior designing tool using react-3-fibre and three js.
            He has also contributed in a ML based research paper on gait cycle analysis soon to be published under IEEE.
          </p>
          <Link to='https://docs.google.com/document/d/1jLZO5sQblygO5Y6eUtgaVYTFQ11IA081/edit?usp=drivesdk&ouid=112061286610992787672&rtpof=true&sd=true'>
            <button className="buttonr mx-5 my-10 lg:my-2 lg:mx-2">
              View Resume
            </button>
          </Link>
          <div
      className="p-0 flex  lg:p-2 items-center justify-center lg:m-2.5"
    >
      
        <div className="mt-2 px-2 mx-2 space-y-1"> {/* Reduced margin top */}
          {Array.from({ length: Math.ceil(socialLinks.length / 3) }, (_, rowIndex) => (
            <div key={rowIndex} className="flex justify-around space-x-4"> {/* Added spacing between icons */}
              {socialLinks.slice(rowIndex * 3, rowIndex * 3 + 3).map((socialLink, index) => {
                const IconComponent = iconComponents[socialLink.icon];
                return (
                  <Link
                    key={index}
                    to={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
                  >
                    <IconComponent style={{ color: 'white', fontSize: '32px' }} /> {/* Increased icon size */}
                  {/* <h1>{socialLink.title}</h1> */}
                  </Link>
                );
              })}
            </div>
          ))}
        
      </div>
    </div>
        </div>
  )
}
