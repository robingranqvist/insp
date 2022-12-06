import fs from "fs";
import path from "path";

const POSTS_PER_PAGE = 24;

import {
  HeadTag,
  Nav,
  Marquee,
  Categories,
  CardGrid,
  Pagination,
} from "@/components/index";

import { getInspoItems } from "@/utils/index";

export default function Home({ items, itemAmount, numPages, currentPage }) {
  return (
    <>
      <HeadTag
        title="Design Inspiration"
        description="Design inspiration by Robin"
      />

      <div className="container is--index">
        <Nav />

        <Marquee text="Design Inspiration" />

        <Categories active="all" />

        <CardGrid
          items={items}
          itemAmount={itemAmount}
          currentPage={currentPage}
          numPages={numPages}
        />

        <Pagination numPages={numPages} currentPage={currentPage} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const pages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= pages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = fs.readdirSync(path.join("content"));
  const page = parseInt((params && params.page_index) || 1);

  const inspoItems = getInspoItems();

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;

  const orderedInspoItems = inspoItems.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      items: orderedInspoItems,
      itemAmount: files.length,
      numPages,
      currentPage: page,
    },
  };
}
