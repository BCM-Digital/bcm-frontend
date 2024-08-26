'use client'
import { ProjectGrid as ProjectGridType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Corridor from '@components/atoms/Corridor'
import Grid from '@components/atoms/Grid'
import RichText from '@components/atoms/RichText'
import Media from '@components/atoms/Media'
import Heading from '@components/atoms/Heading'

type ProjectGridProps = ProjectGridType & {
	className?: string
}

function ProjectGrid({
	blockType,
	projectGridFields,
	className,
}: ProjectGridProps): ReactElement | null {
	if (!projectGridFields) return null
	const { introText, tiles } = projectGridFields

	const classes = clsx(blockType, className, 'flex flex-col gap-5')

	return (
		<div className={classes}>
			{introText && <RichText content={introText} />}
			<Grid>
				{tiles &&
					tiles.map((medium, index) => {
						const {
							type,
							width,
							height,
							project,
							image,
							tileText,
							invertBackground,
						} = medium

						const tileClasses = clsx(
							'col-span-full',
							height ? 'row-span-2' : '',
							width === 'oneThird' ? 'tablet:col-span-4' : '',
							width === 'half' ? 'tablet:col-span-6' : '',
							width === 'twoThirds' ? 'tablet:col-span-8' : ''
						)

						const textTileClasses = clsx(
							'w-full h-full flex items-center leading-loose',
							invertBackground ? 'bg-dark text-light' : 'bg-light text-dark'
						)
						return (
							<div key={index} className={tileClasses}>
								{type && type === 'project' ? (
									<div className="group grid h-full auto-rows-auto justify-end overflow-hidden bg-dark">
										<Media
											resource={project.thumbnail}
											className="col-start-1 row-span-2 row-start-1"
											imgClassName="object-cover object-center w-full h-full opacity-90"
										/>
										<div className="z-10 col-start-1 row-start-2 p-5">
											<Heading level="h3" className="font-medium text-white">
												{project.title}
											</Heading>
										</div>
									</div>
								) : type && type === 'image' ? (
									<Media
										resource={image}
										className="h-full w-full"
										imgClassName="object-cover object-center w-full h-full"
									/>
								) : type && type === 'text' ? (
									<div className={textTileClasses}>
										<RichText className="p-5 px-20" content={tileText} />
									</div>
								) : null}
							</div>
						)
					})}
			</Grid>
		</div>
	)
}

export default ProjectGrid
export type { ProjectGridProps }
