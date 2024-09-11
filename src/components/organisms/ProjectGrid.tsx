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

	return (
		<div className={classes}>
			{introText && <RichText content={introText} />}

			<Grid className="grid-flow-row-dense">
				{tiles &&
					tiles.map((medium, index) => {
						const {
							type,
							width,
							height,
							project,
							post,
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

						const postHref =
							type === 'newsArticle' && post?.slug
								? `/posts/${post.slug}`
								: undefined

						return (
							<div key={index} className={tileClasses}>
								{type && type === 'project' ? (
									<div className="group/tile flow grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden bg-dark">
										{project.thumbnail && (
											<Media
												resource={project.thumbnail}
												className="col-span-full col-start-1 row-span-full row-start-1"
												imgClassName="object-cover object-center w-full h-full opacity-90"
											/>
										)}
										<div className="relative z-10 col-span-full col-start-1 row-start-1 -translate-y-full self-start p-5 transition duration-500 group-hover/tile:translate-y-0">
											<h3 className="inline-flex rounded-lg bg-white px-4 py-2">
												{project.title}
											</h3>
										</div>
										{href && (
											<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/tile:translate-y-0">
												<Link
													className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
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
								) : type && type === 'newsArticle' ? (
									<div className="group/post flow grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden bg-light">
										{post.thumbnail && (
											<Media
												resource={post.thumbnail}
												className="col-span-full col-start-1 row-span-full row-start-1"
												imgClassName="object-cover object-center w-full h-full opacity-90"
											/>
										)}
										<div className="relative z-10 col-span-full col-start-1 row-start-1 -translate-y-full self-start p-5 transition duration-500 group-hover/post:translate-y-0">
											<h3 className="inline-flex rounded-lg bg-white px-4 py-2">
												{post.title}
											</h3>
										</div>
										{postHref && (
											<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/post:translate-y-0">
												<Link
													className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
													href={postHref}
													target="_self"
													role="link"
												>
													Full story
													<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
												</Link>
											</div>
										)}
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
