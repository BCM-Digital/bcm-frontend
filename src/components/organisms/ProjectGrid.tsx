'use client'
import { ProjectGrid as ProjectGridType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import getLinkUrl from '@utilities/getLinkUrl'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import Heading from '@components/atoms/Heading'
import RichText from '@components/atoms/RichText'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

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

	console.log(introText)

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

						const href =
							type === 'project' && project?.slug
								? `/projects/${project.slug}`
								: undefined

						return (
							<div key={index} className={tileClasses}>
								{type && type === 'project' ? (
									<div className="group/tile grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden bg-dark">
										<Media
											resource={project.thumbnail}
											className="col-span-full col-start-1 row-span-full row-start-1"
											imgClassName="object-cover object-center w-full h-full opacity-90"
										/>
										<div className="relative z-10 col-span-2 col-start-1 row-start-3 translate-y-full self-end bg-gradient-to-tr from-black/70 to-transparent p-5 transition duration-500 group-hover/tile:translate-y-0">
											<Heading
												level="h3"
												className="drop-drop-shadow-2xl font-bold text-white"
											>
												{project.title}
											</Heading>
										</div>
										{href && (
											<div className="group/link z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/tile:translate-y-0">
												<Link
													className="text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
													href={href}
													target="_self"
													role="link"
												>
													Full story
													<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
												</Link>
											</div>
										)}
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
