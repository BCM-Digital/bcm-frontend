import React, { Fragment, ReactElement } from 'react'
import clsx from 'clsx'
import Corridor from '@components/atoms/Corridor'
import Grid from '@components/atoms/Grid'
import Heading from '@components/atoms/Heading'
import { PageHead } from '@types'
import Paragraph from '@components/atoms/Paragraph'
import Overlay from '@components/atoms/Overlay'
import Media from '@components/atoms/Media'
import getImageUrl from '@utilities/getImageUrl'
import ButtonGroup from '@components/atoms/ButtonGroup'
type HeroProps =  PageHead & {
	className?: string
}

function Hero({ title, content, media, links }: HeroProps): ReactElement {
	const classes = clsx(
		'hero scroll-margin-top @container relative text-white h-screen-11/12 overflow-hidden tablet:h-svh'
	)
	const contentClasses = clsx(
		'absolute z-20 inset-0 flex flex-col justify-end pt-28 pb-12 tablet-landscape:justify-center tablet-landscape:pb-14 tablet-landscape:pt-34 laptop:pb-16 laptop:pt-36'
	)
	const imageClasses = clsx(
		'relative z-0 overflow-hidden w-screen h-svh'
	)
	return (
		<div className={classes} id="site-header">
			{media && typeof media !== 'string' && (
				<Fragment>
					<Overlay/>
					<Media
						className={imageClasses}
						imgClassName="object-cover object-center !w-screen !h-svh"
						videoClassName="object-cover object-center !w-screen !h-svh"
						resource={media}
						background={true}
						playing={true}
						priority
					/>
				</Fragment>
			)}
			<div className={contentClasses}>
			<Corridor className="relative z-10 flex flex-col">
				<Grid>
					{title && (
						<div className="col-span-full tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-6">
							<div className="space-y-4">
								<header className="space-y-3 @tablet-landscape:space-y-4">
									<Heading level="h1" title={title}>
										{title}
									</Heading>
									{content && (
										<Paragraph
											paragraph={content}
											className="text-body-md tablet:text-body-lg"
										/>
									)}
								</header>
								{links && links.length > 0 && <ButtonGroup links={links} />}
							</div>

						</div>
					)}
				</Grid>
			</Corridor>
			</div>
		</div>
	)
}

export default Hero
export type { HeroProps }
