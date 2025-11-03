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
      githubUrl: "https://github.com/Sunii-999/30-day_python/tree/main", // Note: Consider making this repo public or adding a video demo link.
      featured: true,
      category: "Coding",
      completionDate: "16/10/2025",
      readme: "/readmes/blog/30-python.md",

    },
    {
      id: 2,
      title: "The Power of the Senses in Design and Experience",
      slug: createSlug("The Power of the Senses in Design and Experience"), 
      description: "The power of the senses in design and experience is topic that i find immensely interesting and it explores how our senses influence our perception and interaction with the world around us. In this blog post, I dive into the role of the senses in design and experience, and how they can be leveraged to create more engaging and immersive experiences.",
      image: "/img/blog/sense/header.png",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      category: "Design",
      completionDate: "03/11/2025",
      readme: "/readmes/blog/the-power-of-sense.md",

    },
  ],
  blogCategories: [
    "Carreer",
    "Coding",
    "Design",
  ]
};

export const blog = blogData.blogs;
export const blogCategories = blogData.blogCategories;