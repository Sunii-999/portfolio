const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove all non-word chars except hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and repeated hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const blogData = {
  blogs: [
    {
      id: 1,
      title: "30 Days of Python",
      slug: createSlug("30 Days of Python"), 
      description: "This is my first ever blog post to my portfolio where i will be updating anyone thats interested in my career growth. This blog post will be about my journey of learning python in 30 days. I will be sharing my progress, challenges and achievements throughout the month.",
      image: "/img/blog/python/header.png",
      liveUrl: null,
      githubUrl: null, // Note: Consider making this repo public or adding a video demo link.
      featured: true,
      category: "Coding",
      completionDate: "16/10/2025",
      readme: "/readmes/blog/30-python.md",

    },
  ],
  blogCategories: [
    "Carreer",
    "Coding",
    "Design",
  ]
};

// Original export format (if you must keep it exactly as-is)
export const blog = blogData.blogs;
export const blogCategories = blogData.blogCategories;