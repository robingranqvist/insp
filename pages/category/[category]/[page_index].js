import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { numPages, getCategoryInspoItems } from "@/utils/index";

const POSTS_PER_PAGE = 24;

import {
  HeadTag,
  Nav,
  Marquee,
  Categories,
  CardGrid,
  Pagination,
} from "@/components/index";

export default function PageIndex({
  items,
  itemAmount,
  numPages,
  currentPage,
  category,
}) {
  return (
    <>
      <HeadTag
        title="Design inspiration by Robin"
        description="Design inspiration etc."
      />

      <div className="container is--index">
        <Nav />

        <Marquee text={category} />

        <Categories active={category} />

        <CardGrid
          items={items}
          currentPage={currentPage}
          itemAmount={itemAmount}
        />

        <Pagination
          numPages={numPages}
          currentPage={currentPage}
          category={category}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const paths = [];

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  categories.flatMap((category) => {
    for (let i = 1; i < numPages(category, POSTS_PER_PAGE) + 1; i++) {
      paths.push({
        params: { category, page_index: i.toString() },
      });
    }
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);
  const items = getCategoryInspoItems(params.category);

  const numPages = Math.ceil(items.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;

  const orderedItems = items.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      items: orderedItems,
      itemAmount: items.length,
      category: params.category,
      currentPage: page,
      numPages,
    },
  };
}
