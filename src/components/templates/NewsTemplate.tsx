'use client'
import React, { Fragment } from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { News } from '@types'

import PageHead from '@components/organisms/PageHead'
import Main from '@components/atoms/Main'
import RenderBlocks from '@components/organisms/RenderBlocks'

type NewsTemplateProps = {
	article: News
}

const NewsTemplate: React.FC<NewsTemplateProps> = ({ article }) => {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || '',
		depth: 1,
		initialData: article,
	})
	const { layout, pageHead } = data
	return (
		<Fragment>
			<div className="space-y-12">
				<PageHead {...pageHead} />
				<Main>
					{layout && <RenderBlocks className="space-y-12" layout={layout} />}
				</Main>
			</div>
		</Fragment>
	)
}

export default NewsTemplate
