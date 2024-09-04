import { fetchNews, fetchNewsItems } from '@graphql'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMeta } from '@utilities/generateMeta'
import NewsTemplate from '@components/templates/NewsTemplate'

type NewsPageType = {
	params: { slug: string }
}

export async function generateMetadata({
	params,
}: NewsPageType): Promise<Metadata> {
	const { slug } = params
	const news = await fetchNews(slug)
	return generateMeta({ doc: news })
}

const NewsPage = async ({ params }: NewsPageType) => {
	const { slug } = params
	const news = await fetchNews(slug)

	if (!news) return notFound()

	return <NewsTemplate news={news} />
}

export default NewsPage

export async function generateStaticParams() {
	const newsItems = await fetchNewsItems()
	return newsItems.map((project) => ({
		slug: newsItems.slug,
	}))
}
