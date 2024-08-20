'use client'

import { Page } from '@types'
import React, { Fragment, ReactElement } from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import Main from '@components/atoms/Main'
import RenderBlocks from '@components/organisms/RenderBlocks'
import PageHead from '@components/organisms/PageHead'

interface PageTemplateProps {
	page: Page
}

function PageTemplate({ page }: PageTemplateProps): ReactElement {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || '',
		depth: 1,
		initialData: page,
	})

	const { layout, pageHead } = data

	return (
		<Fragment>
			<PageHead {...pageHead} />
			<Main className="">
				{layout && (
					<RenderBlocks
						className="space-y-20 tablet-landscape:space-y-24 laptop:space-y-30"
						layout={layout}
					/>
				)}
			</Main>
		</Fragment>
	)
}

export default PageTemplate
export type { PageTemplateProps }
