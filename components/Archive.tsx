import { AppMeta, Content } from "newt-client-js";
import Head from "next/head";
import styles from "../styles/Archive.module.scss";
import { Cover } from "../components/Cover";
import { Layout } from "../components/Layout";
import { Dropdown } from "../components/Dropdown";
import { Category } from "../types/category";
import { ArticleCard } from "../components/ArticleCard";
import { Article } from "../types/article";
import { Pagination } from "../components/Pagination";

export interface ArchiveProps {
  app: AppMeta;
  categories: (Content & Category)[];
  articles: (Content & Article)[];
  total: number;
  page?: number;
  categorySlug?: string;
}

export function Archive({
  app,
  categories,
  articles,
  total,
  page = 1,
  categorySlug = "",
}: ArchiveProps) {
  return (
    <Layout app={app}>
      <Head>
        <title>
          {`${app?.name} | Archive` || `${app?.uid} | Archive` || ""}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {app.cover?.value && <Cover app={app} />}
      <div className={styles.Articles}>
        <Dropdown categories={categories} selected={categorySlug} />
        <div className={styles.Inner}>
          {articles.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
        <Pagination
          total={total}
          current={page}
          basePath={categorySlug ? `/category/${categorySlug}` : ``}
        />
      </div>
    </Layout>
  );
}
