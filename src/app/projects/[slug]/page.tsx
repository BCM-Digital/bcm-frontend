import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Project } from '../../../../payload/payload-types'
import { fetchPage } from '@graphql'
import { fetchPages } from '@graphql'
import PageTemplate from '@components/templates/PageTemplate'
import { generateMeta } from '@utilities/generateMeta'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Project({ params: { slug } }) {
	const { isEnabled: isDraftMode } = draftMode()

	let project: Project | null = null

	try {
		project = await fetchPage<Project>({
			collection: 'projects',
			slug,
			draft: isDraftMode,
		})
	} catch (error) {
		console.error(error) // eslint-disable-line no-console
	}

	if (!project) {
		notFound()
	}

	const { layout, relatedProjects } = project

	return (
		<React.Fragment>
			<ProjectHero project={project} />
			<Blocks
				blocks={[
					...layout,
					{
						blockType: 'relatedPosts',
						blockName: 'Related Projects',
						relationTo: 'projects',
						introContent: [
							{
								type: 'h4',
								children: [
									{
										text: 'Related projects',
									},
								],
							},
							{
								type: 'p',
								children: [
									{
										text: 'The projects displayed here are individually selected for this page. Admins can select any number of related projects to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate projects by category complete with pagination. To manage related projects, ',
									},
									{
										type: 'link',
										url: `/admin/collections/projects/${project.id}`,
										children: [
											{
												text: 'navigate to the admin dashboard',
											},
										],
									},
									{
										text: '.',
									},
								],
							},
						],
						docs: relatedProjects,
					},
				]}
			/>
		</React.Fragment>
	)
}

export async function generateStaticParams() {
	try {
		const projects = await fetchPages<Project>('projects')
		return projects?.map(({ slug }) => slug)
	} catch (error) {
		return []
	}
}

export async function generateMetadata({
	params: { slug },
}): Promise<Metadata> {
	const { isEnabled: isDraftMode } = draftMode()

	let project: Project | null = null

	try {
		project = await fetchPage<Project>({
			collection: 'projects',
			slug,
			draft: isDraftMode,
		})
	} catch (error) {}

	return generateMeta({ doc: project })
}
