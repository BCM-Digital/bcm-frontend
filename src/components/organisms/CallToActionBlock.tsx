import { CallToActionBlock as CallToActionBlockType } from '@types'
import { Fragment, ReactElement } from 'react'
import Section from '@components/atoms/Section'
import clsx from 'clsx'
import SimpleCallToAction from '@components/atoms/SimpleCallToAction'
import ImageCallToAction from '@components/atoms/ImageCallToAction'
import Corridor from '@components/atoms/Corridor'
import FullScreenImageCallToAction from '@components/atoms/FullScreenImageCallToAction'

type CallToActionBlockProps = CallToActionBlockType & {
	className?: string
}

function CallToActionBlock({
	blockType,
	ctaBlockFields,
	className,
}: CallToActionBlockProps): ReactElement {
	const { cta, gridLayout } = ctaBlockFields
	const classes = clsx(blockType, className)

	return (
		<Section className={classes}>
			{
				gridLayout === 'fullscreen' ? (
					<Fragment>
						{cta && typeof cta !== 'string' && cta.type === 'basic' && (
							<SimpleCallToAction {...cta} />
						)}
						{cta && typeof cta !== 'string' && cta.type === 'image' && (
							<FullScreenImageCallToAction{...cta} />
						)}
					</Fragment>
				) : (
					<Corridor>
						{cta && typeof cta !== 'string' && cta.type === 'basic' && (
							<SimpleCallToAction {...cta} />
						)}
						{cta && typeof cta !== 'string' && cta.type === 'image' && (
							<ImageCallToAction {...cta} />
						)}
					</Corridor>
				)
			}
		</Section>
	)
}

export default CallToActionBlock
