import React from 'react'

function Timeline() {
  return (
    <div>
      <h1 className='p-10 text-left font-bold text-white text-xl italic'>Academic History</h1>
      <ul className="timeline text-white timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellow"
        className="h-5 w-5 ">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10 md:text-end">
      <time className="font-mono italic lg:text-xs">2025</time>
      <div className="text-lg font-black lg:text-xs">BTech in Computer Science And Engineering</div>
      <ul>
        <li className='lg:text-xs'>Indian Institute Of Information Technology Kalyani</li>
        <li className='lg:text-xs'>CGPA:8.3</li>
      </ul>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellow"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    
    <div className="timeline-start mb-10 md:text-end">
    <time className="font-mono italic lg:text-xs">2020</time>
      <div className="text-lg font-black lg:text-xs">Senior Secondary - XIIth</div>
      <ul>
        <li className='lg:text-xs'>CBSE</li>
        <li className='lg:text-xs'>Percentage: 88.4%</li>
      </ul>
    </div>
  </li>
</ul>
    </div>
  )
}

export default Timeline
