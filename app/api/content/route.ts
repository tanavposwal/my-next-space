import { NextResponse } from "next/server";

let posts = [
  {
    title: "Understanding Python Decorators",
    slug: "understanding-python-decorators",
    content: "Python decorators are a powerful feature...",
    author: "Tanav",
  },
  {
    title: "React Hooks: Simplifying State Management",
    slug: "react-hooks-simplifying-state-management",
    content: "React Hooks revolutionized the way...",
    author: "Tanav",
  },
  {
    title: "Introduction to Machine Learning with Python",
    slug: "introduction-to-machine-learning-with-python",
    content: "Machine Learning is a fascinating field...",
    author: "Tanav",
  },
  {
    title: "Exploring the World of Cryptocurrencies",
    slug: "exploring-cryptocurrencies",
    content: "Cryptocurrencies have been gaining popularity...",
    author: "Tanav",
  },
  {
    title: "Building Scalable Web Applications with Node.js",
    slug: "building-scalable-web-applications-with-nodejs",
    content: "Node.js is a powerful runtime environment...",
    author: "Tanav",
  },
  {
    title: "Diving into Data Structures and Algorithms",
    slug: "diving-into-data-structures-and-algorithms",
    content: "Data structures and algorithms are fundamental...",
    author: "Tanav",
  },
  {
    title: "Exploring the Latest Trends in Cybersecurity",
    slug: "latest-trends-in-cybersecurity",
    content: "Cybersecurity threats continue to evolve...",
    author: "Tanav",
  },
  {
    title: "Mastering Modern Web Development with JavaScript",
    slug: "mastering-modern-web-development-with-javascript",
    content: "JavaScript remains the backbone of web development...",
    author: "Tanav",
  },
  {
    title: "Getting Started with Kubernetes: A Beginner's Guide",
    slug: "getting-started-with-kubernetes",
    content: "Kubernetes is a powerful container orchestration platform...",
    author: "Tanav",
  },
  {
    title: "The Rise of Artificial Intelligence: A Comprehensive Overview",
    slug: "rise-of-artificial-intelligence",
    content: "Artificial Intelligence is reshaping industries...",
    author: "Tanav",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
