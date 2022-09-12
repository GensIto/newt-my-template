import { fetchApp, fetchArticles, fetchCategories } from "../lib/api";
import { Archive, ArchiveProps } from "../components/Archive";

export default function ArchivePage(props: ArchiveProps) {
  return <Archive {...props} />;
}

export async function getStaticProps(): Promise<{ props: ArchiveProps }> {
  const app = await fetchApp();
  const categories = await fetchCategories();
  const { articles, total } = await fetchArticles();
  return {
    props: {
      app,
      categories,
      articles,
      total,
    },
  };
}
