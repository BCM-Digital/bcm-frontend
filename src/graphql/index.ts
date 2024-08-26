import { CONTACT, GLOBALS, SETTINGS } from '@graphql/globals'
import { PAGE, PAGES } from '@graphql/pages'
import { PROJECT, PROJECTS } from '@graphql/projects'
import { POST, POSTS } from '@graphql/posts'
import { Contact, Header, Page, Project, Footer, Settings } from '@types'
import type { Config } from '../../payload/payload-types'

const next = {
	revalidate: 600,
}

const queryMap = {
	pages: {
		single: PAGE,
		multiple: PAGES,
		key: 'Pages',
	},
	posts: {
		single: POST,
		multiple: POSTS,
		key: 'Posts',
	},
	projects: {
		single: PROJECT,
		multiple: PROJECTS,
		key: 'Projects',
	},
}

export const fetchGlobals = async (): Promise<{
	contact: Contact
	footer: Footer
	header: Header
	settings: Settings
}> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?globals`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: GLOBALS,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error(errors)
		throw new Error()
	}

	return {
		contact: data.Contact,
		footer: data.Footer,
		header: data.Header,
		settings: data.Settings,
	}
}

export const fetchContact = async (): Promise<{
	contact: Contact
}> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?globals=contact`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: CONTACT,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error(errors)
		throw new Error()
	}

	return {
		contact: data.Contact,
	}
}

export const fetchPage = async (
	incomingSlugSegments?: string[]
): Promise<Page | null> => {
	const slugSegments = incomingSlugSegments || ['home']

	const slug = slugSegments[slugSegments.length - 1]
	// @ts-ignore
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?page=${slug}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PAGE,
				variables: {
					slug,
				},
			}),
		}
	).then((res) => {
		return res.json()
	})

	if (errors) {
		console.error('Page Errors', JSON.stringify(errors))
		throw new Error()
	}

	const pagePath = `/${slugSegments.join('/')}`

	const page = data.Pages?.docs.find(({ breadcrumbs }: Page) => {
		if (breadcrumbs) {
			const { url } = breadcrumbs[breadcrumbs.length - 1]
			return url === pagePath
		}

		return null
	})

	if (page) {
		return page
	}

	return null
}

export const fetchPages = async (): Promise<
	Array<{ breadcrumbs: Page['breadcrumbs']; slug: string }>
> => {
	// @ts-ignore
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?pages`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PAGES,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Pages Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Pages?.docs
}
