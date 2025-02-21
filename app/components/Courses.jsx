'use client';
import { useState } from 'react';
import { FaAws, FaDocker, FaPython, FaReact, FaShieldAlt, FaStar, FaUserSecret, FaUserShield } from "react-icons/fa";
import { SiHiveBlockchain, SiNextdotjs, SiTensorflow } from "react-icons/si";
import { BsShieldLockFill } from "react-icons/bs";




const courses = {
    "Web Development": [
      {
        id: 1,
        title: "React for Beginners",
        description: "Learn the fundamentals of React and build awesome web apps.",
        icon:<FaReact />,
        author: "John Doe",
        rating: 4.5,
        price: "$49.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 2,
        title: "Next.js Mastery",
        description: "Master Next.js with hands-on projects.",
        icon:<SiNextdotjs />,
        author: "Jane Smith",
        rating: 4.8,
        price: "$59.99",
        image: "https://via.placeholder.com/300"
      }
    ],
    "Data Science": [
      {
        id: 3,
        title: "Python for Data Science",
        description: "Analyze data efficiently using Python.",
        icon:<FaPython />,
        author: "Alice Johnson",
        rating: 4.7,
        price: "$39.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 4,
        title: "Machine Learning with TensorFlow",
        description: "Hands-on Machine Learning with TensorFlow and Keras.",
        icon:<SiTensorflow />,
        author: "Michael Brown",
        rating: 4.9,
        price: "$69.99",
        image: "https://via.placeholder.com/300"
      }
    ],
    "Cloud Computing": [
      {
        id: 5,
        title: "AWS Certified Solutions Architect",
        description: "Prepare for AWS certification with hands-on labs.",
        icon:<FaAws />,
        author: "Sophia Wilson",
        rating: 4.6,
        price: "$79.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 6,
        title: "Docker and Kubernetes for Beginners",
        description: "Master container orchestration with Kubernetes.",
        icon:<FaDocker />,
        author: "Chris Evans",
        rating: 4.8,
        price: "$59.99",
        image: "https://via.placeholder.com/300"
      },
      
    ],
    "Cybersecurity": [
      {
        id: 7,
        title: "Ethical Hacking and Penetration Testing",
        description: "Learn ethical hacking techniques and security testing.",
        icon:<FaUserShield />,
        author: "David Miller",
        rating: 4.7,
        price: "$89.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 8,
        title: "Cybersecurity Fundamentals",
        description: "Understand the core principles of cybersecurity.",
        icon:<FaShieldAlt />,
        author: "Emma Thompson",
        rating: 4.5,
        price: "$49.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 9,
        title: "Blockchain Security",
        description: "Explore security challenges in blockchain technology.",
        icon:<SiHiveBlockchain />,
        author: "Robert Johnson",
        rating: 4.6,
        price: "$69.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 10,
        title: "Cloud Security Essentials",
        description: "Learn to secure cloud infrastructure effectively.",
        icon:<BsShieldLockFill />,
        author: "Linda White",
        rating: 4.8,
        price: "$79.99",
        image: "https://via.placeholder.com/300"
      }
    ]
  };
  

export default function Courses() {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <div className="container mx-auto p-4 md:h-screen flex items-center">
    <div className='w-full'>  {/* Tabs */}
        <h2 className='text-center text-4xl font-bold mb-20'>Most Popular Courses</h2>
      <div className="flex flex-col md:flex-row space-x-4 mb-16">
        {Object.keys(courses).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`py-2 px-4 text-md font-semibold border-b-2 ${
              activeTab === category ? "bg-green-700 rounded-full text-white" : "border-transparent text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-6 w-full">
        {courses[activeTab].map((course) => (
          <div key={course.id} className="relative bg-white rounded-xl shadow-xl shadow-gray-200 overflow-hidden px-2 py-8">

            <span className='text-7xl mx-auto text-center flex justify-center my-6 text-orange-400'>{course.icon}</span>
            <div className="absolute top-2 right-2 bg-gray-100 text-gray-600 px-2 py-1 text-sm font-semibold rounded">
              {course.price}
            </div>
            <div className="p-4 pb-0">
              <h3 className="text-xl mb-2 font-semibold">{course.title}</h3>
              <p className="text-md text-gray-600 mb-2">{course.description}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-md text-gray-700 font-medium">By {course.author}</p>
                <p className="text-md text-yellow-500 font-semibold flex"><FaStar size={18} className='mr-1'/> {course.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div></div>
    </div>
  );
}
