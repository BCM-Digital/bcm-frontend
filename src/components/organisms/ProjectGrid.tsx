'use client'
import { ProjectGrid as ProjectGridType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Corridor from '@components/atoms/Corridor'
import Grid from '@components/atoms/Grid'
import RichText from '@components/atoms/RichText'
import Media from '@components/atoms/Media'

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

	const classes = clsx(blockType, className)

	return (
		<div className={classes}>
			<Corridor>
				<RichText content={introText} />
				<Grid className="pt-8">
					{tiles.map((medium, index) => {
						const { type, size, project, image, tileText, invertBackground } =
							medium

						const tileClasses = clsx(
							'col-span-full',
							size === 'oneThird' ? 'tablet:col-span-4' : '',
							size === 'half' ? 'tablet:col-span-6' : '',
							size === 'twoThirds' ? 'tablet:col-span-8' : ''
						)

						const textTileClasses = clsx(
							'p-8',
							invertBackground ? 'bg-dark text-light' : 'bg-light text-dark'
						)

						return (
							<div key={index} className={tileClasses}>
								{type && type === 'project' ? (
									<div className="h-full bg-light p-8">{project.id}</div>
								) : type && type === 'image' ? (
									<Media
										resource={image}
										imgClassName="object-cover object-center w-full h-full"
									/>
								) : type && type === 'text' ? (
									<div className={textTileClasses}>
										<RichText content={tileText} />
									</div>
								) : null}
							</div>
						)
					})}
				</Grid>
			</Corridor>
		</div>
	)
}

export default ProjectGrid
export type { ProjectGridProps }
