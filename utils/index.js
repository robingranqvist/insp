import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

const markdown = fs.readdirSync(path.join("content"));

export const getInspoItems = () => {
  const items = markdown.map((markdownFile) => {
    const slug = markdownFile.replace(".md", "");

    const meta = fs.readFileSync(path.join("content", markdownFile), "utf-8");

    const { data: frontmatter } = matter(meta);

    return {
      slug,
      frontmatter,
    };
  });

  return items.sort(sortByDate);
};

export const getCategoryInspoItems = (category) => {
  const items = getInspoItems();

  const itemsInCategory = items.filter(
    (item) => item.frontmatter.category.toLowerCase() === category.toLowerCase()
  );

  return itemsInCategory;
};

export const numPages = (items, POSTS_PER_PAGE) => {
  return Math.ceil(items.length / POSTS_PER_PAGE);
};
