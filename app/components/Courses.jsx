'use client';
import { useState } from 'react';

const courses = {
    "Web Development": [
      {
        id: 1,
        title: "React for Beginners",
        description: "Learn the fundamentals of React and build awesome web apps.",
        author: "John Doe",
        rating: 4.5,
        price: "$49.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 2,
        title: "Next.js Mastery",
        description: "Master Next.js with hands-on projects.",
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
        author: "Alice Johnson",
        rating: 4.7,
        price: "$39.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 4,
        title: "Machine Learning with TensorFlow",
        description: "Hands-on Machine Learning with TensorFlow and Keras.",
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
        author: "Sophia Wilson",
        rating: 4.6,
        price: "$79.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 6,
        title: "Docker and Kubernetes for Beginners",
        description: "Master container orchestration with Kubernetes.",
        author: "Chris Evans",
        rating: 4.8,
        price: "$59.99",
        image: "https://via.placeholder.com/300"
      }
    ],
    "Cybersecurity": [
      {
        id: 7,
        title: "Ethical Hacking and Penetration Testing",
        description: "Learn ethical hacking techniques and security testing.",
        author: "David Miller",
        rating: 4.7,
        price: "$89.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 8,
        title: "Cybersecurity Fundamentals",
        description: "Understand the core principles of cybersecurity.",
        author: "Emma Thompson",
        rating: 4.5,
        price: "$49.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 9,
        title: "Blockchain Security",
        description: "Explore security challenges in blockchain technology.",
        author: "Robert Johnson",
        rating: 4.6,
        price: "$69.99",
        image: "https://via.placeholder.com/300"
      },
      {
        id: 10,
        title: "Cloud Security Essentials",
        description: "Learn to secure cloud infrastructure effectively.",
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
    <div className="max-w-5xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {Object.keys(courses).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`py-2 px-4 text-sm font-semibold border-b-2 ${
              activeTab === category ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses[activeTab].map((course) => (
          <div key={course.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded">
              {course.price}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700 font-medium">By {course.author}</p>
                <p className="text-sm text-yellow-500 font-semibold">⭐ {course.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
