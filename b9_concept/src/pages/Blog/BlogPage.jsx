import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const BlogPage = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "How Advanced Energy Scanning Detects Illness Before Appear",
      excerpt:
        "Explore how B9Concept’s world-leading Energy Scanning technology.",
      category: "Energy Scanning",
      date: "May 15, 2023",
      slug: "french-door-maintenance-tips",
      image:
        "https://www.etkho.com/wp-content/uploads/2021/12/gasto-energetico-hopsitalario-pic02-20211217-etkho-hospital-engineering.jpg",
    },
    {
      id: 2,
      title: "Beat Stress Naturally: The Power of Yoga & Breathing Techniques",
      excerpt:
        "Discover how personalized yoga and targeted breathing exercises used at B9Concept .",
      category: "Stress Naturally",
      date: "April 28, 2023",
      slug: "window-design-trends-2023",
      image:
        "https://irp.cdn-website.com/221fb7ec/dms3rep/multi/Understanding+the+Long-term+Benefits+of+Holistic+Care.png",
    },
    {
      id: 3,
      title: "Health Naturally: Say Goodbye to Inflammation, head ",
      excerpt:
        " IBS, eczema, chronic fatigue, and emotional eating—offering long-term relief and radiant health from within..",
      category: "Inflammation",
      date: "March 10, 2023",
      slug: "choosing-windows-for-your-climate",
      image:
        "https://www.weljii.com/wp-content/uploads/2011/03/does-irritable-bowel-syndrome-stress-management-work-1.jpg",
    },
    {
      id: 4,
      title:
        " Sound Therapy & RTT: Break Free from Anxiety and Emotional Blocks",
      excerpt:
        " Sound Techniques and Rapid  Techniques (RTT) can help you overcome anxiety, panic attacks, and trauma. ",
      category: "Sound Therapy",
      date: "February 22, 2023",
      slug: "energy-efficient-french-doors",
      image:
        "https://sensoryretreats.com/cdn/shop/articles/sound_therapy_healing_concentrated-woman-meditating-nature.jpg?v=1622757951&width=1500",
    },
  ];

  // Recent posts for sidebar (last 3)
  const recentPosts = [...blogs].slice(0, 3);

  // Categories
  const categories = [
    "Mind-Body Wellness",
    "Natural Therapies",
    "Holistic Lifestyle",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Meta (would be handled by React Helmet in real implementation) */}
      <title>B9 Concept Blog | Door & Window Design Tips and Trends</title>
      <meta
        name="description"
        content="Explore our blog for expert tips on French door maintenance, window design trends, and industry insights from Ishani Enterprises."
      />

      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          B9 Concept Blog
        </h1>
        <div className="w-24 h-1 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover non-medicinal techniques to overcome emotional and physical
          health challenges—customized for your unique wellness journey.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full mb-2">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-yellow-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{blog.date}</span>
                      <span className="text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 flex justify-center"
          >
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {blogs.filter((b) => b.category === category).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest articles and news delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogPage;
