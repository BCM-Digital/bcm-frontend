'use client'
import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Project } from '@types'

import PageHead from '@components/organisms/PageHead'
import Main from '@components/atoms/Main'
import RenderBlocks from '@components/organisms/RenderBlocks'

type ProjectTemplateProps = {
	project: Project
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || '',
		depth: 1,
		initialData: project,
	})
	const { layout, pageHead } = data
	return (
		<div>
			<PageHead {...pageHead} />
			<Main className="p-5">
				{layout && (
					<RenderBlocks
						className="space-y-20 tablet-landscape:space-y-24 laptop:space-y-30"
						layout={layout}
					/>
				)}
			</Main>
		</div>
	)
}

export default ProjectTemplate
